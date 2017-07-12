var express = require('express');
var router = express.Router();

////------------ Call Declaration Galore ----------------------------------
var germplasmCalls = require('./../components/brapi/germplasmCalls');
var cropCall = require('./../components/brapi/cropCall');
var listImplementedCalls = require('./../components/brapi/listImplementedCalls');
//------------------- End  -------------------------------


//Test itrating through this 
getCalls=[{
uri:"/germplasm-search",
makeCall: germplasmCalls,
}]


//germplasm-search
router.get('/germplasm-search', function(req, res, next){
  germplasmCalls(req.query).then(function(germplasmRes){
    ss=klkl.lklkls.lklklk;
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


//The studies Call
router.get('/studies/:studyDbID', function(req, res, next) {
    var studyID=req.params.studyDbID;
    res.status(err.status || 500);
    res.render('error');      
});


module.exports = router;