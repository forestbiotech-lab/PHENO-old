var express = require('express');
var router = express.Router();

var marked = require('marked');
var fs=require('fs');
var getOptions=require('./../components/brapi/helpers/getOptions');

////------------ Call Declaration Galore ----------------------------------
var germplasmCalls = require('./../components/brapi/germplasmCalls');
var cropCall = require('./../components/brapi/cropCall');
var listImplementedCalls = require('./../components/brapi/listImplementedCalls');
var germplasmPedigree = require('./../components/brapi/getGermplasmPedigree');
var phenotypesCall = require('./../components/brapi/phenotypesCall');
var studyGermplsmDetailsCall = require('./../components/brapi/studyGermplsmDetailsCall');
var studiesSearchCall = require('./../components/brapi/studiesSearchCall');
var studyDetailsCall = require('./../components/brapi/studyDetailsCall');
var programsCall = require('./../components/brapi/programsCall');
var observationVariablesCall = require('./../components/brapi/observationVariablesCall');
var listOfTrailSummaries = require('./../components/brapi/listOfTrailSummaries');
var locationDetails = require('./../components/brapi/locationDetails');
//------------------- End  -------------------------------


//Test iterating through this  NOT IMPLEMENTED YET
getCalls=[{
uri:"/germplasm-search",
makeCall: germplasmCalls,
}]


/* GET home page. Set it to the list of implemented calls README*/
router.get('/', function(req, res, next) {
  //Promissify function
  function getReadme(){
      return new Promise(
          function(resolve,reject){
          fs.readFile('routes/README.md' , function(err,data){
            if(err) reject(Error(err)); 
            resolve(data.toString());
            })
          }
        )   
    }
    //Get README data and render page.
    getReadme().then(function(data){ 
      listImplementedCalls(req.query).then(function (callsResponse) {
        res.render('brapiV1', { title: 'BrAPI - PT node',host: req.headers.host, readme: marked(data), 'calls':callsResponse.result.data });
      }).catch(function (err) {
        resolveError(err);
      })
    });
});  


//germplasm-search
router.get('/germplasm-search', function(req, res, next){
  germplasmCalls(req.query).then(function(germplasmRes){
    res.status(200).json(germplasmRes);
  }).catch(function(err){
        resolveError(err);
  })
});

//germplasm
router.get('/germplasm/:id', function(req, res, next){
  var query=req.query;
  query.germplasmDbId=req.params.id;
  germplasmCalls(query).then(function(germplasmRes){
    res.status(200).json(germplasmRes);
  }).catch(function(err){
        resolveError(err);
  })
});

//GermplasmPedigree
router.get('/germplasm/:id/pedigree',function(req,res,next){
  var query=req.query;
  query.germplasmDbId=req.params.id
  germplasmPedigree(query).then(function(germPedigreeRes){
    res.status(200).json(germPedigreeRes);
  }).catch(function(err){
        resolveError(err);
  })
});


/* List supported crops */
/* João Cardoso - 11/07/2017 */
router.get('/crops', function(request, response, next){
  cropCall(request.query).then(function (cropResponse) {
    response.status(200).json(cropResponse);

  }).catch(function (error) {
        resolveError(err);
  })

});


//germplasm-search POST
router.post('/germplasm-search', function(req, res, next){
  germplasmCalls(req.body).then(function(germplasmRes){
    res.status(200).json(germplasmRes);
  }).catch(function(err){
        resolveError(err);
  })
});


//phenotypes-search POST
router.post('/phenotypes-search', function(req, res, next){
  germplasmCalls(req.body).then(function(phenotypesRes){
    res.status(200).json(phenotypesRes);
  }).catch(function(err){
    
    resolveError(err);
  })
});


/*  João Cardoso  - 11/07/2017 
 *  List implemented calls 
*/
router.get('/calls', function (req, res, next){
    listImplementedCalls(req.query).then(function (callsResponse) {
      res.status(200).json(callsResponse);
    }).catch(function (err) {
        resolveError(err);
    })
});


//study-search
router.get('/studies-search',function(req,res,next){
  var query=req.query;
  studiesSearchCall(query).then(function(studiesSearchCallRes){
    res.status(200).json(studiesSearchCallRes);
  }).catch(function(err){
      resolveError(err);
  })
});

//study-search
router.post('/studies-search',function(req,res,next){
  var query=req.body;
  studiesSearchCall(query).then(function(studiesSearchCallRes){
    res.status(200).json(studiesSearchCallRes);
  }).catch(function(err){  
    resolveError(err);
  })
});

//studyDetails
router.get('/studies/:studyDbId', function(req, res, next){
  var query=req.query;
  query.studyDbId=req.params.studyDbId
  studyDetailsCall(req.query).then(function(studyDetailsCallRes){
    res.status(200).json(studyDetailsCallRes);
  }).catch(function(err){
    resolveError(err);
  })
});


//studyGermplasmDetails
router.get('/studies/:studyDbId/germplasm', function(req, res, next){
  var query=req.query;
  query.studyDbId=req.params.studyDbId
  studyGermplsmDetailsCall(req.query).then(function(studyGermplasmDetailsCallRes){
    res.status(200).json(studyGermplasmDetailsCallRes);
  }).catch(function(err){

    resolveError(err);
  })
});

//list programs
router.get('/programs', function(req, res, next){
  var query=req.query;
  programsCall(req.query).then(function(programsCallRes){
    res.status(200).json(programsCallRes);
  }).catch(function(err){
    
    resolveError(err);
  })
});

//list programs
router.post('/programs-search', function(req, res, next){
  var query=req.body;
  programsCall(req.query).then(function(programsCallRes){
    res.status(200).json(programsCallRes);
  }).catch(function(err){

    resolveError(err);
  })
});

//listOfTrailSummaries
router.get('/trials',function(req,res,next){
  var errMsg="Router listOfTrailSummaries Get - "
  var call=listOfTrailSummaries
  console.log("llklk")
  resolveCall(call,req,res,errMsg);
})

//ObservationVariablesCall
router.get('/studies/:studyDbId/observationVariables', function(req, res, next){
  var errMsg="Router observationVariables Get - "
  var call=observationVariables
  resolveCall(call,req,res,errMsg);
})

//locationDetails
router.get('/locations/:locationDbId', function(req, res, next){
  var errMsg="Router locationDetails Get - "
  var call=locationDetails
  resolveCall(call,req,res,errMsg);
})


function resolveCall(call,req,res,errMsg){
  var options=getOptions(req);
  call(options).then(function(callRes){
    res.status(200).json(callRes);
  }).catch(function(err){
    console.trace(errMsg+err)
    resolveError(err);
  })
}
function resolveError(err){
  var statusCode;
  try{
    statusCode=err.metadata.status[0].code;
  }
  catch(error){
    statusCode=500;
  }
  res.status(statusCode).json(err);  
}

module.exports = router;