var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var authenticate = require('./../components/oauth/authenticate');
var authorize = require('./../components/oauth/authorize');
var token = require('./../components/oauth/token');
var study = require('./../components/studies/studyDetails');



//Token
router.post('/token',token(), function(req,res,next){
  res.send("Your in");
})
//Get auth code
router.get('/authorize', authorize(), function(req,res,next){ 
  res.send('Hello world');
  
});

//Testing only
router.get('/', function(req, res, next) {
  res.send('HELLO WORLD');
  req.redirect("/kkk");
});
//
router.get('/brapi', function(req, res, next) {
  res.send('HELLO WORLD');
});

router.get('/studies/:studyDbID', authenticate(), function(req, res, next) {
    var studyID=req.params.studyDbID;
    study('investigation',studyID).then(function(Investigation){
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
router.get('/seasons', authenticate(), function(req, res, next){
  var options={
    year: req.params.year || null ,
    pageSize: req.params.pageSize || null,
    page: req.params.page || null
  }
  study('seasons',options).then(function(GeneralMetadata){
    console.log(GeneralMetadata);
    res.status(200).send("Hello stranger");
  })

});
router.get('/authentication', authenticate(), function(req, res, next) {

    res.sendStatus(200);
});



//Testing investigation
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



