module.exports={
  "active": "",
  "additionalInfo": [{
    _table:"TrialAdditionalInfo",
    _model:{    
      _table:"TrialAdditionalInfo",
      _key:"propertyName",
      _value:"propertyValue"
    }
  }],
  "commonCropName": {_table:["Study","StudyGermplasm","Germplasm","Species","Crop"],_attribute:"commonCropName"},
  "documentationURL":{
    _table:"Trial",
    _attribute:{
      _joiner:"https://brapi.biodata.pt/brapi/datasets/trial/",
      _attributes:["","id"]
    }
  },  //Add trial card
  "endDate": "",
  "programDbId": {_table:"Trial",_attribute:"programId",_parse:"str"},
  "programName": {_table:"Program",_attribute:"name"},
  "startDate": "",
  "studies": [{
    _table:"Study",
    _model:{
      _table:"Study",
      "locationDbId": {_table:"Study",_attribute:"locationId",_parse:"str"},
      "locationName": {_table:"Location",_attribute:"name"},
      "studyDbId": {_table:"Study",_attribute:"id",_parse:"str"},
      "studyName": "name"      
    }
  }],
  "trialDbId": {_table:"Trial",_attribute:"id",_parse:"str"},
  "trialName": "name"
}