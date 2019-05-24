var fmtWhereAttr = require('./../helpers/formatWhereAttribute');
var controller = require('./../controllers/callController_v1.3');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var callStructure = require('./../structures/v1.3/observationtables');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = function(options){
  var options= options || {body:{},params:{},query:{}};  
  options.where={}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  call="observationunits"
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Where logic
  //Do this for each where attribute needed.

  //missing sort and sortBy


//|||||||||||||||||search||||||||||||||  
//  attribute=options.params.searchResultsDbId
//  var value=fmtWhereAttr(attribute,"in")
//  if ( value != null )
//    options.where.searchId=value 
//  delete options.params.searchResultsDbId;
///|||||||||||||||||||||||||||||||||||||||||
  attribute="2";
  var value=fmtWhereAttr(attribute,"in")
  if ( value != null )
    options.where.studyId=value 
  



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