/**
 * Created by Manjesh on 14-05-2016.
 */


//Calls Index to load sql tables
var db = require('./sqldb');

//Break up this file into domains once it gets to big.
var e={}

//getGermplasm call attributes
//DB call. "where" is used to set up lookup filters 
e.getGermplasm=function(attributes){
  return db.Germplasm
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
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
        model:db.GermplasmParent1,
        attributes:{exclude:['id','species','holdingInstitution','defaultDisplayName','germplasmPUI','seedSource','biologicalStatusOfAccessionCode','acquisitionDate','countryOfOrigin']}
      },{
        model:db.GermplasmParent2,
        attributes:{exclude:['id','species','holdingInstitution','defaultDisplayName','germplasmPUI','seedSource','biologicalStatusOfAccessionCode','acquisitionDate','countryOfOrigin']}
      }]
    },{
        model:db.DonorInstitute,
        include:[{
          model:db.Institution,
        },{
          model:db.DonorGermplasm,
        }]
    }],
    //defaultDisplayName might not be the same as germplasmName in the future. !!!Possible code breaking  
    where: attributes.where,
  })
  .then(function(res){
    return res;
  })
  .catch(function(err){
    console.log("getGermplasm - Err: "+ err);
    return err;
  });

}

//getGermplasm call attributes
//DB call. "where" is used to set up lookup filters 
e.getGermPedigree=function(attributes){
  return db.Germplasm
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    attributes: { exclude:['id','speciesId','origin','holdingInstitution','seedSource'], include:[['id', 'germplasmDbId'], ['defaultDisplayName','germplasmName'],['seedSource','gerplasmSeedSource'] ]},
    include: [{
      model:db.GermplasmParents,
      include:[{
        model:db.GermplasmParent1,
        attributes:{exclude:['id','species','holdingInstitution','defaultDisplayName','germplasmPUI','seedSource','biologicalStatusOfAccessionCode','acquisitionDate','countryOfOrigin']}
      },{
        model:db.GermplasmParent2,
        attributes:{exclude:['id','species','holdingInstitution','defaultDisplayName','germplasmPUI','seedSource','biologicalStatusOfAccessionCode','acquisitionDate','countryOfOrigin']}
      }]
    }],
    //defaultDisplayName might not be the same as germplasmName in the future. !!!Possible code breaking  
    where: attributes.where,
  })
  .then(function(res){
    return res;
  })
  .catch(function(err){
    console.log("getGermPedigree - Err: "+ err);
    return err;
  });

}

//getStudyGermplasmDetails call attributes
//DB call. "where" is used to set up lookup filters 
e.getStudiesSearch=function(attributes){
  return db.Study
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,

    attributes: { include:[["id","studyDbId"],["locationId","locationDbId"]]},

    include: [{
      model:db.Trial,
      attributes:{include:[['name','trialName']]}, //Exclude and rename
      include: [{
        model:db.Program,
      }],
      where: attributes.where.trial
    },{
      model:db.StudyType,
      where: attributes.where.studyType
      },{
        model:db.StudySeason,
        include: [{
          model:db.Season
        }],
        where:attributes.where.studySeason
      },{
      model:db.StudyAdditionalInfo,  
    },{
      model:db.StudyGermplasm,
      where:attributes.where.studyGermplasm
    },{
      model:db.Location,
    }],
    //defaultDisplayName might not be the same as germplasmName in the future. !!!Possible code breaking  
    where: attributes.where.study,
  })
  .then(function(res){
    return res;
  })
  .catch(function(err){
    console.log("getStudySearch - Err: "+ err);
    return err;
  });

}

//getStudyDetails call attributes
//DB call. "where" is used to set up lookup filters 
e.getStudyDetails=function(attributes){
  return db.Study
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,

    attributes: { include:[["id","studyDbId"],["locationId","locationDbId"]]},

    include: [{
      model:db.Trial,
      attributes:{include:[['name','trialName']]}, //Exclude and rename
      include: [{
        model:db.Program,
      }],
    },{
      model:db.StudyType,
    },{
      model:db.StudySeason,
      include: [{
        model:db.Season
      }],
    },{
      model:db.StudyAdditionalInfo,  
    },{
      model:db.Location,
      include: [{
        model:db.Country,
      },{
        model:db.Institution,
      },{
        model:db.LocationAdditionalInfo
      }],
    },{
      model:db.StudyContact,
      include: [{
        model:db.Person,
        include: [{
          model: db.Institution,
        }]
      }],
    }],

    //defaultDisplayName might not be the same as germplasmName in the future. !!!Possible code breaking  
    where: attributes.where,
  })
  .then(function(res){
    return res;
  })
  .catch(function(err){
    console.log("getStudyDetails - Err: "+ err);
    return err;
  });

}

//getStudyGermplasmDetails call attributes
//DB call. "where" is used to set up lookup filters 
e.getStudyGermplasmDetails=function(attributes){
  return db.StudyGermplasm
  .findAndCountAll({ 
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,


    //attributes: { exclude:['id','speciesId','origin','holdingInstitution','seedSource'], include:[['id', 'germplasmDbId'], ['defaultDisplayName','germplasmName'],['seedSource','gerplasmSeedSource'] ]},
    include: [{
      model:db.Germplasm,
      attributes:{exclude:['id','speciesId','holdingInstitution','biologicalStatusOfAccessionCode','acquisitionDate','countryOfOrigin'],include:[['defaultDisplayName','germplasmName']]}, //Exclude and rename
      include: [{
        model:db.GermplasmSynonym,
      }]
    },{
      model:db.Study,
      include:[{
        model:db.Trial
      }]
    }],


    //defaultDisplayName might not be the same as germplasmName in the future. !!!Possible code breaking  
    where: attributes.where,
  })
  .then(function(res){
    return res;
  })
  .catch(function(err){
    console.log("getStudyGermplasmDetails - Err: "+ err);
    return err;
  });

}

