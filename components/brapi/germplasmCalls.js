/**
 * Created by Bruno Costa on 29-11-2016.
 */

var dateFormat = require('dateformat');
var models= require('./models');





module.exports = function(query,options){
    
  query.pageSize = query.pageSize || 1000         
  query.page = query.page || 0 
  
  //Set the page to show
  query.page > 0 ? query.offset= query.page * query.pageSize : query.offset=0

  var options = options || {};
  //Runs a model function with options if they exist


  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    models.getGermplasm(query).then(function(res){
      //console.log(res[0]);

      //Logic to decide which is sent
      if(res instanceof Error){
        //Send the error in the status send rejection to promise
        reject({
          "metadata": {
            "status": [{code:500,message:res}],
            "datafiles": [],
            "pagination": {
              "pageSize": res.rows.length,
              "currentPage": query.page,  //This might produce errors if query var changes after promise resolves. Not sure if this is an issue.
              "totalCount": res.count,
              "totalPages": 1 //This must be calculated another call with the same attributes and no limit to count.
            }
          },
          "result":{
            "data": null
          }
        });
      }else{
        //If res isn't an error send the appropriate response
        let dataValues=[]
        
        //Export query values to a array and re  
        for(i in res.rows){
          dataValues.push(res.rows[i].dataValues);
    
          //Tricky if 0000-00-00 its a string and I have to do a replace. Else I do a date format.
          date=dataValues[i].acquisitionDate
          typeof date === "string" ? dataValues[i].acquisitionDate=date.replace(/-/g,"") : dataValues[i].acquisitionDate=dateFormat(new Date(date), "yyyymmdd");
    
        }
        resolve({
          "metadata": {
            "status": [{code:200,message:{}}],
            "datafiles": [],
            "pagination": {
              "pageSize": res.rows.length,
              "currentPage": query.page,  //This might produce errors if query var changes after promise resolves. Not sure if this is an issue.
              "totalCount": res.count,
              "totalPages": Math.ceil(res.count/query.pageSize) //This must be calculated another call with the same attributes and no limit to count.
            }
          },
          "result":{
            "data": dataValues
          }
        });

      //end else
      }

    //end then
    }).catch(function(err){
      reject({
          "metadata": {
            "status": [{code:500,message:err}],  //Some other status?
            "pagination": {
              "pageSize": err.length,
              "currentPage": query.page,  //This might produce errors if query var changes after promise resolves. Not sure if this is an issue.
              "totalCount": err.length,
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

