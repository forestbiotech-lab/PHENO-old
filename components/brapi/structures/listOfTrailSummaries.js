module.exports={
  "trialDbId" : "id",
  "trialName" : "name",
  "programDbId": {_table:"Program",_attribute:"id"},
  "programName": {_table:"Program",_attribute:"name"},
  "startDate": "",
  "endDate"  : "",
  "active" : {_table:"Study"}, 
  "studies" : [{
    _table:"Study",
    _model:{
      _table:"Study",
     "studyDbId" : "id",
     "studyName" : "name",
     "locationName" : {_table:"Location",_attribute:"name"}
    }
  }],
  "additionalInfo" : {
      _table:["Study","StudyAdditionalInfo"],
      "property1Name" : "propertyName",
      "property2Name" : "propertyName",
      "property3Name" : "propertyValue"
  }
}