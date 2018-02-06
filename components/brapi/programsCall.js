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

  //programName
  if(typeof query.programName == "string"){
    query.programName=[query.programName]

  }else if(typeof query.programName == "object"){
    query.programName=query.programName || ""
  }
  if(query.programName){
    query.where.name={'$in':query.programName}
  }

  //abbreviation
  if(typeof query.abbreviation == "string"){
    query.abbreviation=[query.abbreviation]

  }else if(typeof query.abbreviation == "object"){
    query.abbreviation=query.abbreviation || ""
  }
  if(query.abbreviation){
    query.where.abbreviation={'$in':query.abbreviation}
  }


  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    //Missing how to deal with rejections of the model. Function for rejection?
    models.getPrograms(query).then(function(res){
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
          var programDbId=dataValues.programDbId;
          if(Object.keys(databaseValues).indexOf(String(programDbId)) == -1){ 
            databaseValues[programDbId]={};
            databaseValues[programDbId]['programDbId']=(String (programDbId));
          }
          //Species
          //databaseValues[programDbId]['genus']=dataValues.Species.dataValues.genus;
          databaseValues[programDbId]['name']=dataValues.name;
          databaseValues[programDbId]['abbreviation']=dataValues.abbreviation;
          databaseValues[programDbId]['objective']=dataValues.objective;
          console.log(databaseValues)
          databaseValues[programDbId]['leadPerson']=dataValues.Person.dataValues.honorific+" "+dataValues.Person.dataValues.name;
        }
        var data=[]
        //Restructure object into array 
        for(programs in databaseValues){
          data.push(databaseValues[programs])
        }
        //console.log(data);
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
