/**
 * Created by Bruno Costa on 01-02-2018.
 */

var dateFormat = require('dateformat');
var models= require('./models');
var fmtFunc= require('./formatingFunctions');




module.exports = function(query,options){
    
  query.pageSize = query.pageSize || 1000     //The default in specs is 1000    
  query.page = query.page || 0 
  
  //Set the page to show
  query.offset= query.page * query.pageSize;
  query.where={}
  query.where.study={}
  query.where.studyType={}
  query.where.trial={}
  query.where.studySeason={}
  query.where.studyGermplasm={}

  //Set up WHERE depending query parameters.
  //Studytype
  if(typeof query.studyType == "string"){
    query.studyType=[query.studyType]
  }else if(typeof query.studyType == "object"){
    query.studyType=query.studyType || ""
  }
  if(query.studyType){
    query.where.studyType.name={'$in':query.studyType};
  }

  //Program
  if(typeof query.programDbId == "string"){
    query.programDbId=[query.programDbId]
  }else if(typeof query.programDbId == "object"){
    query.programDbId=query.programDbId || ""
  }
  if(query.programDbId){
    query.where.trial.programId={'$in':query.programDbId};
  }  

  //LocationDbId
  if(typeof query.locationDbId == "string"){
    query.locationDbId=[query.locationDbId]
  }else if(typeof query.locationDbId == "object"){
    query.locationDbId=query.locationDbId || ""
  }
  if(query.locationDbId){
    query.where.study.locationId={'$in':query.locationDbId};
  }

  //LocationDbId
  if(typeof query.seasonDbId == "string"){
    query.seasonDbId=[query.seasonDbId]
  }else if(typeof query.seasonDbId == "object"){
    query.seasonDbId=query.seasonDbId || ""
  }
  if(query.seasonDbId){
    query.where.studySeason.seasonId={'$in':query.seasonDbId};
  }

  //TrialDbId
  if(typeof query.trialDbId == "string"){
    query.trialDbId=[query.trialDbId]
  }else if(typeof query.trialDbId == "object"){
    query.trialDbId=query.trialDbId || ""
  }
  if(query.trialDbId){
    query.where.study.trialId={'$in':query.trialDbId};
  }

  //GermplasmDbId
  if(typeof query.germplasmDbId == "string"){
    query.germplasmDbId=[query.germplasmDbId]
  }else if(typeof query.germplasmDbId == "object"){
    query.germplasmDbId=query.germplasmDbId || ""
  }
  if(query.germplasmDbId){
    query.where.studyGermplasm.germplasmId={'$in':query.germplasmDbId};
  }

  //Active.
  if(typeof query.active == "string"){
    query.active=query.active.toLowerCase();
  }else if(typeof query.active == "object"){
    query.active=query.active.toLowerCase() || ""
  }
  if(query.active){
    if(query.active=="true"){
      query.active=1
    }
    if(query.active=="false"){
      query.active=0;
    }

    query.where.study.active=query.active;
  }



  console.log(query)

  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    //Missing how to deal with rejections of the model. Function for rejection?
    models.getStudiesSearch(query).then(function(res){
      //Logic to decide which is sent
      if(res instanceof Error){
        //Send the error in the status send rejection to promise
        //Args:queryData,pagination,code,message
        reject( fmtFunc.generateJSON(null,null,400,res.name+" : "+res.message) );
 
      }else{
        //If res isn't an error send the appropriate response
        var databaseValues={}
        
        //Export query values to a array and re  
        for(i in res.rows){

          //Check if germplasm is not in databaseValues create it
          var dataValues = res.rows[i].dataValues
          var studyDbId=dataValues.studyDbId;

          //Used to secure duplicate rows because of arrays.
          if(Object.keys(databaseValues).indexOf(String(studyDbId)) == -1){ 
            databaseValues[studyDbId]={"seasons":[],"additionalInfo":{}};
            databaseValues[studyDbId]['studyDbId']=studyDbId;
          }


          //study
          databaseValues[studyDbId]['name']=dataValues.name;
          databaseValues[studyDbId]['trialId']=dataValues.trialId;
          databaseValues[studyDbId]['locationDbId']=dataValues.locationDbId;
          databaseValues[studyDbId]['active']=dataValues.active;

      
          //Trial
          databaseValues[studyDbId]['trialName']=dataValues.Trial.dataValues.trialName;
          var startDate=dataValues.Trial.dataValues.startDate;
          var endDate=dataValues.Trial.dataValues.endDate;
          typeof date === "string" ? startDate=startDate.replace(/-/g,"") : startDate=dateFormat(new Date(startDate), "yyyy-mm-dd");
          typeof date === "string" ? endDate=endDate.replace(/-/g,"") : endDate=dateFormat(new Date(endDate), "yyyy-mm-dd");
          databaseValues[studyDbId]['startDate']=startDate;
          databaseValues[studyDbId]['endDate']=endDate;
          databaseValues[studyDbId]['programDbId']=dataValues.Trial.dataValues.programId;

          //Program 
          databaseValues[studyDbId]['programName']=dataValues.Trial.dataValues.Program.dataValues.name;

          //StudyType
          databaseValues[studyDbId]['studyType']=dataValues.StudyType.dataValues.name;
          //databaseValues[studyDbId]['subtaxaAuthority']=dataValues.Trial.dataValues.subtaxaAuthority;

          //Season
          var seasonDataValues=dataValues.StudySeason.dataValues.Season.dataValues;
          databaseValues[studyDbId]['seasons'].push(seasonDataValues.year+" "+seasonDataValues.season);

          //StudyAddionalInfo
          try{
            var additionalInfoDataValues=dataValues.StudyAdditionalInfo.dataValues;
            databaseValues[studyDbId]['additionalInfo'][additionalInfoDataValues.propertyName]=additionalInfoDataValues.propertyValue;
          }catch(Err){
            //console.log(Err);
          }  
        } 
 
        var data=[]
        //Restructure object into array 
        for(study in databaseValues){

          data.push(databaseValues[study]);
        }
        //Generate pagination details
        var pagination=fmtFunc.generatePagination(res,query);

        //Args:queryData,pagination,code,message
        resolve(fmtFunc.generateJSON(data,pagination,200,null));

      //end else
      }

    //end then
    }).catch(function(err){

      //queryData,pagination,code,message
      reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );        
    });
        
  })
};

