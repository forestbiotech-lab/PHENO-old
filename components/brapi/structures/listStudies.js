module.exports={
  programId:{_table:["Trial","Program"],_attribute:"id"}, 
  trialId:{_table:"Trial",_attribute:"id"},
  trialName:{_table:"Trial",_attribute:"name"},
  studyName:"name", 
  studyId:"id",
  trialAdditionalInfo: [{
    _table:["Trial","TrialAdditionalInfo"],
    _model:{
      _table:"TrialAdditionalInfo",
      _key: "propertyName",
      _value: "propertyValue"
    }
  }],
}
