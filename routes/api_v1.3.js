var express = require('express');
var router = express.Router();

var marked = require('marked');
var fs=require('fs');
var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var resolveCall=resolveHelper.resolveCall
var getOptions = require('./../components/brapi/helpers/getOptions');

////------------ Call Declaration Galore ----------------------------------
var Samples_SamplesDbId_GET = require('./../components/brapi/v1.3/Samples_SampleDbId_GET');

//var phenotypesSearchV1_3 = require('./../components/brapi/v1.3/phenotypesSearch')
//------------------- End  -------------------------------


//phenotypes-search
router.get('/samples/:sampleDbId', function(req, res, next){
  var errMsg="Router Samples_SamplesDbId Get - "
  var call=Samples_SamplesDbId_GET;
  resolveCall(call,req,res,errMsg);
})




module.exports = router;