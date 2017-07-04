var express = require('express');
var router = express.Router();

////------------Soon to be removed ----------------------------------------
var germplasmCalls = require('./../components/brapi/germplasmCalls');
//-------------------End soon to be removed -------------------------------


// germplasm-search
router.get('/germplasm-search', function(req, res, next){
  var query=req.query;
  germplasmCalls(query).then(function(germplasmRes){

    res.status(200).json(germplasmRes);

  }).catch(function(err){

    res.status(parseInt(err.metadata.status[0].code || 501 )).json(err);

  })
  
});

//The studies Call
router.get('/studies/:studyDbID', function(req, res, next) {
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




//The seasons call
router.get('/seasons', function(req, res, next){
  var options={
    //Query not params
    year: req.params.year || null ,
    pageSize: req.params.pageSize || null,
    page: req.params.page || null
  }
  study('seasons',options).then(function(GeneralMetadata){
    console.log(GeneralMetadata);
    res.status(200).send("Hello stranger");
  })

});

module.exports = router;