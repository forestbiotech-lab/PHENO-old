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
var observationtables_GET = require('./../components/brapi/v1.3/observationtables_GET')
var observationtables_POST = require('./../components/brapi/v1.3/observationtables_POST')
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

router.post('/search/observationtables',function(req,res){
  console.log(req.body)
  var errMsg="Router search/observationtables POST - "
  var call=observationtables_POST
  resolveCall(call,req,res,errMsg);
})

router.get('/search/observationtables/:searchResultsDbId', function(req, res){
  var errMsg="Router search/observationtables Get - " 
  var call=observationtables
  call(req).then(function(data){
    let refactoredResult=[]
    let result = data.result.data
    result.forEach(function(data){
      let temp={
        "headers": Object.keys(data),
        "data":[],
        "observationVariableDbIds":[],
        "observationVariableNames":[]
      }
      temp.headers.pop()
      temp.data=Object.keys(data).map(function(key){
        if(typeof data[key]!='object') return data[key]
      })
      temp.data.pop()
      data.observations.forEach(function(obs){
        temp.observationVariableDbIds.push(obs.observationVariableDbId)
        temp.observationVariableNames.push(obs.observationVariableName)
        temp.data.push(obs.value)
      })
      refactoredResult.push(temp)
    })
    tsv=refactoredResult[0].headers.reduce(function(res,header){return res+"  "+header})+"  "+refactoredResult[0].observationVariableDbIds.reduce(function(acum,id){return acum+" "+id})+"<br>"
    refactoredResult.forEach(function(row){
      tsv+=row.data.reduce(function(res,header){return res+"  "+header})+"<br>"
    })
    res.send(tsv)
  }).catch(function(err){
    res.json(err)
  })
})


module.exports = router;