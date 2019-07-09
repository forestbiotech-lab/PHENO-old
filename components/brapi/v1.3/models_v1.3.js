
//Calls Index to load sql tables
var db = require('./../sqldb');
const Sequelize=require('sequelize');

var debug = require('debug');
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');
//Break up this file into domains once it gets to big.
var e={}

e.calls=function(attributes) {
    return db.Calls
    .findAndCountAll({
        offset: parseInt(attributes.offset),
        limit: parseInt(attributes.pageSize)+1,
        include: [{
          model: db.Methods,
        },{
          model: db.DataTypes,
        },{
          model:db.Versions
        }],
        where: attributes.where
    }).then(function(res){
        return res;
    }).catch(function(err){
        debug_std("model v1.3 | Implemented Calls - Err: "+ err);
        return err;
    });
}

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

e.observationtables_post=function(attributes){
  return db.Search
  .create(
    attributes.inserts
  ).then(function(res){
  //  console.log(res)
    return res
  }).catch(function(err){
    debug_std("model v1.3 | observationtables_post | (create search id ) - Err: "+ err);
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
    },{
      model:db.GermplasmParents, //This might have been deprecated
      include:[{
        model:db.GermplasmParent1, 
      },{
        model:db.GermplasmParent2,
      }]
    },{
        model:db.DonorInstitute,
        include:[{
          model:db.Institution,
        },{
          model:db.Germplasm,
        }]
    },{
      model:db.StudyGermplasm
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
    //order: [attributes.sortBy,attributes.sortOrder],
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
      model:db.Trial,
      include:[{
        model:db.TrialAuthorship,
        include:[{
          model:db.Authorship
        }]
      }]
    },{
      model:db.Location
    },{
      model:db.StudySeason,
      include:[{
        model:db.Season
      }]
    },{
      model:db.StudyContact,
      include:[{
        model:db.Person,
        include:[{
          model: db.Institution
        }]
      }]
    },{
     model:db.DataLink 
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
      model:db.TrialAuthorship,
      include:[{
        model:db.Authorship
      }]
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
            }],
          }],
        }],
      },{
        model:db.Location
      },{
        model:db.StudyContact,
        include:[{
          model:db.Person,
          include:[{
            model:db.Institution
          }],
        }],
      }],
    }],
    where:attributes.where
  }).then(function(res){
    return res
  }).catch(function(err){
    debug_std("model v1.3 | Trials - Err:"+err)
    return err
  })
}

e.observationunits=function(attributes){
  return db.ObservationUnit
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include:[{
      model: db.Study,
      include:[{
        model: db.Trial,
        include:[{
          model: db.Program,
        }]
      },{
        model: db.Location,
      }],
    },{
      model: db.ObservationUnitXRef
    },{
      model: db.Germplasm
    },{
      model: db.Observation,
      include: [{
        model: db.ObservationVariable
      },{
        model: db.Person
      }]
    },{
      model: db.Treatment,
      include:[{
        model: db.TreatmentModality,
        include:[{
          model:db.TreatmentFactor,
        }]
      }]
    }],
    where:attributes.where
  }).then(function(res){
    return res
  }).catch(function(err){
    debug_std("model v1.3 | observationunit - Err:"+err)
    return err
  })
}
e.studiesObservationvariables=function(attributes){
  return db.ObservationVariable
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include:[{
      model:db.StudyObservationVariable,
      include:[{
        model:db.Study,
      }],
    },{
      model: db.Crop
    },{
      model: db.ContextOfUse
    },{
      model: db.Ontology,
      include:[{
        model:db.OntologyReference
      }]
    },{
      model: db.Institution
    },{
      model: db.Person
    },{
      model: db.ObservationVariableSynonym
    },{
      model: db.Trait,
      include: [{
        model: db.TraitSynonym
      },{
        model: db.TraitAlternativeAbbreviation
      },{
      model: db.Ontology,
      include:[{
        model:db.OntologyReference
      }]
    }]
    },{
      model: db.Method,
      include:[{
        model: db.Ontology,
        include:[{
          model:db.OntologyReference
        }]
      }]
    },{
      model: db.Scale,
      include: [{
        model: db.DataType
      },{
        model: db.ScaleCategory
      },{
      model: db.Ontology,
      include:[{
        model:db.OntologyReference
      }]
    }]        
    }],
    where:attributes.where
  }).then(function(res){
    return res
  }).catch(function(err){
    debug_std("model v1.3 | studiesObservationvariables - Err:"+err)
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