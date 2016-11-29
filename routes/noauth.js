var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var study = require('./../components/studies/studyDetails');


router.get('/', function(req, res, next) {
  res.send('HELLO WORLD');
  req.redirect("/noavailable");
});
router.get('/studies/:studyDbID', function(req, res, next) {
    var studyID=req.params.studyDbID;
    study(studyID).then(function(Investigation){
      //The send isn't sending the error but status is ok.
      Investigation instanceof Error ? 
      res.status(400).send(Investigation) : 
      res.status(200).json(Investigation);
    })
    .catch(function(err){
      console.log("getInvestigation - Err model not implemented: ");
      res.status(err.status || 500);
      res.render('error');
    });
      
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

//Old method Can be removed
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

//Others
router.get('/*', function(req, res, next) {
  console.log("In route api.");
  res.sendStatus(501);
});
module.exports = router;



