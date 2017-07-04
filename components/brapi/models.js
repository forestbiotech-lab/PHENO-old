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
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize),
    attributes: { exclude:['id'], include:[ ['id', 'germplasmDbId'], ['defaultDisplayName','germplasmName'] ]},
    where: {}, /*attributes/*{Material_source: {'$like':"ibet:%"}}*/ //attributes
  })
  .then(function(res){
    //Do something with the result.
    console.log("Did search");
    return res;
  })
  .catch(function(err){
    console.log("getGermplasm - Err: "+ err);
    return err;
  });

}


module.exports = {
  //Add all query functions for export below
  //name a function to run one of the functions above
  getGermplasm: getGermplasm,

}

