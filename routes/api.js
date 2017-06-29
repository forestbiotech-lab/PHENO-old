var express = require('express');
var router = express.Router();

////------------Soon to be removed ----------------------------------------
var study = require('./../components/studies/studyDetails');
var germplasmCalls = require('./../components/studies/germplasmCalls');
//-------------------End soon to be removed -------------------------------


// germplasm-search
router.get('/germplasm-search', function(req, res, next){
  var germplasmAtt=req.query;
    germplasmCalls(germplasmAtt).then(function(germplasmRes){
      //The send isn't sending the error but status is ok.
      console.log(germplasmRes);
      germplasmRes instanceof Error ? 
      res.status(400).send("Error") : 
      res.status(200).json({
        "metadata": {
            "status": 200,
            "datafiles": [],
            "pagination": {
                "pageSize": germplasmRes.length,
                "currentPage": 1,
                "totalCount": germplasmRes.length,
                "totalPages": 1
            }
        },
        "result":{"data":germplasmRes}});
        })
/*    .catch(function(err){
      console.log("germplasm-search - Err model not implemented: ");
      res.status(err.status || 500);
      res.render(err);
    })*/;
})

//The studies Call
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