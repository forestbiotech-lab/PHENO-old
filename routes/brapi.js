var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs=require('fs');
//var elixirAuth = require('./../components/oauth/elixir-oauth');
var getOptions = require('./../components/brapi/helpers/getOptions');

var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var resolveError=resolveHelper.resolveError
var resolveCall=resolveHelper.resolveCall

var calls = require('./../components/brapi/v1.3/calls');



/* GET home page. */
router.get('/', function(req, res, next) {
  //Promissify function
  function getReadme(){
      return new Promise(
          function(resolve,reject){
          fs.readFile('README.md' , function(err,data){
            if(err) reject(Error(err)); 
            resolve(data.toString());
            })
          }
        )   
    }
    //Get README data and render page.
    getReadme().then(function(data){ 
      res.render('brapi', { title: 'BrAPI - PT node',host: req.headers.host, readme: marked(data) });
    });
});  

/* GET home page. Set it to the list of implemented calls README*/
router.get('/:version', function(req, res, next) {
  let version=req.params.version
  let re=new RegExp("v[0-9]\.{0,1}[0-9]{0,1}$") 
  if ( re.test(version) && version.length < 5 ){
    req.params.version=version.replace("v","")

    //Promissify function
    function getReadme(){
      return new Promise(
        function(resolve,reject){
        fs.readFile('routes/README.md' , function(err,data){
          if(err) reject(Error(err)); 
          resolve(data.toString());
          })
        }
      )   
    }
    //Get README data and render page.
    getReadme().then(function(data){ 
      var options=getOptions(req);
      calls(options).then(function (callsResponse) {
        res.render('brapiV1', { 
          title: `BrAPI version ${version} call list - PT node`, 
          content: `List of calls for version ${version}, these calls can be used to query this endpoint based on the version specification.`, 
          protocol: req.protocol, 
          host: req.headers.host, 
          readme: marked(data), 
          'calls': callsResponse.result.data,
          version 
        });
      }).catch(function (err) {
        resolveError(res,err);
      })
    });
  }else{
    let err={
      message:"Not found",
      error:{status:500}
    }
    res.status( 500);
    res.render('error',err);
  }
});  



module.exports = router;
