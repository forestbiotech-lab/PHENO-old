/**
 * Created by Bruno Costa on 20-06-2018.
 */

var fmtWhereAttr = require('./helpers/formatWhereAttribute');
var controller = require('./controllers/callController');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var callStructure = require('./structures/locationDetails');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = function(options){
  var options= options || {body:{},params:{},query:{}};  
  options.where={}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  call="locationDetails"
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Where logic
  //Do this for each where attribute needed.
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  attribute=options.params.locationDbId
  options.where.id=fmtWhereAttr(attribute,"$in") 
  delete options.params.programDbId;
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


