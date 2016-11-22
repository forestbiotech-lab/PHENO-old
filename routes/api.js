var express = require('express');
var router = express.Router();
//var sanitizer = require('sanitizer');
//var erValidator = require('express-request-validator');

router.get('/', function(req, res, next) {
  res.send('HELLO WORLD');
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
  //res.json('{  "name": "brapi",  "version": "0.0.0",  "private": true,  "scripts": {    "start": "node ./bin/www"  },  "dependencies": {    "body-parser": "~1.15.2",    "cookie-parser": "~1.4.3",    "debug": "~2.2.0",    "express": "~4.14.0",    "jade": "~1.11.0",    "jstransformer": "^1.0.0",    "morgan": "~1.7.0",    "pug": "^2.0.0-beta6",    "serve-favicon": "~2.3.0"  }}');
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
  //res.json('{  "name": "brapi",  "version": "0.0.0",  "private": true,  "scripts": {    "start": "node ./bin/www"  },  "dependencies": {    "body-parser": "~1.15.2",    "cookie-parser": "~1.4.3",    "debug": "~2.2.0",    "express": "~4.14.0",    "jade": "~1.11.0",    "jstransformer": "^1.0.0",    "morgan": "~1.7.0",    "pug": "^2.0.0-beta6",    "serve-favicon": "~2.3.0"  }}');
});
router.get('/authentication', function(req, res, next) {
   	//This this method safe enough? More sanitation? 
  	res.sendStatus(501);
});


//Others
router.get('/*', function(req, res, next) {
  console.log("In route api.");
  res.sendStatus(501);
});
module.exports = router;

//Database acess



