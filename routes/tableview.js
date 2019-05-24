const express = require('express');
const router = express.Router();
const resolveHelper = require('./../components/brapi/helpers/resolveHelper');
const resolveCall=resolveHelper.resolveCall
const axios=require('axios');
const jsonToTable = require('json-to-table');
////------------ Call Declaration Galore ----------------------------------
var Samples_SamplesDbId_GET = require('./../components/brapi/v1.3/Samples_SampleDbId_GET');

//------------------- End  -------------------------------
const version="v1"
const server="http://localhost:3000"
//--------------------------------

//phenotypes-search
route="observationunits"
router.get(`/${route}`, function(req, res, next){
  axios.get(`${server}/brapi/${version}/${route}`).then(function (response) {      
    const tabled = jsonToTable(response.data.result.data, 'MY_DEFAULT_STR!!');
    res.render("tableview",{data:tabled})
  }).catch(function (error) {
    console.log(error);
  });

})



module.exports = router;