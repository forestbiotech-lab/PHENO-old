/** 
*
* Created on 22/06/2018
*
* Used to format the values extracted from the database
* 
*  DB - is the datavalues from DB
*  Record - Is the structure, basically what is stored.  
*  key    - is the key of an element in the Record. In the simplest case the element will be an object with a key and a value.
*  value  - is the value of the key that belongs to an element of the record.
*/

var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');
var hash = require('object-hash');
var ObsUnitGraph=require('./observationUnitGraph');




function getValueFromTable(key,value,db){
  var column="";
  value.length==0 ? column=key : column=value
  dbValue=db.dataValues[column]
  if(dbValue==null || typeof dbValue == "object" ){ // this avoids getting tables in next iteration when values are tables. 
    return column
  }
  return dbValue==null ? column : dbValue 
}

function processMultipleAttributes(table,directions,db){
  if(directions._attribute==null && typeof directions._model== "object"){
    return getFilledModel(directions,db)
  }else{
      var attributeMerge=""
      var joiner=directions._attribute._joiner
      var attributes=directions._attribute._attributes;

      for(i in attributes){
        var attribute=attributes[i]
        var attrValue=db.dataValues[table].dataValues[attribute]
      
        if(attrValue!=null){
          attributeMerge+=attrValue
        }
        if(i<(attributes.length-1)) attributeMerge+=joiner
      }
      return attributeMerge
  }
}

function getFilledModel(directions,db){
  let emptyModel=JSON.parse(JSON.stringify(directions._model));
  let filledModel = determineActionForJSONObject(null,emptyModel,db) //key isn't necessary check if it's used

  var result={}
  var filledModelHash=hash(filledModel);
  result[filledModelHash]=filledModel
  return result;
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

function goToNextTable(table,db){
  return db.dataValues[table];
}


function processMultiValueObject(key,value,db){
  try{  
    var record=value
    var table=value._table    
  
    if (typeof table == "object"){
      let result = transverseMultipleTables(table,db)
      db=result.db
      table=result.table
    }
    var db = decideAndGetNewPath(table,db)
    for (i in Object.keys(value)){
        var _key=Object.keys(value)[i]
        let _value=value[_key]
        if(_key=="_table"){
          continue
        }
        record[_key]=determineActionForKey(_key,_value,db)
    }
    return record
  }catch(err){
    if(err instanceof TypeError && err.message=="Cannot read property 'dataValues' of null"){
      //Fix it Not working
      debug_std(err.message)
      debug_full(err)
      return value
    }else{
      debug_std("Error while processing Object(2) values from table ["+value._table+"] - "+err);
      if (debug_full.enabled) debug_full(console.trace("Error while processing Object(2) values from table ["+value._table+"] - "+err));
      return value
    }
  }  
}

function decideAndGetNewPath(table,db){
  if (table.startsWith("./")){ //used for new object in the same table
    return db;
  }else{
    return db.dataValues[table]
  }
}

function transverseMultipleTables(table,db){
  for (var i=0; i<(table.length-1); i++){
    db=goToNextTable(table[i],db)
    var nextTable=table[i+1];
  }
  return {db:db,table:nextTable}
}


function goToTableFromObservationUnits(){
  level = db.level.replace("Number","")
  level = level[0].toUpperCase()+level.slice(1)
  obsGraph.level = level
  console.log("This function isn't complete "+obsGraph.shotestPath)
}

function goToTableFromOtherSpecialTables(key,directions,db,table,destinationTable){
  levels=["Plot","Plant","Sample"]
  this.db=db
  let obsGraph = new ObsUnitGraph.graph()
  obsGraph.origin = table
  obsGraph.destination = destinationTable
  for (i in levels){
    level=levels[i]
    obsGraph.level = level
    path=(obsGraph.shortestPath).slice(1)  //Remove origin
    if(path.length>0){
      let result=transverseMultipleTables(path,this.db)
      db=result.db
      table=result.table
    }else{
      continue
    }
    try{
      let result = getvalueFromNextTable(key,directions,db) //Not sending table so it will be recaculated for current state
      if (result!=null){
        return result
      }
    }catch(err){
      debug_std("gotToTableFromOtherSpecialTables - Unable to transverse this path ["+level+"]: "+err)
    }
  }
  debug_std("gotToTableFromOtherSpecialTables - Unable to transverse any of the paths")
  return null
}


function specialTables(key,directions,db,table,destinationTable){
  if ( table == "ObservationUnit" ){
    //with this table the path is extracted from level
    return goToTableFromObservationUnits(key,directions,db,table,destinationTable) 
  }else{
    //with the other tables the path has to be discovered
    return goToTableFromOtherSpecialTables(key,directions,db,table,destinationTable) 
  }
} 

function doSpecialTableProcessing(key,directions,db,table){
  if (table==null){
    table=db._modelOptions.tableName
  }
  if(ObsUnitGraph.SPECIAL_TABLES.includes(table)){
    destinationTable=directions._table
    if (typeof destinationTable == "string"){
      if(ObsUnitGraph.SPECIAL_TABLES.includes(destinationTable)){
        return specialTables(key,directions,db,table,destinationTable)
      }
    }
    if (typeof destinationTable == "object"){
      let intersection= ObsUnitGraph.intersect(destinationTable)
      if ( intersection.length == 1 ){
        indexOfIntersection = destinationTable.indexOf(intersection[0])
        directions["_table"]=destinationTable.splice(indexOfIntersection)
        if(directions._table.length==1){
          directions._table=directions._table[0]
        }
        return specialTables(key,directions,db,table,destinationTable=intersection)
      }
      if (  intersection.length > 1  ){
        debug_std("Destination is an Object: But intersection if bigger then 1 this isn't allowed")
        return getvalueFromNextTable(key,directions,db)
      } 
      if (  intersection.length < 1  ){
        console.log("Destination is an Object: But intersection was found")
        return null
      }
    } 
  }
}

function processMultipleTables(directions,db,table){
  if(table==null & typeof directions._table == "object"){
    return transverseMultipleTables(directions._table,db);
  }
}

function getvalueFromNextTable(key,directions,db,table){
  var column="";
  let parseint=false
  let parsestr=false
  let result=processMultipleTables(directions,db,table)
  if( result != null){
    db=result.db;
    table=result.table;
  }
  var table=table || directions._table.replace("./","")
  if(db.dataValues[table]==null){
    if(table == db._modelOptions.tableName){
      db.dataValues[table]=db
    }else{
      return null
    }
  }
  if(Object.keys(directions).length>=2 ){
    if(typeof directions._attribute == "object" || typeof directions._model == "object" ){
      return processMultipleAttributes(table,directions,db)
    }else{
      if (directions._parse=="int") parseint=true
      if (directions._parse=="str") parsestr=true
      column=directions._attribute
    }
  }else{
    column=key
  }
  if (parseint) return parseInt(db.dataValues[table].dataValues[column])
  if (parsestr) return String(db.dataValues[table].dataValues[column])
  return db.dataValues[table].dataValues[column] 
}

function processSingleValueObject(key,value,db){
  try{
    let directions=value
    //////REMOVEE!!!!!!!!!!!!!!!!!!!!!!!
    let special=doSpecialTableProcessing(key,directions,db)
    if( special != null){
      return special
    }
    /////REMOVEE!!!!!!!!!!!!!!!!!!!!!!!!!
    return getvalueFromNextTable(key,directions,db)
  }catch(err){
    debug_std("Error while processing Object values from table ["+value._table+"] - "+err);
    if (debug_full.enabled) debug_full(console.trace("Error while processing Object values from table ["+value._table+"] - "+err));
    return null;
  }
}

function determineActionForJSONArray(key,array,db){
  if( array.length >0 ){
    try{
      var directions=array[0]
      var table=directions._table
      if (typeof table == "object"){
        let result = transverseMultipleTables(table,db)
        db=result.db
        table=result.table
      }
      var tableValue=getvalueFromNextTable(key,directions,db,table)
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
        debug_std(err.message)
        if (debug_full.enabled) debug_full(console.trace(err))
        return array
      }else{
        debug_std("Error while processing Array values from table ["+value[0]._table+"] - "+err)
        if (debug_full.enabled) debug_full(console.trace("Error while processing Array values from table ["+value[0]._table+"] - "+err))
        return array
      }
    }
  }
}

