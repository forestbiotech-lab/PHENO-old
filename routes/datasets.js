var express = require('express');
var router = express.Router();
var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var showDataset = require('./../components/brapi/datasets/global')
var germplasm = require('./../components/brapi/datasets/germplasm')
var study = require('./../components/brapi/datasets/study')

var resolveCall=resolveHelper.resolveCall

const map=require("svg-world-map")
const toHTML=require('vdom-to-html')


router.get('/germplasm/:germplasmId',function(req,res,next){
  var errMsg="Router dataset Get germplsm - "
  var call=germplasm;
  formatResponse=function(response){
    location=response.result.data[0].holdingInstitution.coordinates[0]
    myMap=map(location.longitude,location.latitude)
    svg=toHTML(myMap)
 	return {
      	title: "PHENO - Germplasm info",
      	host: req.headers.host,
      	germplasmData:response.result.data[0],
      	map:svg
    }
  }
  resolveCall(call,req,res,errMsg,"germplasm",formatResponse)
})

router.get('/study/:studyId',function(req,res,next){
  var errMsg="Router dataset Get germplsm - "
  var call=study;
  formatResponse=function(response){
  	console.log(response.result.data[0])
 	return {
      	title: "PHENO - Study info",
      	host: req.headers.host,
      	studyData:response.result.data[0],
    }
  }	
  resolveCall(call,req,res,errMsg,"study",formatResponse)
})


/////Change this route  
router.get('/global/:datasetId',function(req,res,next){
  var errMsg="Router show dataset Get - "
  var call=showDataset;
  resolveCall(call,req,res,errMsg,'showDataset');
})





module.exports = router;