var fmtWhereAttr = require('./../helpers/formatWhereAttribute');
var controller = require('./../controllers/callController_v1.3');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var callStructure = require('./../structures/v1.3/studiesObservationvariables');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = function(options){
  var options= options || {body:{},params:{},query:{}};  
  options.where={}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  call="studiesObservationvariables"
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Where logic
  //Do this for each where attribute needed.

  //missing sort and sortBy
//|||||||||||||||||studyDbId||||||||||||||  
  attribute=options.params.studyDbId
  var value=fmtWhereAttr(attribute,"in")
  if ( value != null )
    options.where["$StudyObservationVariable.studyId$"]=value 
  delete options.query.studyDbId;

  return controller(options,call,callback)
  
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