function determineActionForJSONObject(key,value,db){
  //if it has only two elements
  if ( value._table != null ) {
    if( Object.keys(value).length<2 ){
      return processSingleValueObject(key,value,db)
    }
    if( Object.keys(value).length==2){ 
      if(value._attribute != null)
        return processSingleValueObject(key,value,db);
      if(value._attribute == null)
        return processMultiValueObject(key,value,db);
    }
    if( Object.keys(value).length>2){
      if(value._attribute != null && value._parse != null) console.log("THHHHHHHEEEEE BONGGGG")          
      if(value._attribute != null && value._parse != null) return processSingleValueObject(key,value,db);
      return processMultiValueObject(key,value,db)
    }
  }
}

function determinActionForJSONinstance(key,value,db){
  if( value instanceof Array){
    return determineActionForJSONArray(key,value,db)    
  }
  if( value instanceof Object){ 
    return determineActionForJSONObject(key,value,db)
  }
}

function determineActionForKey(key,value,db){
  if (typeof value == "string" || typeof value == "number"){
    return getValueFromTable(key,value,db)
  }
  if (typeof value == "object"){
    return determinActionForJSONinstance(key,value,db)
  }
}


function parseCallStructure(record,db){
  for (j in Object.keys(record)){
    key=Object.keys(record)[j]
    value=record[key]
    record[key]=determineActionForKey(key,value,db)
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
      var dbValues = res.rows[i]
      uniqueId=dbValues.dataValues[attribute]
      //Used to secure duplicate rows because of arrays. 
      if(Object.keys(data).indexOf(String(uniqueId)) == -1){ 
        data[uniqueId]=JSON.parse(JSON.stringify(callStructure)); //needs a deep copy
      }
      parseCallStructure(data[uniqueId],dbValues)
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
  var dynamicKeyOperation=false;
  for (i in record){
    let element=record[i]
    if(typeof element == "object" && element instanceof Object){
      let keys=Object.keys(element);
      if(keys.length==1){  //check of key is the hash size that will rule out a lot
        record[i]=element[keys[0]]       
      }
      element=record[i]
      keys=Object.keys(element);
      if(keys.length==3 && element._key!=null && element._value!=null){
        dynamicKeyOperation=true;
        if(i==1){
          let temp={}
          temp[element._key]=element._value
          record.push(temp)
        }
        if(i>=2){
          let temp=record.pop();
          if (temp[element._key]==null){
            temp[element._key]=element._value;
          }else{
            temp[element._key]=temp[element._key]+" , "+element._value
          }
          record.push(temp)
        }
      }
    }
  }
  return dynamicKeyOperation;
}
function cleanUpArray(record){
	if(typeof record[0] == "object"){
    if(locateObjectsAndFixThem(record)){
      return record.pop()
    }else{
      record.shift()
      return record
    }
  }
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
      record[key]=cleanUpArray(value)
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