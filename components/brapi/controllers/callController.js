/**
 * Created by Bruno Costa on 20-06-2018.
 */

var dateFormat = require('dateformat');
var models= require('./../models');
var fmtFunc= require('./../formatingFunctions');
var fmtRetreivedData= require('./../helpers/formatRetreivedData')

module.exports = function(options,call,callback){

  var options= options || {body:{},params:{},query:{},where:{}};
  var query=options.query
  var attributes={}

  attributes.pageSize = query.pageSize || 1000     //The default in specs is 1000    
  attributes.page = query.page || 0 
  //Set the page to show
  attributes.offset = attributes.page * attributes.pageSize;
  attributes.where = options.where;



  //Runs a model function with options if they exist

  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    models[call](attributes).then(function(res){
    
      if(res instanceof Error){
          //Send the error in the status send rejection to promise
          //Args:queryData,pagination,code,message
          reject( fmtFunc.generateJSON(null,null,400,res.name+" : "+res.message) );
   
      }else{
          //Send res back to get the metadata, uniqueId Attribute and the callStructure
          var callSpecificData=callback(res)
          var data=fmtRetreivedData(callSpecificData,res)
          var pagination=fmtFunc.generatePagination(res,attributes);
          resolve(fmtFunc.generateJSON(data,pagination,200,null));

      }//end else
      //end then
    }).catch(function(err){
      //queryData,pagination,code,message
      console.trace(err)
      reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );

    })

  })
  
}


