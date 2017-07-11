/**
 * Created by Manjesh on 14-05-2016.
 */

var _ = require('lodash');

//Tables folder
var sqldb = require('./sqldb');

//tables
var Germplasm=sqldb.Germplasm;
var GermplasmStorage=sqldb.GermplasmStorage;
var Species=sqldb.Species;
var Crop=sqldb.Crop;
var Institution = sqldb.Institution;
var Country = sqldb.Country;
var Location = sqldb.Location;
var Calls = sqldb.Calls;
var DataType = sqldb.DataType;
var Methods = sqldb.Methods;
//var =sqldb.;


//getGermplasm call attributes
//DB call. "where" is used to set up lookup filters 

function getGermplasm(attributes){
  return Germplasm
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize),
    attributes: { exclude:['id','speciesId','origin'], include:[['id', 'germplasmDbId'], ['defaultDisplayName','germplasmName'] ]},
    include: [{
      model:Species,
      attributes: {exclude:['id','cropId']},
      include: [{
        model:Crop,
        attributes: {exclude:['id']},
      }]
    },{
      model:GermplasmStorage,
      attributes: {exclude:['germplasmId','id','code'],include:[['code','typeOfGermplasmStorageCode']]} 
    },{
      model:Institution,
      attributes: {exclude:['id','locationId','code','name'],include:[['code','instituteCode'],['name','instituteName']] },
    },{
      model:Country,
      attributes:{exclude:['id','code','name'],include:[['code','countryOfOriginCode']]}
    }],
    //defaultDisplayName might not be the same as germplasmName in the future. !!!Possible code breaking  
    where: { 
      defaultDisplayName: {
        '$like':attributes.germplasmName+"%" //Using like instead of exact search not sure this is the best option
      },
      id:{
        '$like':attributes.germplasmDbId+"%" //Using like instead of exact search not sure this is the best option
      }, /*attributes/*{Material_source: {'$like':"ibet:%"}}*/ //attributes      
      germplasmPUI:{
        '$like':attributes.germplasmPUI+"%" //Using like instead of exact search not sure this is the best option
      }, /*attributes/*{Material_source: {'$like':"ibet:%"}}*/ //attributes
    }
  })
  .then(function(res){
    return res;
  })
  .catch(function(err){
    console.log("getGermplasm - Err: "+ err);
    return err;
  });

}

/* Created by João Cardoso - 11/07/2017
 * Crop Call Implementation - Fetches data from the Crop Table */
function getCrops(attributes) {
    return Crop.findAndCountAll({
        offset: parseInt(attributes.offset),
        limit: parseInt(attributes.pageSize),
        attributes: { exclude:['id']}

    }).then(function(res){
            return res;
    }).catch(function(err){
            console.log("getCrops - Err: "+ err);
            return err;
    });
}

/* Created by João Cardoso - 11/07/2017
 * List Implemented Calls Implementation - Fetches data from the Calls Table */
function getImplementedCalls(attributes) {
    return Calls.findAndCountAll({
        offset: parseInt(attributes.offset),
        limit: parseInt(attributes.pageSize),
        attributes: {
            exclude: ['id', 'callName', 'dataType', 'method'],
            include: [['callName', 'call']]
        },
        include: [{
            model: Methods,
            attributes: {
                exclude: ['id', 'method'],
                include: [['method', 'methods']]
            }
        }, {
            model: Methods,
            attributes: {
                exclude: ['id', 'dataType'],
                include: [['dataType', 'dataTypes']]
            }
        }]

    }).then(function(res){
        return res;
    }).catch(function(err){
        console.log("Calls - Err: "+ err);
        return err;
    });
}

module.exports = {
  //Add all query functions for export below
  //name a function to run one of the functions above
    getGermplasm: getGermplasm,
    getCrops: getCrops,

}

