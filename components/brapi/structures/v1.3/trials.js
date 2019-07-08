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
  "contacts": [{
    _table: ["Study","StudyContact","Person"],
    _model:{
        _table:"Person",
        contactDbId:{_table:"Person",_attribute:"id",_parse:"str"},
        email:"",
        instituteName: {_table:"Institution",_attribute:"name"},
        name: "",
        orcid: "",
        type:"role"
    }
  }],
  "datasetAuthorship": {   //deprecated for v1.3
      _table:["TrialAuthorship","Authorship"],
      "datasetPUI": "",
      "license": ""
  },
  "datasetAuthorships": [{
      _table:["TrialAuthorship","Authorship"],
      _model:{
          _table:"Authorship",
          "datasetPUI": "",
          "license": ""
      }
  }],


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
  "publications": [        //NOT IMPLEMENTED
      {
          "publicationPUI": "doi:10.15454/312953986E3",
          "publicationReference": "https://brapi.org"
      }
  ],
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