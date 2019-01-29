/**
 * Created by Manjesh on 14-05-2016.
 */


//Calls Index to load sql tables
var db = require('./../sqldb');

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
  })
}

module.exports=e