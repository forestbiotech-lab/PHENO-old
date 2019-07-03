var express = require('express');
var router = express.Router();



var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var resolveCall=resolveHelper.resolveCall
var resolveError=resolveHelper.resolveError


////------------ Call Declaration Galore ----------------------------------
var cropCall = require('./../components/brapi/cropCall');
var germplasmPedigree = require('./../components/brapi/getGermplasmPedigree');
var phenotypesCall = require('./../components/brapi/phenotypesCall');
var studiesSearchCall = require('./../components/brapi/studiesSearchCall');
var programsCall = require('./../components/brapi/programsCall');
var listOfTrailSummaries = require('./../components/brapi/listOfTrailSummaries');
var locationDetails = require('./../components/brapi/locationDetails');
var listAllTraits = require('./../components/brapi/listAllTraits');
var phenotypesSearchV1_3 = require('./../components/brapi/v1.3/phenotypesSearch')
//------------------- End  -------------------------------


//Test iterating through this  NOT IMPLEMENTED YET
//getCalls=[{
//uri:"/germplasm-search",
//makeCall: germplasmCalls,
//}]





//germplasm-search
//router.get('/germplasm-search', function(req, res, next){
//  germplasmCalls(req.query).then(function(germplasmRes){
//    res.status(200).json(germplasmRes);
//  }).catch(function(err){
//    console.log("This call with error!")  
//    resolveError(res,err);
//  })
//});


//GermplasmPedigree
router.get('/germplasm/:id/pedigree',function(req,res,next){
  var query=req.query;
  query.germplasmDbId=req.params.id
  germplasmPedigree(query).then(function(germPedigreeRes){
    res.status(200).json(germPedigreeRes);
  }).catch(function(err){
    resolveError(res,err);
  })
});


/* List supported crops */
/* João Cardoso - 11/07/2017 */
router.get('/crops', function(request, response, next){
  cropCall(request.query).then(function (cropResponse) {
    response.status(200).json(cropResponse);

  }).catch(function (error) {
    resolveError(res,err);
  })

});


//germplasm-search POST
//router.post('/germplasm-search', function(req, res, next){
//  germplasmCalls(req.body).then(function(germplasmRes){
//    res.status(200).json(germplasmRes);
//  }).catch(function(err){
//    resolveError(res,err);
//  })
//});


//phenotypes-search POST
//router.post('/phenotypes-search', function(req, res, next){
//  germplasmCalls(req.body).then(function(phenotypesRes){
//    res.status(200).json(phenotypesRes);
//  }).catch(function(err){
//    resolveError(res,err);
//  })
//});

//study-search
router.get('/studies-search',function(req,res,next){
  var query=req.query;
  studiesSearchCall(query).then(function(studiesSearchCallRes){
    res.status(200).json(studiesSearchCallRes);
  }).catch(function(err){
      resolveError(res,err);
  })
});

//study-search
router.post('/studies-search',function(req,res,next){
  var query=req.body;
  studiesSearchCall(query).then(function(studiesSearchCallRes){
    res.status(200).json(studiesSearchCallRes);
  }).catch(function(err){  
    resolveError(res,err);
  })
});

//list programs
router.get('/programs', function(req, res, next){
  var query=req.query;
  programsCall(req.query).then(function(programsCallRes){
    res.status(200).json(programsCallRes);
  }).catch(function(err){
    
    resolveError(res,err);
  })
});

//list programs
router.post('/programs-search', function(req, res, next){
  var query=req.body;
  programsCall(req.query).then(function(programsCallRes){
    res.status(200).json(programsCallRes);
  }).catch(function(err){

    resolveError(res,err);
  })
});

//listOfTrailSummaries
router.get('/trials',function(req,res,next){
  var errMsg="Router listOfTrailSummaries Get - "
  var call=listOfTrailSummaries
  resolveCall(call,req,res,errMsg);
})


//locationDetails
router.get('/locations/:locationDbId', function(req, res, next){
  var errMsg="Router locationDetails Get - "
  var call=locationDetails
  resolveCall(call,req,res,errMsg);
})

//locationDetails
router.get('/traits', function(req, res, next){
  var errMsg="Router listAlltraits Get - "
  var call=listAllTraits
  resolveCall(call,req,res,errMsg);
})

//phenotypes-search
router.get('/phenotypes-search', function(req, res, next){
  var errMsg="Router phenotypes-search Get - "
  var call=phenotypesSearchV1_3
  resolveCall(call,req,res,errMsg);
})




module.exports = router;