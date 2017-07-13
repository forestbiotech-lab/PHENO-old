/**
 * Created by Manjesh on 14-05-2016.
 */


//Calls Index to load sql tables
var db = require('./sqldb');


//getGermplasm call attributes
//DB call. "where" is used to set up lookup filters 
function getGermplasm(attributes){
  return db.Germplasm
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize),
    attributes: { exclude:['id','speciesId','origin','holdingInstitution','seedSource'], include:[['id', 'germplasmDbId'], ['defaultDisplayName','germplasmName'],['seedSource','gerplasmSeedSource'] ]},
    include: [{
      model:db.Species,
      attributes: {exclude:['id','cropId']},
      include: [{
        model:db.Crop,
        attributes: {exclude:['id']},
      }]
    },{
      model:db.GermplasmStorage,
      attributes: {exclude:['germplasmId','id','code'],include:[['code','typeOfGermplasmStorageCode']]}, 
    },{
      model:db.Institution,
      attributes: {exclude:['id','locationId','code','name'],include:[['code','instituteCode'],['name','instituteName']] },
    },{
      model:db.Country,
      attributes:{exclude:['id','code','name'],include:[['code','countryOfOriginCode']]},
    },{
      model:db.GermplasmSynonym,
      attributes:{exclude:['id','germplasmId']},
    },{
      model:db.GermplasmParents,
      include:[{
        model:db.Germplasm,
      }]
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
    return db.Crop
    .findAndCountAll({
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
    return db.Calls
    .findAndCountAll({
        offset: parseInt(attributes.offset),
        limit: parseInt(attributes.pageSize),
        attributes: {
            exclude: ['id'],
        },
        include: [{
            model: db.Methods,
            attributes: {
                exclude: ['id','callId'],
            }
        },{
            model: db.DataTypes,
            attributes: {
                exclude: ['id',"callId"],
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
    getImplementedCalls: getImplementedCalls,
}

