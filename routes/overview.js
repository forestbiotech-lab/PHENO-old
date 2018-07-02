var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs=require('fs');
var programsForSpecies=require('./../components/brapi/listOfProgramsForSpecies')
//var elixirAuth = require('./../components/oauth/elixir-oauth');


/* GET home page. */
router.get('/', function(req, res, next) {
  //Promissify function


	function getReadme(){
  	return new Promise(
  	  function(resolve,reject){
  			fs.readFile('components/brapi/overview.md' , function(err,data){
	  			if(err) reject(Error(err)); 
	    		resolve(data.toString());
        })
      }
   	)		
  }

  
  //Get README data and render page.
  getReadme().then(function(data){ 
    programsForSpecies().then(function(response){
      res.render('brapiOverview', { 
        title: 'PHENO the BrAPI PT node endpoint',
        host: req.headers.host, 
        overviewMD: marked(data),
        species:response.result.data 
      });
      console.log(response.result.data)
      console.log(response.result.data[1].listPrograms)
    }).catch(function(err){
      console.log(err);
      res.render('brapiOverview', { 
        title: 'PHENO the BrAPI PT node endpoint',
        host: req.headers.host, 
        overviewMD: marked(data),
        crops:crops 
      });
    })
  });
});  

module.exports = router;
