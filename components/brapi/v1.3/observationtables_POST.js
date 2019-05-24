
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var controller = require('./../controllers/callControllerCreate_v1.3');
var callStructure = require('./../structures/v1.3/observationtables_POST');
var sanitizeArray = require('./../helpers/formatingFunctions').sanitizeArray
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = function(options){
  var options= options || {body:{},params:{},query:{}};  
  options.where={}
  options.inserts={}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  call="observationtables_post"
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Where logic
  //Do this for each where attribute needed.

  //missing sort and sortBy

  function sanitizeString(val){
    if(typeof val == "string"){
      return val
    }else{
      return ""
    }
  }
  function removeEmpty(params){
    Object.keys(params).forEach(function(key){
      let value=params[key]
      if(typeof value == "object"){
        if (value.length == 0 ){
          delete options.inserts[key]
        }
      }
      if(typeof value == "string"){
        if( value.length == 0 )
          delete options.inserts[key]
      }
    })
  }

  options.inserts.germplasmDbIds=sanitizeArray(options.body.germplasmDbIds) 
  options.inserts.locationDbIds=sanitizeArray(options.body.locationDbIds)
  options.inserts.observationVariableDbIds=sanitizeArray(options.body.observationVariableDbIds)
  options.inserts.programDbIds=sanitizeArray(options.body.programDbIds)
  options.inserts.seasonDbIds=sanitizeArray(options.body.seasonDbIds)
  options.inserts.studyDbIds=sanitizeArray(options.body.studyDbIds)
  options.inserts.trialDbIds=sanitizeArray(options.body.trialDbIds)

  options.inserts.observationTimeStampRangeEnd=sanitizeString(options.body.observationTimeStampEnd)
  options.inserts.observationTimeStampRangeStart=sanitizeString(options.body.observationTimeStampRangeStart)
  options.inserts.observationLevel=sanitizeString(options.body.observationLevel)
  
  removeEmpty(options.inserts)

 
  return controller(options,call,callback);
  
}

function callback(res){
  //[The attribute in main table used as uniqueId]
  var attribute="id"
    //Metadata
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    var metadata={}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return {metadata:metadata,attribute:attribute,callStructure:callStructure};
}