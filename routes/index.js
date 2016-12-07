var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs=require('fs');


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
  		res.render('index', { title: 'BrAPI - PT node',host: req.headers.host, readme: marked(data) });
    });
});  
router.get('/login',function(req,res,next){
  res.render('login');
});

module.exports = router;
