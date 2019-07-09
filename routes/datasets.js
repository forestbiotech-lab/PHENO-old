var express = require('express');
var router = express.Router();
var resolveHelper = require('./../components/brapi/helpers/resolveHelper');
var getOptions = require('./../components/brapi/helpers/getOptions');
var showDataset = require('./../components/brapi/datasets/global')
var germplasm = require('./../components/brapi/datasets/germplasm')
var study = require('./../components/brapi/datasets/study')
var trial = require('./../components/brapi/datasets/trial')
var relatedGermplasms = require('./../components/brapi/datasets/relatedGermplasms')
var relatedStudies = require('./../components/brapi/datasets/relatedStudies')
var observationVariables = require('./../components/brapi/datasets/observationVariables')
var studyAdditionalInfo = require('./../components/brapi/datasets/studyAdditionalInfo')
var locationAdditionalInfo = require('./../components/brapi/datasets/locationAdditionalInfo')
var listGermplasms = require('./../components/brapi/v1.3/germplasm_GET')
var listTrials = require('./../components/brapi/v1.3/trials_GET')
var listStudies = require('./../components/brapi/v1.3/studies_GET')
var list={trial:listTrials,study:listStudies}

var resolveCall=resolveHelper.resolveCall

var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');

const map=require("svg-world-map")
const toHTML=require('vdom-to-html')

router.get('/germplasm',function(req,res,next){
  var errMsg="Router dataset List germplasms"
  var call=listGermplasms
  formatResponse=function(response){
    let data=[]
    response.result.data.forEach(function(germplasm){
      data.push(germplasm.germplasmDbId)
      //Object.assign(data,germplasm.result.data)
    })
    //console.log({data})
    return {type:"germplasm",data}
  }
//  relatedGermplasms().then(function(callRes){
      resolveCall(call,req,res,errMsg,"listDatasetLinks",formatResponse)
//  })

})

type="trial"
router.get(`/${type}`,function(req,res,next){
  let type="trial"
  var errMsg=`Router dataset List ${type}`
  var call=list[type]
  formatResponse=function(response){
    let data=[]
    //console.log(response.result.data)
    response.result.data.forEach(function(item){
      data.push(item[`${type}DbId`])
      //Object.assign(data,germplasm.result.data)
    })
    //console.log({data})
    return {type:type,data}
  }
//  relatedGermplasms().then(function(callRes){
      resolveCall(call,req,res,errMsg,"listDatasetLinks",formatResponse)
//  })

})

type="study"
router.get(`/${type}`,function(req,res,next){
  let type="study"
  var errMsg=`Router dataset List ${type}`
  var call=list[type]
  formatResponse=function(response){
    let data=[]
    //console.log(response.result.data)
    response.result.data.forEach(function(item){
      data.push(item[`${type}DbId`])
      //Object.assign(data,germplasm.result.data)
    })
    //console.log({data})
    return {type:type,data}
  }
//  relatedGermplasms().then(function(callRes){
      resolveCall(call,req,res,errMsg,"listDatasetLinks",formatResponse)
//  })

})

router.get('/germplasm/:germplasmId',function(req,res,next){
  var errMsg="Router dataset Get germplsm - "
  var call=germplasm;
  formatResponse=function(response){
    germplasmData=response.result.data[0]
    location=response.result.data[0].holdingInstitution.coordinates[0]
    myMap=map(location.longitude,location.latitude)
    svg=toHTML(myMap)
    let fakeReq=getOptions({
      params:{
        locationId:germplasmData.holdingInstitution.locationId
      }
    })
    return locationAdditionalInfo(fakeReq).then(function(callRes){
   	  data={
        	title: "PHENO - Germplasm info",
        	host: req.headers.host,
        	germplasmData:germplasmData,
        	map:svg
      }
      Object.assign(data,callRes.result.data[0])
      return data 
    }).catch(function(err){
      debug_std("Router | dataset | study | One of the promises failed - err: "+err)
    })  

  }
  resolveCall(call,req,res,errMsg,"germplasm",formatResponse)
})

router.get('/study/:studyId',function(req,res,next){
  var errMsg="Router dataset Get study - "
  var call=study;
  formatResponse=function(response){
  	var studyData=response.result.data[0]
  	location=studyData.location
    myMap=map(location.longitude,location.latitude)
    svg=toHTML(myMap)
  	let fakeReq=getOptions({
  		params:{
  			programId:studyData.program.id,
  			studyId:studyData.id,
  			locationId:studyData.program.lead_person.institution.locationId
  		}
  	})
  	addonCalls=[
  		relatedStudies(fakeReq),
  		relatedGermplasms(fakeReq),
  		observationVariables(fakeReq),
  		studyAdditionalInfo(fakeReq),
  		locationAdditionalInfo(fakeReq)
  	];
  	
  	return Promise.all(addonCalls).then(function(callRes){
  		data={
	      	title: "PHENO - Study info",
	      	host: req.headers.host,
	      	studyData:studyData,
	      	map:svg,
	      	relatedStudies:null
	    }
  		for (i in callRes){
  			Object.assign(data,callRes[i].result.data[0])
  		}
		return data	
  	}).catch(function(err){
  		debug_std("Router | dataset | study | One of the promises failed - err: "+err)
  	})	
  }	

  resolveCall(call,req,res,errMsg,"study",formatResponse)
})

router.get('/trial/:trialId',function(req,res,next){
  var errMsg="Router dataset Get trial - "
  var call=trial;
  formatResponse=function(response){
    //console.log(response)
    var trialData=response.result.data[0]
    //console.log(trialData)
    return {trialData:trialData}
/*
    location=studyData.location
    myMap=map(location.longitude,location.latitude)
    svg=toHTML(myMap)
    let fakeReq=getOptions({
      params:{
        programId:studyData.program.id,
        studyId:studyData.id,
        locationId:studyData.program.lead_person.institution.locationId
      }
    })
    addonCalls=[
      relatedStudies(fakeReq),
      relatedGermplasms(fakeReq),
      observationVariables(fakeReq),
      studyAdditionalInfo(fakeReq),
      locationAdditionalInfo(fakeReq)
    ];
    
    return Promise.all(addonCalls).then(function(callRes){
      data={
          title: "PHENO - Study info",
          host: req.headers.host,
          studyData:studyData,
          map:svg,
          relatedStudies:null
      }
      for (i in callRes){
        Object.assign(data,callRes[i].result.data[0])
      }
    return data 
    }).catch(function(err){
      debug_std("Router | dataset | study | One of the promises failed - err: "+err)
    })  */
  } 
  resolveCall(call,req,res,errMsg,"trial",formatResponse)
})

/////Change this route  
router.get('/global/:datasetId',function(req,res,next){
  var errMsg="Router show dataset Get - "
  var call=showDataset;
  resolveCall(call,req,res,errMsg,'showDataset');
})

router.get("/addon/relatedStudies/:programId",function(req,res,next){
	var errMsg="Router | datasets | addon relatedStudies - err: "
	var call=relatedStudies
	resolveCall(call,req.res.errMsg) 
})



module.exports = router;