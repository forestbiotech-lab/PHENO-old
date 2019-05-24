module.exports={
    "year":{_table:["Sample","Season"],_attribute:"year"},
    "studyDbId": {_table:"Study",_attribute:"name",_parse:"str"},
    "studyName": {_table:"Study",_attribute:"name"},
    "studyLocationDbId": {_table:"Study",_attribute:"locationId",_parse:"str"},
    "studyLocation": {_table:["Study","Location"],_attribute:"name"},
	"germplasmDbId": {_table:"Germplasm",_attribute:"id",_parse:"str"},
    "germplasmName": {_table:"Germplasm",_attribute:"defaultDisplayName"},
    "observationUnitDbId": {_table:"ObservationUnit",_attribute:"id",_parse:"str"},
    "plotNumber": "",
    "replicate": "",
    "blockNumber": "",
    "entryType": "",
    "x": "",  
    "y": "",
    "observations": [{
  	 	_table:"Observation",
  		_model: {
  			_table:"Observation",
            "observationVariableDbId": {_table:"ObservationVariable",_attribute:"observationVariableId",_parse:"str"},
            "observationVariableName": {_table:"ObservationVariable",_attribute:"name"},
            "value": ""
  		}
  	}]
}