module.exports={
    "x": "",  
    "y": "",
    "blockNumber": "",
    "entryNumber": "",
    "entryType": "",
	"germplasmDbId": {_table:"Germplasm",_attribute:"id",_parse:"str"},
    "germplasmName": {_table:"Germplasm",_attribute:"defaultDisplayName"},
    "observationLevel": "level", 
    "observationLevels": "levels",
    "observationUnitDbId": {_table:"ObservationUnit",_attribute:"id",_parse:"str"},
    "observationUnitName": "name",
    "observationUnitXref": [{
        _table:"ObservationUnitXRef",
        _model: {
        	_table:"ObservationUnitXRef",
        	"id":"xref",
        	"source":"source"
        }
    }],
   "observations": [{
  	 	_table:"Observation",
  		_model: {
  			_table:"Observation",
  			"collector":{_table:"Person",_attribute:"name"},
            "observationDbId": {_table:"Observation",_attribute:"id",_parse:"str"},
            "observationTimeStamp": "",
            "observationVariableDbId": {_table:"ObservationVariable",_attribute:"id",_parse:"str"},
            "observationVariableName": {_table:"ObservationVariable",_attribute:"name"},
            "season": [{
                _table:"",
                _model:[{
                    _table:"",
                    season:"",
                    year:"",
                    seasonDbId:"seasonId"
                }]
            }],  ///Needs Verification
            "value": ""
  		}
  	}],    
    "plantNumber": "",
    "plotNumber": "",
    "programName": {_table:["Study","Trial","Program"],_attribute:"name"},
    "replicate": "",
    "studyDbId": {_table:"Study",_attribute:"name",_parse:"str"},
    "studyLocation": {_table:["Study","Location"],_attribute:"name"},
    "studyLocationDbId": {_table:"Study",_attribute:"locationId",_parse:"str"},
    "studyName": {_table:"Study",_attribute:"name"},
    "treatments": [{
    	_table:["Treatment","TreatmentModality"],
    	_model:{
    		_table:"TreatmentModality",
            "factor": {_table:"TreatmentFactor",_attribute:"factor"},
            "modality": ""
        }
    }]

}