/** 
*
* Created on 22/06/2018
*
* Used to format the values extracted from the database
* 
*/
var debug = require('debug')('brapi:server');
var hash = require('object-hash');


function getValueFromTable(key,value,path){
  var column="";
  value.length==0 ? column=key : column=value
  dbValue=path[column]
  if(dbValue==null || typeof dbValue == "object" ){ // this avoid getting tables in next iteration when values are tables. 
    return column
  }
  return dbValue==null ? column : dbValue 
}

function processMultipleAttributes(table,directions,path){
  if(directions._attribute==null && typeof directions._model== "object"){
    return getFilledModel(directions,path)
  }else{
      var attributeMerge=""
      var joiner=directions._attribute._joiner
      var attributes=directions._attribute._attributes;

      for(i in attributes){
        var attribute=attributes[i]
        var attrValue=path[table].dataValues[attribute]
      
        attributeMerge+=attrValue
        if(i<(attributes.length-1)) attributeMerge+=joiner
      }
      return attributeMerge
  }
}

function getFilledModel(directions,path){
  let emptyModel=JSON.parse(JSON.stringify(directions._model));
  let filledModel = determineActionForJSONObject(null,emptyModel,path) //key isn't necessary check if it's used

  var result={}
  var filledModelHash=hash(filledModel);
  result[filledModelHash]=filledModel
  return result;
}

function getvalueFromNextTable(key,directions,path,table){
  var column="";
  var table=table || directions._table.replace("./","")
  if (path[table]==null){
    return null
  }
  if(Object.keys(directions).length==2 ){
    if(typeof directions._attribute == "object" || typeof directions._model == "object" ){
      return processMultipleAttributes(table,directions,path)
    }else{
      column=directions._attribute
    }
  }else{
    column=key
  }

  return path[table].dataValues[column] 
}


function determineActionForKey(key,value,path){
  if (typeof value == "string"){
    return getValueFromTable(key,value,path)
  }
  if (typeof value == "object"){
    return determinActionForJSONinstance(key,value,path)
  }
}

function determinActionForJSONinstance(key,value,path){
  if( value instanceof Array){
    return determineActionForJSONArray(key,value,path)    
  }
  if( value instanceof Object){
    return determineActionForJSONObject(key,value,path)
  }
}


function determineActionForJSONArray(key,array,path){
  if( array.length >0 ){
    try{
      var directions=array[0]
      var table=directions._table

      if (typeof table == "object"){
        let result = transverseMultipleTables(table,path)
        path=result.path
        table=result.table
      }
      var tableValue=getvalueFromNextTable(key,directions,path,table)
      if( typeof tableValue == "object" && tableValue instanceof Object ){
        if (! isObjectInArray(tableValue,array))
          array.push(tableValue)
        return array
      }else{
        if( array.indexOf(tableValue) == -1 && tableValue!=null) 
          array.push(tableValue)
        return array
      }
    }catch(err){
      if(err instanceof TypeError && err.message=="Cannot read property 'dataValues' of null"){
        //Fix it Not working????
        debug(err)
        return array
      }else{
        console.trace("Error while processing Array values from table ["+value[0]._table+"] - "+err)
        return array
      }
    }
  }
}

function isObjectInArray(object,array){
  var result=false;
  if(Object.keys(object).length==1)
    var hash=Object.keys(object)[0]
  for (i in array){
    let element=array[i]
    if (typeof element == "object" && element instanceof Object )
      if (Object.keys(element).length==1)
        if(Object.keys(element)[0]==hash)
          result = true
  }
  return result
}

function goToNextTable(table,path){
  return path[table].dataValues;
}

function determineActionForJSONObject(key,value,path){
  //if it has only to elements
  if( value._table != null  && Object.keys(value).length<=2 ){
    return processSingleValueObject(key,value,path)
  }
  if(value._table != null && Object.keys(value).length>2){            
    return processMultiValueObject(key,value,path)
  }
}

function processSingleValueObject(key,value,path){
  try{
    var directions=value
    return getvalueFromNextTable(key,directions,path)
  }catch(err){
    console.trace("Error while processing Object values from table ["+value._table+"] - "+err);
    return null;
  }
}
function processMultiValueObject(key,value,path){
  try{  
    var record=value
    var table=value._table    
  
    if (typeof table == "object"){
      let result = transverseMultipleTables(table,path)
      path=result.path
      table=result.table
    }
    var path = decideAndGetNewPath(table,path)
    for (i in Object.keys(value)){
        var _key=Object.keys(value)[i]
        let _value=value[_key]
        if(_key=="_table"){
          continue
        }
        record[_key]=determineActionForKey(_key,_value,path)
    }
    return record
  }catch(err){
    if(err instanceof TypeError && err.message=="Cannot read property 'dataValues' of null"){
      //Fix it Not working
      debug(err)
      return value
    }else{
      console.trace("Error while processing Object(2) values from table ["+value._table+"] - "+err);
      return value
    }
  }  
}

function decideAndGetNewPath(table,path){
  if (table.startsWith("./")){ //used for new object in the same table
    return path;
  }else{
    return path[table].dataValues
  }
}

function transverseMultipleTables(table,path){
  for (var i=0; i<(table.length-1); i++){
    path=goToNextTable(table[i],path)
    var nextTable=table[i+1];
  }
  return {path:path,table:nextTable}
}

function parseCallStructure(record,path){
  for (j in Object.keys(record)){
    key=Object.keys(record)[j]
    value=record[key]
    record[key]=determineActionForKey(key,value,path)
  }
  return record
}

//// !!!! MAIN FUNCTION /////////////////
function formatRetreivedData(arg,res){
    var metadata=arg.metadata
    var attribute=arg.attribute
    const callStructure=arg.callStructure
    var data={}

    for (i in res.rows){
      var dataValues = res.rows[i].dataValues
      uniqueId=dataValues[attribute]
      //Used to secure duplicate rows because of arrays. 
      if(Object.keys(data).indexOf(String(uniqueId)) == -1){ 
        data[uniqueId]=JSON.parse(JSON.stringify(callStructure)); //need a deep copy
      }
      parseCallStructure(data[uniqueId],dataValues)
    }
    cleanUp(data)

    //Pack objects into array 
    var result=[]
    for(object in data){
      result.push(data[object]);
    }
    metadata.data=result
    return metadata;
}
////// |||| END FUNCTION ///////////////

/////!!!! Clean Up /////////////////////////////////////////////////
function locateObjectsAndFixThem(record){
  for (i in record){
    let element=record[i]
    if(typeof element == "object" && element instanceof Object){
      let keys=Object.keys(element);
      if(keys.length==1){
        record[i]=element[keys[0]]       
      }
    }
  }
}
function cleanUpArray(record){
	if(typeof record[0] == "object")
    locateObjectsAndFixThem(record)
    record=record.shift()
}

function cleanUpKeys(key,value,record){
	if( key == "_table" || key=="_model" ){
		if (typeof value == "string"){
			delete record[key]
		}
    if (typeof value == "object" && value instanceof Array){
      delete record[key]
    }
	}
	if (typeof value == "object"){
		if(value instanceof Array){
			cleanUpArray(value)
		}
		if(value instanceof Object){
			cleanUp(value)
		}
	}
}

function cleanUp(record){
  for (i in Object.keys(record)){
    //console.log(record)
    var key=Object.keys(record)[i]
    var value=record[key]
    cleanUpKeys(key,value,record)
  }
}
/////!!!end Clean Up //////////////////////////////////////////////
module.exports=formatRetreivedData 