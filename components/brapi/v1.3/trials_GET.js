var fmtWhereAttr = require('./../helpers/formatWhereAttribute');
var controller = require('./../controllers/callController_v1.3');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var callStructure = require('./../structures/v1.3/trials');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var metadata

module.exports = function(options){
  var options= options || {body:{},params:{},query:{}};  
  options.where={}

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  call="trials"
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Where logic
  //Do this for each where attribute needed.

  //sortBy (Optional, ) ... Sort order. Name of the field to sorty by.
  //sortOrder (Optional, ) ... Sort order direction: asc/desc

  //|||||||||||||||TrialId|||||||||||||||||||||||
  options.params.trialDbId ? metadata={ metadataOnlyRemoveData:true } : metadata={}
  attribute=options.params.trialDbId || options.query.trialDbId;
  var value=fmtWhereAttr(attribute,"eq")
  if ( value != null )
    options.where.id=value 
  delete options.query.id;
  //||||||||||||||commonCropName|||||||||||||||||
  attribute=options.query.commonCropName
  var value=fmtWhereAttr(attribute,"eq")
  if ( value != null )
    options.where["$Study.StudyGermplasm.Germplasm.Species.Crop.commonCropName$"]=value 
  delete options.query.commonCropName;
  //||||||||||||||programDbId|||||||||||||||||||
  attribute=options.query.programDbId;
  var value=fmtWhereAttr(attribute,"eq")
  if ( value != null )
    options.where.programId=value 
  delete options.query.programDbId;
  //|||||||||||||||||locationDbId||||||||||||||
  attribute=options.query.locationDbId
  var value=fmtWhereAttr(attribute,"eq")
  if ( value != null )
    options.where["$Study.locationId$"]=value 
  delete options.query.locationDbId; 
  //|||||||||||||||||active||||||||||||||
  attribute=options.query.active
  var value=fmtWhereAttr(attribute,"eq")
  if ( value != null )
    options.where.active=value 
  delete options.query.active;
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return controller(options,call,callback)
  
}

function callback(res){
  //[The attribute in main table used as uniqueId]
  var attribute="id"
  return {metadata,attribute,callStructure};
}