/* Created by João Cardoso - 11/07/2017
 * Crop Call Implementation - Fetches data from the Crop Table */
e.getCrops=function(attributes) {
    return db.Crop
    .findAndCountAll({
        offset: parseInt(attributes.offset),
        limit: parseInt(attributes.pageSize)+1,
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
e.listCalls=function(attributes) {
    return db.Calls
    .findAndCountAll({
        offset: parseInt(attributes.offset),
        limit: parseInt(attributes.pageSize)+1,
        include: [{
            model: db.Methods,
            attributes: {
                exclude: ['id','callId'],
            }
        },{
            model: db.DataTypes,
            attributes: {
                exclude: ['id',"callId"],
            },
        }],

    }).then(function(res){
        return res;
    }).catch(function(err){
        console.log("getImplementedCalls - Err: "+ err);
        return err;
    });
}

//Get programs
e.getPrograms=function(attributes) {
    return db.Program
    .findAndCountAll({
        offset: parseInt(attributes.offset),
        limit: parseInt(attributes.pageSize)+1,
        attributes: { 
          exclude:['id'],
          include:[
            ["id","programDbId"]
          ]
        },
        include: [
          {model:db.Person}
        ],
        where:attributes.where
    }).then(function(res){
            return res;
    }).catch(function(err){
            console.log("getPrograms - Err: "+ err);
            return err;
    });
}

e.getObservationVariables=function(attributes){
  return db.ObservationVariable
  .findAndCountAll({
      offset: parseInt(attributes.offset),
      limit: parseInt(attributes.pageSize)+1,
      attributes:{},
      include: [{
        model:db.StudyObservationVariable,
        include: [{
          model: db.Study,
          where: attributes.where,
          include: {
            model: db.Trial,
          }
        }]
      },{
        model: db.Crop
      },{
        model: db.ContextOfUse
      },{
        model: db.Ontology
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
        }]
      },{
        model: db.Method
      },{
        model: db.Scale,
        include: [{
          model: db.DataType
        },{
          model: db.ScaleCategory
        }]
          
      }],
  }).then(function(res){
        return res;
  }).catch(function(err){
        console.log("getObservationVariables - Err: "+ err);
        return err;
  })

}

e.listOfTrailSummaries=function(attributes){
  return db.Trial
  .findAndCountAll({
      offset: parseInt(attributes.offset),
      limit: parseInt(attributes.pageSize)+1,
      attributes:{},
      include: [{
        model: db.Program
      },{
        model: db.Study,
        include: [{
          model: db.StudyAdditionalInfo
        },{
          model: db.Location
        }]
      }]
  }).then(function(res){
      return (res)
  }).catch(function(err){
      console.log("listOfTrailSummaries - Err: "+ err);
      return err;
  })
}

e.locationDetails=function(attributes){
  return db.Location
  .findAndCountAll({
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include: [{
      model: db.Institution
    },{
      model: db.LocationAdditionalInfo
    },{
      model: db.Country
    }],
    where: attributes.where
  }).then(function(res){
    return res;
  }).catch(function(err){
    console.log("locationDetails - Err: "+ err);
    return err;
  })
}
e.phenotypesSearch=function(attributes){
  return db.Sample
  .findAndCountAll({
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include: [{
      model: db.StudyPlant,
      include:[{
        model: db.Observation,
        include: [{
          model: db.Person
        },{
          model: db.ObservationVariable,
          include:[{
            model: db.StudyObservationVariable,
            include:[{
              model: db.Study,
              include:[{
                model: db.Trial,
                include: [{
                  model: db.Program
                }]
              }]
            }]
          }]
        },{
          model: db.StudyPlot
        }]
      },{
        model: db.StudyObservationUnit,
        include:[{
          model: db.ObservationUnit
        }]        
      }]
    },{
      model: db.Season
    }]
  }).then(function(res){
    return res;
  }).catch(function(err){
    console.log("phenotypesSearch - Err: "+ err);
    return err;
  })
}

e.listStudies=function(attributes){
  return db.Study
  .findAndCountAll({
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include:[{
      model:db.Trial,
      include:[{
        model:db.Program
      },{
        model:db.TrialAdditionalInfo
      }]
    }]    
  })
}

e.listOfProgramsForSpecies=function(attributes){
  return db.Species
  .findAndCountAll({
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include: [{
      model: db.Crop,
    },{
      model:db.Germplasm,
      include:[{
        model:db.StudyGermplasm,
        include:[{
          model:db.Study,
          include:[{
            model:db.Trial,
            include:[{
              model:db.Program,
              include:[{
                model:db.Person
              }]
            }]
          }]
        }]
      }]
    }]    
  }).then(function(res){
    return res;
  }).catch(function(err){
    console.log("listOfProgramsForSpecies - Err: "+ err);
    return err;
  })
}

e.listAllTraits=function(attributes){
  return db.Trait
  .findAndCountAll({
    offset: parseInt(attributes.offset),
    limit: parseInt(attributes.pageSize)+1,
    include: [{
      model: db.ObservationVariable,
    }]    
  }).then(function(res){
    return res;
  }).catch(function(err){
    console.log("listAlltraits - Err: "+ err);
    return err;
  })
}

module.exports=e