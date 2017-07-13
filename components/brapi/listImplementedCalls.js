/**
 * Created by João M. F. Cardoso on 11/07/2017.
 * Modified by Bruno Costa on 12/07/2017.
 * 
 * This is responsible for sending the query attributes to the model 
 * Adjust the response and send the appropriate response.
 *
 * JSON structure 
 * https://github.com/plantbreeding/Documentation/wiki/BrAPI-success-&-error-responses 
 *
 */

var models= require('./models');
var fmtFunc= require('./formatingFunctions')



module.exports = function(query){
	
  query.page = query.page || 0 
  query.pageSize = query.pageSize || 1000     //The default in specs is 1000    
  
  //Set the page to show
  query.offset= query.page * query.pageSize;
  query.dataType=query.dataType || ""

    

  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

	//Run promise based function and deal with result
	models.getImplementedCalls(query).then(function(res){

	  //Logic to decide which is JSON is sent
	  if(res instanceof Error){ //Send the error in the status send rejection to promise

	  	//Args:queryData,pagination,code,message
		reject( fmtFunc.generateJSON(null,null,400,res.name+" : "+res.message) );

	  }else{
		//If res isn't an error send the appropriate response

		
		//Merge similar calls
		var databaseValues={}
		for(valueKey in res.rows){
		  try{

		  	if(databaseValues[res.rows[valueKey].dataValues.callName].dataTypes.indexOf(res.rows[valueKey].DataTypes_table.dataValues.dataType) == -1 ){
		  		databaseValues[res.rows[valueKey].dataValues.callName].dataTypes.push(res.rows[valueKey].DataTypes_table.dataValues.dataType);		
			}  
			//Check if value exists if not add it.
		  	if(databaseValues[res.rows[valueKey].dataValues.callName].methods.indexOf(res.rows[valueKey].Method.dataValues.method) == -1 ){
		  		databaseValues[res.rows[valueKey].dataValues.callName].methods.push(res.rows[valueKey].Method.dataValues.method);		
		  	}
		  }
		  catch(err){
		  	//If call hasn't been add create it
		  	databaseValues[res.rows[valueKey].dataValues.callName]={call:res.rows[valueKey].dataValues.callName,dataTypes:[],methods:[]};						
		  	databaseValues[res.rows[valueKey].dataValues.callName].dataTypes.push(res.rows[valueKey].DataTypes_table.dataValues.dataType);		
		  	databaseValues[res.rows[valueKey].dataValues.callName].methods.push(res.rows[valueKey].Method.dataValues.method);		
		  }

		}
		//Get sub-level and place it inside an array
		var data=[];
		for(call in databaseValues){
			data.push(databaseValues[call])
		}

		//Generate pagination details
		var pagination=fmtFunc.generatePagination(res,query);

		//Args:queryData,pagination,code,message
		resolve(fmtFunc.generateJSON(data,pagination,200,null));
 
	  //end else
	  }

	//end then
	}).catch(function(err){ ///In this case there was an internal server error
	  
	  //queryData,pagination,code,message
	  reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );        

	})
  });	
};