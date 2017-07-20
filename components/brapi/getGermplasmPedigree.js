/**
 * Created by Bruno Costa on 20-07-2017.
 */


var models= require('./models');
var fmtFunc= require('./formatingFunctions');




module.exports = function(query,options){
    
  query.pageSize = query.pageSize || 1000     //The default in specs is 1000    
  query.page = query.page || 0 

  //Set the page to show
  query.offset= query.page * query.pageSize;
  query.notation=query.notation || 'string' //string | prudy?????
  query.where={}

  //Set up WHERE depending query parameters.
  //germplasmDbId
  if(typeof query.germplasmDbId == "string"){
    query.germplasmDbId=[query.germplasmDbId]

  }else if(typeof query.germplasmDbId == "object"){
    query.germplasmDbId=query.germplasmDbId || ""
  }
  if(query.germplasmDbId){
    query.where.id={'$in':query.germplasmDbId}
  }

  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    //Missing how to deal with rejections of the model. Function for rejection?
    models.getGermPedigree(query).then(function(res){
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
            databaseValues[germplasmDbId]={};
            databaseValues[germplasmDbId]['germplasmDbId']=germplasmDbId;
          }


          //To many foreignKey for now //push scheme
          //Pedigree no push though for this one.
          try{
            //The cross between parent accessions. if foreignkeys exist.
            var mother=dataValues.GermplasmParent.dataValues.GermplasmParent1.dataValues.accessionNumber;
            var father=dataValues.GermplasmParent.dataValues.GermplasmParent2.dataValues.accessionNumber;
            databaseValues[germplasmDbId].parent1Id=dataValues.GermplasmParent.dataValues.parent1Id;
            databaseValues[germplasmDbId].parent2Id=dataValues.GermplasmParent.dataValues.parent2Id;
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
          data.push(databaseValues[germplasm])
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

