
//Calls Index to load sql tables
var db = require('./../sqldb');

var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');
//Break up this file into domains once it gets to big.
var e={}

e.Samples_SampleDbId=function(attributes){
  return db.Sample
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include: [{
      model:db.Person,
    },{
      model:db.ObservationUnit,
      include:[{
        model:db.Study,
          include:[{
          model:db.StudyGermplasm
        }]
      }]
    },{
      model:db.SamplePlant,
      include: [{
        model:db.Plant,
        include:[{
          model:db.Plot,
          include:[{
            model:db.ObservationUnit,
            include:[{
              model:db.Study,
              include:[{
                model:db.StudyGermplasm
              }]
            }] 
          }]
        },{
          model:db.ObservationUnit,
          include:[{
            model:db.Study,
            include:[{
              model:db.StudyGermplasm
            }]
          }]
        }]
      }]
    }],
    where:attributes.where
  }).then(function(res){
    return res
  }).catch(function(err){
    debug_std("model v1.3 | Samples_SampleDbId - Err:"+err)
    return err
  })
}

e.germplasm=function(attributes){
  return db.Germplasm
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include: [{
      model:db.Species,
      include: [{
        model:db.Crop,
      }]
    },{
      model:db.GermplasmStorage,
    },{
      model:db.Institution,
    },{
      model:db.Country,
    },{
      model:db.GermplasmSynonym,
    },/*{
      model:db.GermplasmParents,
      include:[{
        model:db.GermplasmParent1,
      },{
        model:db.GermplasmParent2,
      }]
    },*/{
        model:db.DonorInstitute,
        include:[{
          model:db.Institution,
        },{
          model:db.Germplasm,
        }]
    }],
    //defaultDisplayName might not be the same as germplasmName in the future. !!!Possible code breaking  
    where: attributes.where,
  })
  .then(function(res){
    return res;
  })
  .catch(function(err){
    debug_std("model v1.3 | germplasm - Err: "+ err);
    return err;
  });
}

e.studies=function(attributes){
  return db.Study
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include:[{
      model:db.StudyAdditionalInfo
    },{
      model:db.StudyGermplasm,
      include:[{
        model:db.Germplasm,
        include:[{
          model:db.Species,
          include:[{
            model:db.Crop
          }]
        }]
      }]
    },{
      model:db.Trial
    },{
      model:db.Location
    },{
      model:db.StudySeason,
      include:[{
        model:db.Season
      }]
    },{
      model:db.StudyType,
    }],
    where:attributes.where
  }).then(function(res){
    return res
  }).catch(function(err){
    debug_std("model v1.3 | Studies - Err:"+err)
    return err
  })
}

e.trials=function(attributes){
  return db.Trial
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include:[{
      model:db.TrialAdditionalInfo
    },{
      model:db.Program,
    },{
      model:db.Study,
      include:[{
        model:db.StudyGermplasm,
        include:[{
          model:db.Germplasm,
          include:[{
            model:db.Species,
            include:[{
              model:db.Crop
            }]
          }]
        }]
      },{
        model:db.Location
      }]
    }],
    where:attributes.where
  }).then(function(res){
    return res
  }).catch(function(err){
    debug_std("model v1.3 | Trials - Err:"+err)
    return err
  })
}

e.example=function(attributes){
  return db.Example
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    where:attributes.where
  }).then(function(res){
    return res
  }).catch(function(err){
    debug_std("model v1.3 | Example - Err:"+err)
    return err
  })
}

module.exports=e