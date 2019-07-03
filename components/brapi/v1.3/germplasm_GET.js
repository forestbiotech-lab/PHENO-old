/**
 * Created by Bruno Costa on 20-06-2018.
 */

var fmtWhereAttr = require('./../helpers/formatWhereAttribute');
var controller = require('./../controllers/callController_v1.3');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var callStructure = require('./../structures/v1.3/germplasm');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = function(options){
  var options= options || {body:{},params:{},query:{}};  
  options.where={}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  call="germplasm"
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Where logic
  //Do this for each where attribute needed.
//!!!!!!!!!for studies/{studyDbId}!!studyId!!!!!!!!!!!!!!!!!!!!!!!!
  attribute=options.params.studyDbId
  var value=fmtWhereAttr(attribute,"in")
  if ( value != null )
    options.where["$StudyGermplasm.studyId$"]=value 
  delete options.query.germplasmPUI;
//!!!!!!!!!!!!!!!!!!!!!!!germplasmPUI!!!!!!!!!!!!!!!!!!!!!!!!
  attribute=options.query.germplasmPUI
  var value=fmtWhereAttr(attribute,"in")
  if ( value != null )
    options.where.germplasmPUI=value 
  delete options.query.germplasmPUI;
//|||||||||||||||||germplasmDbId||||||||||||||  Is this a valid approach?
  attribute=options.params.id || options.query.germplasmDbId
  var value=fmtWhereAttr(attribute,"in")
  if ( value != null )
    options.where.id=value 
  delete options.query.germplasmDbId;
//|||||||||||||||||germplasmName||||||||||||||
  attribute=options.query.germplasmName
  var value=fmtWhereAttr(attribute,"in")
  if ( value != null )
    options.where.defaultDisplayName=value 
  delete options.query.germplasmName;  
//|||||||||||||||||commonCropName||||||||||||||
  attribute=options.query.commonCropName
  var value=fmtWhereAttr(attribute,"eq")
  if ( value != null )
    options.where["$Species.Crop.commonCropName$"]=value 
  delete options.query.commonCropName;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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