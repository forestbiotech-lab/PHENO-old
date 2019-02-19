/**
 * Created by João M. F. Cardoso on 11/07/2017.
 * Modified by Bruno Costa on 12/07/2017
 */

/* Imports */
var models = require('./models');
var fmtFunc= require('./helpers/formatingFunctions')

/* Methods connecting to the database */
module.exports = function (query) {
    /* Page definitions */
    query.pageSize = query.pageSize || 1000;    //The default in specs is 1000
    query.page = query.page || 0; // Default is 0
    query.offset= query.page * query.pageSize;

    /* Calls a function from the model to fetch data from the database */
    return new Promise(function(resolve,reject){
        models.getCrops(query).then(function (res) {

            /* Error response */
            if (!(res instanceof Error)) {

                /* Create the response according to the API */
                var databaseValues = [];
                /* The variable where the database values will be stored */

                /* Filling the database values */
                for (valueKey in res.rows) {
                    databaseValues.push(res.rows[valueKey].dataValues.commonCropName)
                }
                        //Generate pagination details
                var pagination=fmtFunc.generatePagination(res,query);

                //Args:queryData,pagination,code,message
                resolve(fmtFunc.generateJSON(databaseValues,pagination,200,null));
                
            } else {
                //Send the error in the status send rejection to promise
                //Args:queryData,pagination,code,message
                reject( fmtFunc.generateJSON(null,null,400,res.name+" : "+res.message) );
                
            }
        }).catch(function(err){
           
          //queryData,pagination,code,message
          reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );        

        });

    })
};