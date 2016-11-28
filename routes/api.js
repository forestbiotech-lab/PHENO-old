var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var authenticate = require('./../components/oauth/authenticate')
var authorize = require('./../components/oauth/authorize')




router.get('/refresh', authorize(), function(req,res,next){ 
  res.send('Hello world');
  
});

router.get('/', function(req, res, next) {
  res.send('HELLO WORLD');
  req.redirect("/kkk");
});

/* GET study listing. */
router.get('/brapi', function(req, res, next) {
  res.send('HELLO WORLD');
});
router.get('/investigation/all', function(req, res, next) {
  req.getConnection(function(err,connection){
  	if(err) return next(err);
  	connection.query('SELECT * FROM Investigation',
  	[],function(err,result){
      if(err) return res.status(400).json(err);
      console.log(result.length);
      return res.status(200).json(result);
  	});
  });
});
preOutput=function(sqlRes){
	//Must set results per page
	//Set up limit on query
	var pagination=sqlRes.length;
	if(pagination==0) pagination=null;
	var output={};
    output.metadata={};
    output.metadata.pagination=pagination;
    output.metadata.status=200;
    output.metadata.datafiles=sqlRes;
    return output;
};
router.get('/investigation/:investigationID', function(req, res, next) {
  req.getConnection(function(err,connection){
  	if(err) return next(err);
  	//This this method safe enough? More sanitation? 
  	var investigationID=req.params.investigationID
  	console.log(investigationID);
  	connection.query('SELECT * FROM Investigation where InvestigationID=?',
  	[investigationID],function(err,result){
      if(err) return res.status(400).json(err);
      console.log(preOutput(result));
      return res.status(200).json(preOutput(result));
  	});
  });
});
router.get('/authentication', authenticate(), function(req, res, next) {

  	res.sendStatus(200);
});


//Others
router.get('/*', function(req, res, next) {
  console.log("In route api.");
  res.sendStatus(501);
});
module.exports = router;

//Database acess



