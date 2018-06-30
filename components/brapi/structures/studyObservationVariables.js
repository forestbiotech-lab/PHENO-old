module.exports=
{
	"observationVariable":"observationVariableId",
	"name":"",
	"ontologyDbId":{_table:"Ontology",_attribute:"accession"},
	"ontologyName":{_table:"Ontology",_attribute:"name"},
	"synonyms":[{_table:"ObservationVariableSynonym",_attribute:"synonym"}],
	"contextOfUse":[{_table:"ContextOfUse",_attribute:"description"}],
	"growthStage":"",
	"status":"",
	"xref":"",
	"institution":{_table:"Institution",_attribute:"name"},
	"scientist":{_table:"Person",_attribute:"name"},
	"date":"",
	"language":"",
	"crop":{_table:"Crop",_attribute:"commonCropName"},
	"trait":{ _table:"Trait",
	  "traitDbId":"traitId",
	  "name":"",
	  "class": "",
	  "description": "",
	  "synonyms": [{_table:"TraitSynonym",_attribute:"synonym"}],
	  "mainAbbreviations": "",
	  "alternativeAbbreviations": [{_table:"TraitAlternativeAbbreviation",_attribute:"abbreviation"}],
	  "entity": "",
	  "attribute": "",
	  "status": "",
	  "xref": ""
	},
	"method":{
	  "_table":"Method",
	  "methodDbId": "methodId",
	  "name": "",
	  "class": "",
	  "description": "",
	  "formula": "",
	  "reference": ""
	},
	"scale":{
	  "_table":"Scale",
	  "scaleDbId": "scaleId",
	  "name": "",
	  "datatype": {"_table":"DataType","_attribute":"type"},
	  "decimalPlaces": "",
	  "xref": "",
	  "validValues": {
	    _table:"./Scale",
	    "min": "",
	    "max": "",
	    "categories": [{_table:"ScaleCategory",_attribute:{_joiner:"=",_attributes:["value","category"]}}]
	  }
	},
	"defaultValue":"",
}
      