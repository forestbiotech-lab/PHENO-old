/**
 * Created by Manjesh on 14-05-2016.
 */

var _ = require('lodash');

//Tables folder
var sqldb = require('./sqldb');

//tables
var Germplasm=sqldb.Germplasm;
//var Investigation = sqldb.Investigation;
//var GeneralMetadata=sqldb.GeneralMetadata;
//var =sqldb.;


//getGermplasm call attributes
//DB call. "where" is used to set up lookup filters 

function getGermplasm(attributes){
  return Germplasm
  .findAll({
    where: attributes/*{Material_source: {'$like':"ibet:%"}}*/ //attributes
  })
  .then(function(BioSource){
    //Do something with the result.
    console.log("Did search");
    var res=[]
    return res;
  })
  .catch(function(err){
    console.log("getGermplasm - Err: ");
    return err;
  });

}


module.exports = {
  //Add all query functions for export below
  //name a function to run one of the functions above
  getGermplasm: getGermplasm,

}

