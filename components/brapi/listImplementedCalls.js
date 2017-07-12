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
		reject( fmtFunc.generateJSON(null,null,400,res) );

	  }else{
		//If res isn't an error send the appropriate response

		//Adjust output JSON
		var databaseValues=[]
		
		//Export query values to a array and re  
		for(valueKey in res.rows){
		  databaseValues.push(res.rows[valueKey].dataValues);
		
		  for(method in res.rows[valueKey].Method.dataValues){
			databaseValues[valueKey].methods=res.rows[valueKey].Method.dataValues	
		  }
		  delete databaseValues[valueKey].Method

		}

		//Generate pagination details
		var pagination=fmtFunc.generatePagination(res,query);

		//Args:queryData,pagination,code,message
		resolve(fmtFunc.generateJSON(databaseValues,pagination,200,null));
 
	  //end else
	  }

	//end then
	}).catch(function(err){ ///In this case there was an internal server error
	  console.log(err)
	  //queryData,pagination,code,message
	  reject( fmtFunc.generateJSON(null,null,500,err) );        

	})
  });	
};

