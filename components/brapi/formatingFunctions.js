/**
 * 
 * Created by Bruno Costa on 12/07/2017.
 * 
 * Formating functions to help structure the output JSON
 *
 * JSON structure 
 * https://github.com/plantbreeding/Documentation/wiki/BrAPI-success-&-error-responses 
 *
 */

/* 
 * Generate the pagination details for the outgoing JSON
 * @args res Object - the query repsonse
 * @args query Object - the query arguments in the http request
 *
 */
function generatePagination(res,query){

	//Run only if res isn't instance of Error.
	var result=null;
	res instanceof Error ? result=null : result={ pageSize: parseInt(query.pageSize) ,
			  currentPage: parseInt(query.page),  //This might produce errors if query var changes after promise resolves. Not sure if this is an issue.
			  totalCount: res.count,
			  totalPages: Math.ceil(res.count/query.pageSize) //This must be calculated another call with the same attributes and no limit to count.
			}		
	return result;
}


/*
 * Generate the outgoing JSON
 * 
 * @args queryData Object - The squelize response Object
 * @args pagination Object - Object with the pagination details Should have 4 keys
 *                           pageSize,currentPage,totalCount, totalPages or the Object should be null 
 * @args code Int - The number of the http status response
 * @args message Object containing the message associated with the error produced or null
 *  
 */

function generateJSON(queryData,pagination,code,message){

	//null message
	var message = message || "OK";
	var result='';
	queryData==null ? result=null : result={data:queryData};
	//Allows extra parameters before data to be set in the call processing
	try{
		queryData.data != null ? result=queryData : result=result
	}catch(err){
		console.log("No queryData");
	}
	//pagination not null and Page requested bigger than total.
	if(pagination != null && pagination.currentPage > pagination.totalPages ){
		message="Bad request: requested page number is greater than the total number of pages";
		code=400;
		result=null;
	}
    //Return the structured JSON 
	return {
		metadata: {
			status: [{
				message:(String (message)),
				code:(String (code)),
			}],
			datafiles: [],
			pagination: pagination,
		  },
		  result:result,
		}
}

module.exports = {
	//name a function to export
    generateJSON: generateJSON,
    generatePagination: generatePagination,
}