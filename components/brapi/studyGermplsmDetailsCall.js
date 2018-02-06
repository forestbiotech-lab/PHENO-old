/**
 * Created by Bruno Costa on 25-01-2018.
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

  //studyDbId
  if(typeof query.studyDbId == "string"){
    query.studyDbId=[query.studyDbId]

  }else if(typeof query.studyDbId == "object"){
    query.studyDbId=query.studyDbId || ""
  }
  if(query.studyDbId){
    query.where.studyId={'$in':query.studyDbId}
  }

  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    //Missing how to deal with rejections of the model. Function for rejection?
    models.getStudyGermplasmDetails(query).then(function(res){
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
          var germplasmDbId=dataValues.germplasmId;
          if(Object.keys(databaseValues).indexOf(String(germplasmDbId)) == -1){ 
            databaseValues[germplasmDbId]={synonyms:[]};
            databaseValues[germplasmDbId]['germplasmDbId']=(String (germplasmDbId));
          }
          //Species
          //databaseValues[germplasmDbId]['genus']=dataValues.Species.dataValues.genus;
          databaseValues[germplasmDbId]['germplasmName']=dataValues.Germplasm.dataValues.germplasmName;
          databaseValues[germplasmDbId]['pedigree']=dataValues.Germplasm.dataValues.pedigree;
          databaseValues[germplasmDbId]['seedSource']=dataValues.Germplasm.dataValues.seedSource;
          databaseValues[germplasmDbId]['accessionNumber']=dataValues.Germplasm.dataValues.accessionNumber;
          databaseValues[germplasmDbId]['germplasmPUI']=dataValues.Germplasm.dataValues.germplasmPUI;
          //Will produce undefined if id isn't in DB


          //Parse attributes from db
      
          //GermplasmSynonym
          try{
            if(databaseValues[germplasmDbId].synonyms.indexOf(dataValues.Germplasm.dataValues.GermplasmSynonym.dataValues.synonym)==-1){
              databaseValues[germplasmDbId].synonyms.push(dataValues.Germplasm.dataValues.GermplasmSynonym.dataValues.synonym);          
            }
          }
          catch(err){
            databaseValues[germplasmDbId].synonyms=[]  
          }
     
        }
        var data=[]
        //Restructure object into array 
        for(germplasm in databaseValues){
          data.push(databaseValues[germplasm])
        }
        //console.log(data);
        //Generate pagination details
        var pagination=fmtFunc.generatePagination(res,query);

        //Args:queryData,pagination,code,message
        var result={
          studyDbId: query.studyDbId[0],
          trailName: res.rows[0].dataValues.Study.dataValues.Trial.dataValues.name, //Might be null.
          data:data
          }
        resolve(fmtFunc.generateJSON(result,pagination,200,null));

      //end else
      }

    //end then
    }).catch(function(err){

      //queryData,pagination,code,message
      reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );        
    });
        
  })
};

