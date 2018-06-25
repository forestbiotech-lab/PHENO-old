/** 
*
* Created on 22/06/2018
*
* Used to format the values extracted from the database
* 
*/


function getValueFromTable(key,value,path){
  var column="";
  value.length==0 ? column=key : column=value
  dbValue=path[column]
  return dbValue==null ? column : dbValue 
}

function processMultipleAttributes(table,directions,path){
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

function getvalueFromNextTable(key,directions,path){
  var column="";
  var table=directions._table.replace("./","")
  

  if (path[table]==null){
    return null
  }
  if(Object.keys(directions).length==2 ){
    if(typeof directions._attribute == "object"){
      return processMultipleAttributes(table,directions,path)
    }else{
      column=directions._attribute
    }
  }else{
    column=key
  }

  return path[table].dataValues[column] 
}


function determineActionForKey(key,value,path,record){
  if (typeof value == "string"){
    record[key]=getValueFromTable(key,value,path)
  }
  if (typeof value == "object"){
    determinActionForJSONinstance(key,value,path,record)
  }
}

function determinActionForJSONinstance(key,value,path,record){
  if( value instanceof Array){
    determineActionForJSONArray(key,value,path,record)    
  }
  if( value instanceof Object){
    determineActionForJSONObject(key,value,path,record)
  }
}


function determineActionForJSONArray(key,value,path,record){
  if( value.length >0 ){
    try{
      var directions=value[0]
      var attributeArray=record[key]
      var tableValue=getvalueFromNextTable(key,directions,path)
      if( attributeArray.indexOf(tableValue) == -1 && tableValue!=null) 
        attributeArray.push(tableValue)
    }catch(err){
      console.trace("Error while processing Array values from table ["+value[0]._table+"] - "+err)
    }
  }
}
function goToNextTable(table,path){
  return path[table].dataValues;
}

function determineActionForJSONObject(key,value,path,record){
  //if it has only to elements
  if( value._table != null  && Object.keys(value).length<=2 ){
    try{
      var directions=value
      record[key]=getvalueFromNextTable(key,directions,path)
    }catch(err){
      record[key]=null;
      console.trace("Error while processing Object values from table ["+value._table+"] - "+err);
    }
  }
  if(value._table != null && Object.keys(value).length>2){            
    try{  
      var table=value._table
      
      if (typeof table == "object"){
        for (var i=0; i<(table.length-1); i++){
          path=goToNextTable(table[i],path)
          var nextTable=table[i+1];
        }
        table=nextTable
      }
      var record=value
      if (table.startsWith("./")){
        path=path;
      }else{
        path=path[table.replace("./","")].dataValues
      }
      for (i in Object.keys(value)){
          var _key=Object.keys(value)[i]
          var _value=value[_key]
          if(_key=="_table"){
            continue
          }
          determineActionForKey(_key,_value,path,record)
      }
    }catch(err){
      console.trace("Error while processing Object(2) values from table ["+value._table+"] - "+err);
    }  
  }
}

function parseCallStructure(record,dataValues){
  for (j in Object.keys(record)){
    key=Object.keys(record)[j]
    value=record[key]
    determineActionForKey(key,value,dataValues,record)
  }
}

function formatRetreivedData(arg,res){
    var metadata=arg.metadata
    var attribute=arg.attribute
    var callStructure=arg.callStructure
    var data={}
    
    for (i in res.rows){
      var dataValues = res.rows[i].dataValues
      var uniqueId=dataValues[attribute]

      //Used to secure duplicate rows because of arrays. 
      if(Object.keys(data).indexOf(String(uniqueId)) == -1){ 
        data[uniqueId]=callStructure
      }

      var record=data[uniqueId];
      parseCallStructure(record,dataValues)
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
function cleanUpArray(record){
	if(typeof record[0] == "object")
		record=record.shift()
}

function cleanUpKeys(key,value,record){
	if( key == "_table" ){
		if (typeof value == "string"){
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
    console.log(record)
    var key=Object.keys(record)[i]
    var value=record[key]
    cleanUpKeys(key,value,record)
  }
}

module.exports=formatRetreivedData 