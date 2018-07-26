var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs=require('fs');
//var elixirAuth = require('./../components/oauth/elixir-oauth');


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

module.exports = router;
