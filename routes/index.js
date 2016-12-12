var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs=require('fs');
var elixirAuth = require('./../components/oauth/elixir-oauth');


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
//Remove was for testing
router.post('/login',function(req,res,next){
  res.render('login');
})

//Is this the best method? Method to check if we have key
router.get('/elixir',elixirAuth.authenticate('oauth2'));
//Can some how add additions options for getting specific stuff..... What I still don't know.
router.get('/callback',
  elixirAuth.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res,next) {
//    console.log("user :",user);
//    console.log("info :",info);
    res.render('callback');
  }
);

router.get('/callback1',function(req,res,next){
  console.log(req.query);
  res.send('200');
});

//To manage the client permissions
router.get('/elixirManage',function(req,res,next){
  res.render('/elixir-manage')
})
module.exports = router;
