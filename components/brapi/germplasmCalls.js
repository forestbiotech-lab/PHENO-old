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
        reject( fmtFunc.generateJSON(null,null,400,res) );
 
      }else{
        //If res isn't an error send the appropriate response
        let dataValues=[]
        

        //Export query values to a array and re  
        for(i in res.rows){
          dataValues.push(res.rows[i].dataValues);

          //This can be automated. Get keys from model?

          //Merging Species keys into new array
          for (spKeys in res.rows[i].dataValues.Species.dataValues ){
            dataValues[i][spKeys]=res.rows[i].dataValues.Species.dataValues[spKeys];
          }
          delete dataValues[i]['Species'];

          //Merging GermplasmStorage keys into new array
          for (gsKeys in res.rows[i].dataValues.GermplasmStorage.dataValues ){
            dataValues[i][gsKeys]=res.rows[i].dataValues.GermplasmStorage.dataValues[gsKeys];
          }
          delete dataValues[i]['GermplasmStorage'];

          //Merging Crop keys in new array
          for (cropKeys in dataValues[i].Crop.dataValues ){
            dataValues[i][cropKeys]=dataValues[i].Crop.dataValues[cropKeys];
          }
          delete dataValues[i]['Crop'];

          //Merging Institution keys into new array
          for (instKeys in res.rows[i].dataValues.Institution.dataValues ){
            dataValues[i][instKeys]=res.rows[i].dataValues.Institution.dataValues[instKeys];
          }
          delete dataValues[i]['Institution'];

          //Should add if attributes exist To avoid errors. ! To consider.
          //Parse attributes from db
          //Tricky if 0000-00-00 its a string and I have to do a replace. Else I do a date format.
          date=dataValues[i].acquisitionDate
          typeof date === "string" ? dataValues[i].acquisitionDate=date.replace(/-/g,"") : dataValues[i].acquisitionDate=dateFormat(new Date(date), "yyyymmdd");
          dataValues[i].typeOfGermplasmStorageCode=dataValues[i].typeOfGermplasmStorageCode.split(';')


        }
  
        //Generate pagination details
        var pagination=fmtFunc.generatePagination(res,query);

        //Args:queryData,pagination,code,message
        resolve(fmtFunc.generateJSON(dataValues,pagination,200,null));

      //end else
      }

    //end then
    }).catch(function(err){

      //queryData,pagination,code,message
      reject( fmtFunc.generateJSON(null,null,500,err) );        
    });
        
  })
};

