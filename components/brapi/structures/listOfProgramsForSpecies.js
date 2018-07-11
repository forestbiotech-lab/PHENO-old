module.exports={
  genus:"",
  species:"",
  crop:{_table:"Crop",_attribute:"commonCropName"},
  observationVariable:{
    _table:["Crop","ObservationVariable"],
    id:"",
    name:""
  },
  study:{
    _table:["Crop","ObservationVariable","StudyObservationVariable","Study"],
    id:"",
    name:"",
    publication:{_table:"StudyAdditionalInfo",_attribute:"propertyValue"},
    trialAdditionalInfo: [{
      _table:["Trial","TrialAdditionalInfo"],
      _model:{
        _table:"TrialAdditionalInfo",
        _key: "propertyName",
        _value: "propertyValue"
      }
    }],
  },
  program:{
    _table:["Crop","ObservationVariable","StudyObservationVariable","Study","Trial","Program"],
    name:"",
    abbreviation:"",
    objective: "",
    honorific:{_table:"Person"},
    leadPerson:{_table:"Person",_attribute:"name"},
    orcid:{_table:"Person"}
  },
  listTrials:[{
    _table:["Crop","ObservationVariable","StudyObservationVariable","Study","Trial"],
    _model:{
      _table:"Trial",
      name:"",
      startDate:"",
      endDate:"",
      trialAdditionalInfo: [{
        _table:"TrialAdditionalInfo",
        _model:{
          _table:"TrialAdditionalInfo",
          _key: "propertyName",
          _value: "propertyValue"
        }
      }],
    }
  }],
  listPrograms:[{
    _table:["Crop","ObservationVariable","StudyObservationVariable","Study","Trial"],
    _model:{
      _table:"Trial",
      name:"",
      startDate:"",
      endDate: ""      
    }
  }],
  programs:[
    {_table:["Crop","ObservationVariable","StudyObservationVariable","Study","Trial","Program"],_attribute:"name"}
  ]

}