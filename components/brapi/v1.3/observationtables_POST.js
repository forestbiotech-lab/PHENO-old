
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var controller = require('./../controllers/callControllerCreate_v1.3');
var callStructure = require('./../structures/v1.3/observationtables_POST');
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

  function sanitizeArray(inString){ //Sanitize the array that is being inserted into table
    let array=JSON.parse(inString)
    if (array instanceof Array){
      function isInt(item){
        return typeof item == 'number'
      }
      if(array.every(isInt)){
        return array
      }else{
        return []
      }
    }else{
      return []
    }
  }

  options.inserts.studyDbIds=sanitizeArray(options.body.studyDbId)

  
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