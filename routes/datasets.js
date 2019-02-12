var express = require('express');
var router = express.Router();
var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var showDataset = require('./../components/brapi/datasets/global')
var germplasm = require('./../components/brapi/datasets/germplasm')

var resolveCall=resolveHelper.resolveCall

const map=require("svg-world-map")
const toHTML=require('vdom-to-html')


router.get('/germplasm/:germplasmId',function(req,res,next){
  var errMsg="Router show dataset Get - "
  var call=germplasm;

  germplasm(req).then(function(response){
    console.log(response.result.data[0])
    location=response.result.data[0].holdingInstitution.coordinates[0]
    myMap=map(location.longitude,location.latitude)
    svg=toHTML(myMap)
 	
    res.render('germplasm',{
      title: "PHENO - Germplasm info",
      host: req.headers.host,
      germplasmData:response.result.data[0],
      map:svg
    })
  })

  //resolveCall(call,req,res,errMsg,'germplasm');	
})

/////Change this route  
router.get('/global/:datasetId',function(req,res,next){
  var errMsg="Router show dataset Get - "
  var call=showDataset;
  resolveCall(call,req,res,errMsg,'showDataset');
})





module.exports = router;