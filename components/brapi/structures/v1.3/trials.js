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
      "locationDbId": "locationId",
      "locationName": {_table:"Location",_attribute:"name"},
      "studyDbId": "id",
      "studyName": "name"      
    }
  }],
  "trialDbId": "id",
  "trialName": "name"
}