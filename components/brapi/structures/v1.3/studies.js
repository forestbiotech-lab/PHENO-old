module.exports={
    "active": "true",
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
    "documentationURL": {
        _table:"Study",
        _attribute:{
            _joiner:"https://brapi.biodata.pt/brapi/datasets/study/",
            _attributes:["","id"]
        }
    },
    "endDate": {_table:"Trial",_attribute:"endDate"},  //Should be in study not trial?
    "locationDbId": "locationId",
    "locationName": {_table:"Location",_attribute:"name"},
//    "name": "",  //Deprecated I think
    "programDbId": {_table:"Trial",_attribute:"programId"},
    "programName": {_table:["Trial","Program"],_attribute:"name"},
    "seasons": [{
        _table:["StudySeason","Season"],
        _model:{
            _table:"Season",
            id:"",
            season:"",
            year:""
        }
    }],
    "startDate": {_table:"Trial",_attribute:"startDate"},  //Should be in study not trial?
    "studyDbId": "id",
    "studyName": "name",
//    "studyType": {}, //deprecated
    "studyTypeDbId": "studyTypeId",
    "studyTypeName": {_table:"StudyType",_attribute:"name"}, //name or description????
    "trialDbId": {_table:"Trial",_attribute:"id"},
    "trialName": {_table:"Trial",_attribute:"name"}
}