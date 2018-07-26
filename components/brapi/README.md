## Controller / View

This directory interfaces between the Database model and the Router.

Here is where the model functions are called and then the result is adjusted for the router to return to the browser.

It relies on auxiliary functions formatingFunctions which generate the pagination details and the outgoing JSON format.

###### To call a model
	var models= require('./models');

	models.[ModelFunction](query).then(function(result){
		return [JSON]
		}).catch(function(error){
			return [ErrorJSON]
		})

Note: If you are transforming the model result it should be promisified.

##### To adjust the model result

	return new Promise(function(resolve,reject){

		//Run promise based function and deal with result
		models.[modelFunction](query).then(function(res){

			//Do something with res

			if([condition]){
				//Resolve promise
				resolve([JSON])
			}
			else{
				//Reject promise
				reject([JSON])
			}
		}
	});

#### Auxiliary function

###### Generate the outgoing JSON

queryData Object 
- The squelize response Object

pagination Object 
- Object with the pagination details Should have 4 keys pageSize,currentPage,totalCount, totalPages or the Object should be null 

code Int 
- The number of the http status response message Object containing the message associated with the error produced or null

message Object
- An objecto with the error details 
 
###### Generate the pagination details for the outgoing JSON
res Object 
- the query response

query Object 
- The query arguments in the http request

Usage:
	var fmtFunc=require('./formatingFunctions');

	var pagination=fmtFunc.generatePagination(res,query);
	generateJSON(databaseValues,pagination,200,null)

Unit tests
https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/