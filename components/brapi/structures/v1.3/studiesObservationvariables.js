module.exports={
    "contextOfUse":[{_table:"ContextOfUse",_attribute:"description"}],
    "crop":{_table:"Crop",_attribute:"commonCropName"},
    "date": "",
    "defaultValue": "",
    "documentationURL": "https://brapi.org",  //NOT IMPLEMENTED
    "growthStage": "",
    "institution":{_table:"Institution",_attribute:"name"},
    "language": "",
    "method": {
    	_table:"Method",
        "class": "",
        "description": "",
        "formula": "",
        "methodDbId": "methodId",
        "methodName": "name",
        "name": "",
        "ontologyReference": {
	    	_table:"Ontology",
	        "ontologyDbId": "accession",
	        "ontologyName": "name",
	        "version": "",
	        "documentationLinks": [{
	        	_table:"OntologyReference",
	        	_model:{
	        		_table:"OntologyReference",
	                "URL": "url",
	                "type": "",
	                "url": ""
	            }
	        }],
        },
        "reference": ""
    },
    "name": "",
    "observationVariableDbId": "id",
    "observationVariableName": "name", //deprecated??
	"ontologyDbId":{_table:"Ontology",_attribute:"accession"},   //LEGACY - This must be compatibility
	"ontologyName":{_table:"Ontology",_attribute:"name"},        //LEGACY - This must be compatibility 
    "ontologyReference": { 							
    	_table:"Ontology",
        "ontologyDbId": "accession",
        "ontologyName": "name",
        "version": "",
        "documentationLinks": [{
        	_table:"OntologyReference",
        	_model:{
        		_table:"OntologyReference",
                "URL": "url",                                       //LEGACY ?
                "type": "",
                "url": ""
            }
        }],
    },
    "scale": {
    	_table:"Scale",
        "dataType": {"_table":"DataType","_attribute":"type"},
        "decimalPlaces": "",
        "name": "",
        "ontologyReference": {
	    	_table:"Ontology",
	        "ontologyDbId": "accession",
	        "ontologyName": "name",
	        "version": "",
	        "documentationLinks": [{
	        	_table:"OntologyReference",
	        	_model:{
	        		_table:"OntologyReference",
	                "URL": "url",
	                "type": "",
	                "url": ""
	            }
	        }],
        },
        "scaleDbId": "scaleId",
        "scaleName": "name",
        "validValues": {
            "categories": [{
            	_table:"ScaleCategory",
            	_attribute:{
            		_joiner:"=",
            		_attributes:["value","category"]
            	}
            }],
            "max": "",
            "min": ""
        },
        "xref": ""
    },
    "scientist": "",
    "status": "",
    "submissionTimestamp": "",                                 //Not implemented
    "synonyms": [{_table:"ObservationVariableSynonym",_attribute:"synonym"}],
    "trait": {
    	_table:"Trait",
	    "alternativeAbbreviations": [{_table:"TraitAlternativeAbbreviation",_attribute:"abbreviation"}],
        "attribute": "",
        "class": "",
        "description": "",
        "entity": "",
        "mainAbbreviation": "",
        "name": "",
        "ontologyReference": {
        	_table:"Ontology",
            "ontologyDbId": "accession",
            "ontologyName": "name",
            "version": "",
            "documentationLinks": [{
            	_table:"OntologyReference",
                "URL": "url",
                "type": "",
                "url": ""
            }],
        },
        "status": "",
        "synonyms": [{
        	_table:"TraitSynonym",
        	_attribute:"synonym"
        }],
        "traitDbId": "traitId",
        "traitName": "name",
        "xref": ""
    },
    "xref": ""
}