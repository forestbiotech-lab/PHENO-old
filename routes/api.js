var express = require('express');
var router = express.Router();

var marked = require('marked');
var fs=require('fs');

////------------ Call Declaration Galore ----------------------------------
var germplasmCalls = require('./../components/brapi/germplasmCalls');
var cropCall = require('./../components/brapi/cropCall');
var listImplementedCalls = require('./../components/brapi/listImplementedCalls');
var germplasmPedigree = require('./../components/brapi/getGermplasmPedigree');
var phenotypesCall = require('./../components/brapi/phenotypesCall');
var studyGermplsmDetailsCall = require('./../components/brapi/studyGermplsmDetailsCall');
var studiesSearchCall = require('./../components/brapi/studiesSearchCall');
//------------------- End  -------------------------------


//Test itrating through this  NOT IMPLEMENTED YET
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
        var statusCode;
        try{
          statusCode=err.metadata.status[0].code;
        }
        catch(error){
          statusCode=500;
        }
        res.status(statusCode).json(err);
      })
    });
});  


//germplasm-search
router.get('/germplasm-search', function(req, res, next){
  germplasmCalls(req.query).then(function(germplasmRes){
    res.status(200).json(germplasmRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);
  })
});
//germplasm
router.get('/germplasm/:id', function(req, res, next){
  var query=req.query;
  query.germplasmDbId=req.params.id;
  germplasmCalls(query).then(function(germplasmRes){
    res.status(200).json(germplasmRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);
  })
});

//GermplasmPedigree
router.get('/germplasm/:id/pedigree',function(req,res,next){
  var query=req.query;
  query.germplasmDbId=req.params.id
  germplasmPedigree(query).then(function(germPedigreeRes){
    res.status(200).json(germPedigreeRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);  
  })
});


/* List supported crops */
/* João Cardoso - 11/07/2017 */
router.get('/crops', function(request, response, next){
  cropCall(request.query).then(function (cropResponse) {
    response.status(200).json(cropResponse);

  }).catch(function (error) {
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    response.status(statusCode).json(error);
  })

});


//germplasm-search POST
router.post('/germplasm-search', function(req, res, next){
  germplasmCalls(req.body).then(function(germplasmRes){
    res.status(200).json(germplasmRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);
  })
});


//phenotypes-search POST
router.post('/phenotypes-search', function(req, res, next){
  germplasmCalls(req.body).then(function(phenotypesRes){
    res.status(200).json(phenotypesRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);
  })
});


/*  João Cardoso  - 11/07/2017 
 *  List implemented calls 
*/
router.get('/calls', function (req, res, next){
    listImplementedCalls(req.query).then(function (callsResponse) {
      res.status(200).json(callsResponse);
    }).catch(function (err) {
      var statusCode;
      try{
        statusCode=err.metadata.status[0].code;
      }
      catch(error){
        statusCode=500;
      }
      res.status(statusCode).json(err);
    })

});


//study-search
router.get('/studies-search',function(req,res,next){
  var query=req.query;
  studiesSearchCall(query).then(function(studiesSearchCallRes){
    res.status(200).json(studiesSearchCallRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);
  })
});

//study-search
router.post('/studies-search',function(req,res,next){
  var query=req.body;
  studiesSearchCall(query).then(function(studiesSearchCallRes){
    res.status(200).json(studiesSearchCallRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);
  })
});


//studyGermplasmDetails
router.get('/studies/:studyDbId/germplasm', function(req, res, next){
  var query=req.query;
  query.studyDbId=req.params.studyDbId
  studyGermplsmDetailsCall(req.query).then(function(studyGermplasmDetailsCallRes){
    res.status(200).json(studyGermplasmDetailsCallRes);
  }).catch(function(err){
    var statusCode;
    try{
      statusCode=err.metadata.status[0].code;
    }
    catch(error){
      statusCode=500;
    }
    res.status(statusCode).json(err);
  })
});


module.exports = router;