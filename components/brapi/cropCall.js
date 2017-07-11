/**
 * Created by João M. F. Cardoso on 11/07/2017.
 */

/* Imports */
var models = require('./models');

/* Methods connecting to the database */
module.exports = function (query) {

    /* Page definitions */
    query.pageSize = query.pageSize || 1000;    //The default in specs is 1000
    query.page = query.page || 0; // Default is 0
    query.offset= query.page * query.pageSize;
    console.log(query);

    /* Calls a function from the model to fetch data from the database */
    return new Promise(function(resolve,reject){
        models.getCrops(query).then(function (response) {

            /* Error response */
            if (!(response instanceof Error)) {
                /* Create the response according to the API */
                var databaseValues = [];
                /* The variable where the database values will be stored */

                /* Filling the database values */
                for (valueKey in response.rows) {
                    databaseValues.push(response.rows[valueKey].dataValues.commonCropName)
                }

                //Send fulfilled promise
                resolve({
                    "metadata": {
                        "status": [{code: 500, message: response}],
                        "datafiles": [],
                        "pagination": {
                            "pageSize": response.rows.length,
                            "currentPage": query.page,  //This might produce errors if query var changes after promise resolves. Not sure if this is an issue.
                            "totalCount": response.count,
                            "totalPages": Math.ceil(response.count / query.pageSize) /* Calculates the number of pages */
                        }
                    },
                    "result": {
                        "data": databaseValues
                    }
                })
            } else {
                //Send the error in the status send rejection to promise
                reject({
                    "metadata": {
                        "status": [{code: 500, message: response}],
                        "datafiles": [],
                        "pagination": {
                            "pageSize": response.rows.length,
                            "currentPage": query.page,  //This might produce errors if query var changes after promise resolves. Not sure if this is an issue.
                            "totalCount": response.count,
                            "totalPages": 1 //This must be calculated another call with the same attributes and no limit to count.
                        }
                    },
                    "result": {
                        "data": null
                    }
                });
            }
        }).catch(function(err){
            reject({
                "metadata": {
                    "status": [{code:500,"message":err}],  //Some other status?
                    "pagination": {
                        "pageSize": err,//.length,
                        "currentPage": query.page,  //This might produce errors if query var changes after promise resolves. Not sure if this is an issue.
                        "totalCount": err,//.length,
                        "totalPages": 1 //This must be calculated another call with the same attributes and no limit to count.
                    }
                },
                "result":{
                    "data": null
                }
            })
        });

    })
};