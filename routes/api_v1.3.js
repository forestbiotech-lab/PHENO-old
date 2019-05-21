var express = require('express');
var router = express.Router();
var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var resolveCall=resolveHelper.resolveCall

////------------ Call Declaration Galore ----------------------------------
var Samples_SamplesDbId_GET = require('./../components/brapi/v1.3/Samples_SampleDbId_GET');
var germplasm = require('./../components/brapi/v1.3/germplasm_GET');
var studies = require('./../components/brapi/v1.3/studies_GET');
var trials = require('./../components/brapi/v1.3/trials_GET');
var observationunits = require('./../components/brapi/v1.3/observationunits_GET');
//var phenotypesSearchV1_3 = require('./../components/brapi/v1.3/phenotypesSearch')
//------------------- End  -------------------------------


//phenotypes-search
router.get('/samples/:sampleDbId', function(req, res, next){
  var errMsg="Router Samples_SamplesDbId Get - "
  var call=Samples_SamplesDbId_GET;
  resolveCall(call,req,res,errMsg);
})

router.get('/germplasm',function(req,res,next){
  var errMsg="Router germplasm Get - "
  var call=germplasm
  resolveCall(call,req,res,errMsg);
})

router.get('/studies',function(req,res,next){
  var errMsg="Router studies Get - "
  var call=studies
  resolveCall(call,req,res,errMsg);
})

router.get('/trials',function(req,res,next){
  var errMsg="Router trials Get - "
  var call=trials
  resolveCall(call,req,res,errMsg);
})

router.get('/observationunits',function(req,res,next){
  var errMsg="Router observationunits Get - "
  var call=observationunits
  resolveCall(call,req,res,errMsg);
})


module.exports = router;