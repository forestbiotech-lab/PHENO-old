var express = require('express');
var router = express.Router();
var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var showDataset = require('./../components/brapi/datasets/global')

var resolveCall=resolveHelper.resolveCall


router.get('/:datasetId',function(req,res,next){
  var errMsg="Router show dataset Get - "
  var call=showDataset;
  resolveCall(call,req,res,errMsg,'showDataset');
})





module.exports = router;