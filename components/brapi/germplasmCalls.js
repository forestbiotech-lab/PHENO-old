/**
 * Created by Bruno Costa on 29-11-2016.
 */

var dateFormat = require('dateformat');
var models= require('./models');
var fmtFunc= require('./helpers/formatingFunctions');




module.exports = function(query,options){
    
  query.pageSize = query.pageSize || 1000     //The default in specs is 1000    
  query.page = query.page || 0 
  
  //Set the page to show
  query.offset= query.page * query.pageSize;
  query.where={}

  //Set up WHERE depending query parameters.
  if(typeof query.germplasmName == "string"){
    query.germplasmName=[query.germplasmName]

  }else if(typeof query.germplasmName == "object"){
    query.germplasmName=query.germplasmName || ""
  }
  if(query.germplasmName){
    query.where.defaultDisplayName={'$in':query.germplasmName}
  }
  //germplasmDbId
  if(typeof query.germplasmDbId == "string"){
    query.germplasmDbId=[query.germplasmDbId]

  }else if(typeof query.germplasmDbId == "object"){
    query.germplasmDbId=query.germplasmDbId || ""
  }
  if(query.germplasmDbId){
    query.where.germplasmId={'$in':query.germplasmDbId}
  }
  //germplasmPUI
  if(typeof query.germplasmPUI == "string"){
    query.germplasmPUI=[query.germplasmPUI]

  }else if(typeof query.germplasmPUI == "object"){
    query.germplasmPUI=query.germplasmPUI || ""
  }
  if(query.germplasmPUI){
    query.where.germplasmPUI={'$in':query.germplasmPUI}
  }

  console.log(query.where)

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
        
                 
        //Export query values to a array and re  
        for(i in res.rows){

          //Check if germplasm is not in databaseValues create it
          var dataValues = res.rows[i].dataValues
          var germplasmDbId=dataValues.germplasmDbId;
    
          if(Object.keys(databaseValues).indexOf(String(germplasmDbId)) == -1){ 
            databaseValues[germplasmDbId]={'germplasmDbId':"",synonyms:[],typeOfGermplasmStorageCode:[],donors:[],donorsObj:{},taxonIds:[]};
            databaseValues[germplasmDbId]['germplasmDbId']=(String (germplasmDbId));
          }
          //Species
          databaseValues[germplasmDbId]['genus']=dataValues.Species.dataValues.genus;
          databaseValues[germplasmDbId]['species']=dataValues.Species.dataValues.species;
          databaseValues[germplasmDbId]['taxonIds']=dataValues.Species.dataValues.taxonIds;
          databaseValues[germplasmDbId]['speciesAuthority']=dataValues.Species.dataValues.speciesAuthority;
          databaseValues[germplasmDbId]['subtaxa']=dataValues.Species.dataValues.subtaxa;
          databaseValues[germplasmDbId]['subtaxaAuthority']=dataValues.Species.dataValues.subtaxaAuthority;
          //Will produce undefined if id isn't in DB
          //Attention hardcoded stuff
          databaseValues[germplasmDbId]['taxonIds']=[{"sourceName":"ncbiTaxon",'taxonId':'http://purl.obolibrary.org/obo/NCBITaxon_'+dataValues.Species.dataValues.NCBItaxonId}];
    
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
          try{
              var donorAccessionNumber=dataValues.DonorInstitute.dataValues.DonorGermplasm.dataValues.accessionNumber;
              var donorInstituteCode=dataValues.DonorInstitute.dataValues.Institution.dataValues.code;
              var germplasmPUI=dataValues.DonorInstitute.dataValues.DonorGermplasm.dataValues.germplasmPUI;
              //mix them together to generate a unique key for testing.
              var mixKey=donorAccessionNumber+donorInstituteCode+germplasmPUI;
            if(Object.keys(databaseValues[germplasmDbId].donorsObj).indexOf(mixKey)==-1){
              //I have to create an Object identifier that will allow to identify if donor has already been introduced. Must cycle at the end to restructure object
              databaseValues[germplasmDbId].donorsObj[mixKey]={
                "donorAccessionNumber":donorAccessionNumber,
                "donorInstituteCode":donorInstituteCode,
                "germplasmPUI":germplasmPUI,
              };          
            }
          }
          catch(err){
            //Most likely cause of error is that no donors exist since foreign key constraints ensure if there is a donor it should all be filled.
            databaseValues[germplasmDbId].donors=[]  
          }


          //To many foreignKey for now //push scheme
          //Pedigree no push though for this one.
          try{
            //The cross between parent accessions. if foreignkeys exist.
            var mother=dataValues.GermplasmParent.dataValues.GermplasmParent1.dataValues.accessionNumber;
            var father=dataValues.GermplasmParent.dataValues.GermplasmParent2.dataValues.accessionNumber;
            databaseValues[germplasmDbId].pedigree=mother+' / '+father;
          }
          catch(err){
            //Fall back to string in germplasm
            databaseValues[germplasmDbId].pedigree=dataValues.pedigree;  
          }
  
          


        }
        var data=[]
        //Restructure object into array 
        for(germplasm in databaseValues){
          for (donor in databaseValues[germplasm].donorsObj){
            databaseValues[germplasm].donors.push(databaseValues[germplasm].donorsObj[donor])
          }
          delete databaseValues[germplasm].donorsObj
          data.push(databaseValues[germplasm])
        }

        //Generate pagination details
        var pagination=fmtFunc.generatePagination(res,query);
        console.log(pagination);
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

