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


  //Set up WHERE depending query parameters.
  //Studytype
  if(typeof query.studyDbId == "string"){
    query.studyDbId=[query.studyDbId]
  }else if(typeof query.studyDbId == "object"){
    query.studyDbId=query.studyDbId || ""
  }
  if(query.studyDbId){
    query.where.id={'$in':query.studyDbId};
  }

 


  console.log(query)

  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    //Missing how to deal with rejections of the model. Function for rejection?
    models.getStudyDetails(query).then(function(res){
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
          
          //console.log(res.rows[i])
          //Check if germplasm is not in databaseValues create it
          var dataValues = res.rows[i].dataValues
          var studyDbId=dataValues.studyDbId;

          //Used to secure duplicate rows because of arrays. 
          //Objects in results must be created here or they will get overwritten by duplication
          //Push events need to ensure value being push don't exist already
          if(Object.keys(databaseValues).indexOf(String(studyDbId)) == -1){ 
            databaseValues[studyDbId]={"seasons":[],"location":{"additionalInfo":{}},"contacts":{},"additionalInfo":{}};
            databaseValues[studyDbId]['studyDbId']=(String(studyDbId));
          }

          //study
          databaseValues[studyDbId]['studyName']=dataValues.name;

          //StudyType
          databaseValues[studyDbId]['studyType']=dataValues.StudyType.dataValues.name;
          databaseValues[studyDbId]['studyDescription']=dataValues.StudyType.dataValues.description;

          //Season
          var seasonDataValues=dataValues.StudySeason.dataValues.Season.dataValues;
          var season=seasonDataValues.year+" "+seasonDataValues.season
          if(databaseValues[studyDbId]['seasons'].indexOf(season) == -1){ 
            databaseValues[studyDbId]['seasons'].push(season);
          }  

          //Trial
          databaseValues[studyDbId]['trialDbId']=(String (dataValues.trialId));
          databaseValues[studyDbId]['trialName']=dataValues.Trial.dataValues.trialName;
          var startDate=dataValues.Trial.dataValues.startDate;
          var endDate=dataValues.Trial.dataValues.endDate;
          typeof date === "string" ? startDate=startDate.replace(/-/g,"") : startDate=dateFormat(new Date(startDate), "yyyy-mm-dd");
          typeof date === "string" ? endDate=endDate.replace(/-/g,"") : endDate=dateFormat(new Date(endDate), "yyyy-mm-dd");
          databaseValues[studyDbId]['startDate']=startDate;
          databaseValues[studyDbId]['endDate']=endDate;

          databaseValues[studyDbId]['active']=(String (dataValues.active));
          databaseValues[studyDbId]['license']="";

          //Location
          databaseValues[studyDbId]['location']['locationDbId']=(String(dataValues.locationDbId));
          databaseValues[studyDbId]['location']['name']=dataValues.Location.dataValues.name;
          databaseValues[studyDbId]['location']['abbreviation']=dataValues.Location.dataValues.abbreviation;
          databaseValues[studyDbId]['location']['countryCode']=(String (dataValues.Location.dataValues.Country.dataValues.code));
          databaseValues[studyDbId]['location']['countryName']=dataValues.Location.dataValues.Country.dataValues.name;
          databaseValues[studyDbId]['location']['instituteName']=dataValues.Location.dataValues.Institution.dataValues.name;
          databaseValues[studyDbId]['location']['instituteAddress']="!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
          databaseValues[studyDbId]['location']['latitude']=parseFloat(dataValues.Location.dataValues.latitude);
          databaseValues[studyDbId]['location']['longitude']=parseFloat(dataValues.Location.dataValues.longitude);
          databaseValues[studyDbId]['location']['altitude']=dataValues.Location.dataValues.altitude;
          databaseValues[studyDbId]['location']['studyDescription']=dataValues.Location.dataValues.studyDescription;
          //LocationAddionalInfo //Trye because there might not be any
          try{
            var locationAdditionalInfoDataValues=dataValues.Location.dataValues.LocationAdditionalInfo.dataValues;
            databaseValues[studyDbId]['location']['additionalInfo'][locationAdditionalInfoDataValues.propertyName]=locationAdditionalInfoDataValues.propertyValue;
          }catch(Err){
            //console.log(Err);
          }
          var contactDbId=dataValues.StudyContact.dataValues.id;
          
          databaseValues[studyDbId]['contacts'][contactDbId]={}
          databaseValues[studyDbId]['contacts'][contactDbId]['contactDbId']=(String (contactDbId));
          databaseValues[studyDbId]['contacts'][contactDbId]['name']=dataValues.StudyContact.dataValues.Person.dataValues.name;
          databaseValues[studyDbId]['contacts'][contactDbId]['instituteName']=dataValues.StudyContact.dataValues.Person.dataValues.Institution.dataValues.name;
          databaseValues[studyDbId]['contacts'][contactDbId]['email']=dataValues.StudyContact.dataValues.Person.dataValues.email;
          databaseValues[studyDbId]['contacts'][contactDbId]['type']=dataValues.StudyContact.dataValues.Person.dataValues.role;
          databaseValues[studyDbId]['contacts'][contactDbId]['orcid']=dataValues.StudyContact.dataValues.Person.dataValues.orcid;


          //StudyAddionalInfo
          try{
            var additionalInfoDataValues=dataValues.StudyAdditionalInfo.dataValues;
            databaseValues[studyDbId]['additionalInfo'][additionalInfoDataValues.propertyName]=additionalInfoDataValues.propertyValue;
          }catch(Err){
            //console.log(Err);
          }  

        } 
 
        var metadata=[]
        //Restructure object into array 
        for(study in databaseValues){
            var contacts=[]
            for( contact in databaseValues[study]['contacts']){
              contacts.push(databaseValues[study]['contacts'][contact])
            }
            databaseValues[study]['contacts']=contacts
            metadata.push(databaseValues[study]);

        }
        //Generate pagination details
        var pagination=fmtFunc.generatePagination(res,query);
        console.log(metadata[0]);
        var metadata=metadata[0];
        metadata.data="metadataOnlyRemoveData";
        //Args:queryData,pagination,code,message
        resolve(fmtFunc.generateJSON(metadata,pagination,200,null));

      //end else
      }

    //end then
    }).catch(function(err){

      //queryData,pagination,code,message
      reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );        
    });
        
  })
};

