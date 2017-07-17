/**
 * Created by Bruno Costa on 29-11-2016.
 */

var dateFormat = require('dateformat');
var models= require('./models');
var fmtFunc= require('./formatingFunctions');




module.exports = function(query,options){
    
  query.pageSize = query.pageSize || 1000     //The default in specs is 1000    
  query.page = query.page || 0 
  
  //Set the page to show
  query.offset= query.page * query.pageSize;
  query.germplasmName=query.germplasmName || ""
  query.germplasmDbId=query.germplasmDbId || ""
  query.germplasmPUI=query.germplasmPUI || ""
  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    //Missing how to deal with rejections of the model. Function for rejection?
    models.getGermplasm(query).then(function(res){
      //Logic to decide which is sent
      if(res instanceof Error){
        //Send the error in the status send rejection to promise
        //Args:queryData,pagination,code,message
        reject( fmtFunc.generateJSON(null,null,400,res.name+" : "+res.message) );
 
      }else{
        //If res isn't an error send the appropriate response
        var databaseValues={}
        
        var germplasm={
          /**/"germplasmDbId": "",
          /**/"defaultDisplayName": "",
          /**/"accessionNumber": "",
          /**/"germplasmName": "",
          /**/"germplasmPUI": "",
          "pedigree": "",
          /**/"germplasmSeedSource": "",
          /**/"synonyms": [ ],
          /**/"commonCropName": "",
          /**/"instituteCode": "",
          /**/"instituteName": "",
          /**/"biologicalStatusOfAccessionCode": null,
          /**/"countryOfOriginCode": "",
          /**/"typeOfGermplasmStorageCode": [],
          /**/"genus": "",
          /**/"species": "",
          /**/"taxonIds": [],
          /**/"speciesAuthority": "",
          /**/"subtaxa": "",
          /**/"subtaxaAuthority": "",
          "donors": [],
          /**/"acquisitionDate": ""
        }
                 
        //Export query values to a array and re  
        for(i in res.rows){

          //Check if germplasm is not in databaseValues create it
          var dataValues = res.rows[i].dataValues
          var germplasmDbId=dataValues.germplasmDbId;
    
          if(Object.keys(databaseValues).indexOf(String(germplasmDbId)) == -1){ 
            databaseValues[germplasmDbId]={synonyms:[],typeOfGermplasmStorageCode:[],donors:[]};
            databaseValues[germplasmDbId]['germplasmDbId']=germplasmDbId;
          }
          //Species
          databaseValues[germplasmDbId]['genus']=dataValues.Species.dataValues.genus;
          databaseValues[germplasmDbId]['species']=dataValues.Species.dataValues.species;
          databaseValues[germplasmDbId]['taxonIds']=dataValues.Species.dataValues.taxonIds;
          databaseValues[germplasmDbId]['speciesAuthority']=dataValues.Species.dataValues.speciesAuthority;
          databaseValues[germplasmDbId]['subtaxa']=dataValues.Species.dataValues.subtaxa;
          databaseValues[germplasmDbId]['subtaxaAuthority']=dataValues.Species.dataValues.subtaxaAuthority;
          //Institution
          databaseValues[germplasmDbId]['instituteName']=dataValues.Institution.dataValues.instituteName;
          databaseValues[germplasmDbId]['instituteCode']=dataValues.Institution.dataValues.instituteCode;
          //Germplasm
          databaseValues[germplasmDbId].defaultDisplayName=dataValues.defaultDisplayName;
          databaseValues[germplasmDbId].accessionNumber=dataValues.accessionNumber;
          databaseValues[germplasmDbId].germplasmName=dataValues.germplasmName;
          databaseValues[germplasmDbId].germplasmPUI=dataValues.germplasmPUI;
          databaseValues[germplasmDbId].germplasmSeedSource=dataValues.germplasmSeedSource;
          databaseValues[germplasmDbId].biologicalStatusOfAccessionCode=dataValues.biologicalStatusOfAccessionCode;

          //Should add if attributes exist To avoid errors. ! To consider.
          //Parse attributes from db
          //Tricky if 0000-00-00 its a string and I have to do a replace. Else I do a date format.
          var date=dataValues.acquisitionDate;
          typeof date === "string" ? databaseValues[germplasmDbId].acquisitionDate=date.replace(/-/g,"") : databaseValues[germplasmDbId].acquisitionDate=dateFormat(new Date(date), "yyyymmdd");
          
          //Country
          databaseValues[germplasmDbId].countryOfOriginCode=dataValues.Country.dataValues.countryOfOriginCode;
          //Crop
          databaseValues[germplasmDbId].commonCropName=dataValues.Species.dataValues.Crop.dataValues.commonCropName;
          //GermplasmStorage
          try{
            if(databaseValues[germplasmDbId].typeOfGermplasmStorageCode.indexOf(dataValues.GermplasmStorage.dataValues.typeOfGermplasmStorageCode)==-1){
              databaseValues[germplasmDbId].typeOfGermplasmStorageCode.push(dataValues.GermplasmStorage.dataValues.typeOfGermplasmStorageCode);          
            }
          }catch(err){
            databaseValues[germplasmDbId].typeOfGermplasmStorageCode=[]  
          }
          //GermplasmSynonym
          try{
            if(databaseValues[germplasmDbId].synonyms.indexOf(dataValues.GermplasmSynonym.dataValues.synonym)==-1){
              databaseValues[germplasmDbId].synonyms.push(dataValues.GermplasmSynonym.dataValues.synonym);          
            }
          }
          catch(err){
            databaseValues[germplasmDbId].synonyms=[]  
          }
          
          //Same type as above.
          //DonorInstitute
          //To many foreignKey for now //push scheme
          //Pedigree no push though for this one.
          //The cross between parent accessions. if not null.
          try{
            var mother=dataValues.GermplasmParent.dataValues.GermplasmParent1.dataValues.accessionNumber;
            var father=dataValues.GermplasmParent.dataValues.GermplasmParent2.dataValues.accessionNumber;
            databaseValues[germplasmDbId].pedigree=mother+' / '+father;
          }
          catch(err){
            databaseValues[germplasmDbId].pedigree=dataValues.pedigree;  
          }
  
          


        }
        console.log(dataValues);
        //Generate pagination details
        var pagination=fmtFunc.generatePagination(res,query);

        //Args:queryData,pagination,code,message
        resolve(fmtFunc.generateJSON(databaseValues,pagination,200,null));

      //end else
      }

    //end then
    }).catch(function(err){
      console.log(err)
      //queryData,pagination,code,message
      reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );        
    });
        
  })
};

