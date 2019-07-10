module.exports={
    "active": "",
    "additionalInfo": [{
        _table:"StudyAdditionalInfo",
        _model:{
            _table:"StudyAdditionalInfo",
            _key:"propertyName",
            _value:"propertyValue"
        }
    }],
    "commonCropName": {
        _table:["StudyGermplasm","Germplasm","Species","Crop"],
        _attribute:"commonCropName"
    },
    "contacts":[{
        _table:"StudyContact",
        _model:{
            _table:["StudyContact","Person"],
            contactDbId:{_table:"Person",_attribute:"id",_parse:"str"},
            email:"",
            instituteName: {_table:"Institution",_attribute:"name"},
            name: "",
            orcid: "",
            type:"role"
        }

    }],
    "dataLinks":[{
        _table: "DataLink",
        _model:{
            _table: "DataLink",
            name:"",
            type:"",
            url:"",
        }
    }],
    "documentationURL": {
        _table:"Study",
        _attribute:{
            _joiner:"https://brapi.biodata.pt/brapi/datasets/study/",
            _attributes:["","id"]
        }
    },
    "endDate": {_table:"Trial",_attribute:"endDate"},  //Should be in study not trial?
    "lastUpdate":{
        _table:"",
        timestamp:"",
        version:""
    },
    "license": {
        _table:["Trial","TrialAuthorship","Authorship"],
        _attribute:"license"
    },
    "locationDbId": {_table:"Trial",_attribute:"locationId",_parse:"str"},
    "locationName": {_table:"Location",_attribute:"name"},
//    "name": "",  //Deprecated I think
    "programDbId": {_table:"Trial",_attribute:"programId",_parse:"str"},
    "programName": {_table:["Trial","Program"],_attribute:"name"},
    "seasons": [{
        _table:["StudySeason","Season"],
        _model:{
            _table:"Season",
            id:{_table:"Season",_attribute:"id",_parse:"str"},
            season:"",
            year:{_table:"Season",_attribute:"year",_parse:"str"},
        }
    }],
    "startDate": {_table:"Trial",_attribute:"startDate"},  //Should be in study not trial?
    "studyDbId": {_table:"Study",_attribute:"id",_parse:"str"},
    "studyName": "name",
//    "studyType": {}, //deprecated
    "studyTypeDbId": "studyTypeId",
    "studyTypeName": {_table:"StudyType",_attribute:"name"}, //name or description????
    "trialDbId": {_table:"Trial",_attribute:"id",_parse:"str"},
    "trialName": {_table:"Trial",_attribute:"name"}
}