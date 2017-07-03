/**
 * Created by Bruno Costa on 29-11-2016.
 */

var models= require('./models');





module.exports = function(query,options){
    
  query.pageSize = query.pageSize || 1000         
  query.page = query.page || 0 
  
  //Set the page to show
  if (query.page > 0) 
    query.offset= query.page * query.pageSize

  console.log(query)
  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    models.getGermplasm(options).then(function(res){

      //Logic to decide which is sent

      resolve({
        "metadata": {
          "status": 200,
          "datafiles": [],
          "pagination": {
            "pageSize": res.length,
            "currentPage": 1,
            "totalCount": res.length,
            "totalPages": 1
          }
        },
        "result":{
          "data":res[0].dataValues
        }
      });
      //TODO
      reject({});

    });        
  })
};

