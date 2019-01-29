// test-setup.spec.js
const sinon = require('sinon')
const chai = require('chai')

beforeEach(function () {
	//This is a structure json
	var arg = {
		"metadata":{},
		"attribute":"id",
		"callStructure":{
			"notes":"",
			"observationUnitDbId":{
				"_table":"ObservationUnit",
				"_attribute":"id"
			},
			"plantDbId":{
				"_table":["SamplePlant","Plant"],
				"_attribute":"id"
			},
			"plotDbId":{
				"_table":["SamplePlant","Plant","Plot"],
				"_attribute":"id"},
				"sampleDbId":"id",
				"sampleTimestamp":"sampleDate",
				"sampleType":"",
				"takenBy":{"_table":"Person","_attribute":"name"},
				"tissueType":""
			}
		};
	//Database export
	var res = { 
		"count":28, 
		"rows":[{
			"id":1,
			"name":"",
			"takenBy":6,
			"sampleDate":"2015-06-01",
			"seasonId":2,
			"sampleType":"Cork plank",
			"tissueType":"Cork Amadia",
			"notes":"",
			"Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},
			"SamplePlant":{
				"id":1,"sampleId":1,"plantId":1169,"Plant":{
					"id":1169,
					"plotId":15,
					"locationId":null,
					"plantNumber":"BS3",
					"germplasmId":60,
					"X":null,
					"Y":null,
					"Plot":{
						"id":15,
						"locationId":null,
						"plotNumber":null,
						"blockNumber":1,
						"X":null,
						"Y":null,
						"replicate":1,
						"plantingDate":"0000-00-00",
						"harvestDate":"2015-06-01"
					}
				}
			}
		},{
			"id":2,
			"name":"",
			"takenBy":6,
			"sampleDate":"2015-06-01",
			"seasonId":2,
			"sampleType":"Cork plank",
			"tissueType":"Cork Amadia",
			"notes":"",
			"Person":{
				"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator",
				"email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5
			},
			"SamplePlant":{
				"id":2,"sampleId":2,"plantId":1170,"Plant":{
					"id":1170,
					"plotId":15,
					"locationId":null,
					"plantNumber":"BS4",
					"germplasmId":60,
					"X":null,
					"Y":null,
					"Plot":{
						"id":15,
						"locationId":null,
						"plotNumber":null,
						"blockNumber":1,
						"X":null,
						"Y":null,
						"replicate":1,
						"plantingDate":"0000-00-00",
						"harvestDate":"2015-06-01"
					}
				}
			}
		},{
			"id":3,
			"name":"",
			"takenBy":6,
			"sampleDate":"2015-06-01",
			"seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{
				"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5
			},
			"SamplePlant":{
				"id":3,"sampleId":3,"plantId":1171,"Plant":{
					"id":1171,"plotId":15,"locationId":null,"plantNumber":"BS5","germplasmId":60,"X":null,"Y":null,"Plot":{
						"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"
					}
				}
			}
		},{
			"id":4,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{
				"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5
			},"SamplePlant":{
				"id":4,"sampleId":4,"plantId":1172,"Plant":{
					"id":1172,"plotId":15,"locationId":null,"plantNumber":"BS6","germplasmId":60,"X":null,"Y":null,"Plot":{
						"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"
					}
				}
			}
		},{
			"id":5,"name":"",
			"takenBy":6,
			"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{
				"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5
			},
			"SamplePlant":{
				"id":5,"sampleId":5,"plantId":1173,"Plant":{
					"id":1173,"plotId":15,"locationId":null,"plantNumber":"BS7","germplasmId":60,"X":null,"Y":null,"Plot":{
						"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"
					}}}},{"id":6,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":6,"sampleId":6,"plantId":1174,"Plant":{"id":1174,"plotId":15,"locationId":null,"plantNumber":"BS8","germplasmId":60,"X":null,"Y":null,"Plot":{"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":7,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":7,"sampleId":7,"plantId":1175,"Plant":{"id":1175,"plotId":15,"locationId":null,"plantNumber":"BS9","germplasmId":60,"X":null,"Y":null,"Plot":{"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":8,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":8,"sampleId":8,"plantId":1176,"Plant":{"id":1176,"plotId":15,"locationId":null,"plantNumber":"BS10","germplasmId":60,"X":null,"Y":null,"Plot":{"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":9,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":9,"sampleId":9,"plantId":1177,"Plant":{"id":1177,"plotId":16,"locationId":null,"plantNumber":"CL1","germplasmId":68,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":10,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":10,"sampleId":10,"plantId":1178,"Plant":{"id":1178,"plotId":16,"locationId":null,"plantNumber":"CL2","germplasmId":69,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":11,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":11,"sampleId":11,"plantId":1179,"Plant":{"id":1179,"plotId":16,"locationId":null,"plantNumber":"CL3","germplasmId":70,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":12,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":12,"sampleId":12,"plantId":1180,"Plant":{"id":1180,"plotId":16,"locationId":null,"plantNumber":"CL4","germplasmId":71,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":13,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":13,"sampleId":13,"plantId":1181,"Plant":{"id":1181,"plotId":16,"locationId":null,"plantNumber":"CL5","germplasmId":72,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":14,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":14,"sampleId":14,"plantId":1182,"Plant":{"id":1182,"plotId":16,"locationId":null,"plantNumber":"CL6","germplasmId":73,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":15,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":15,"sampleId":15,"plantId":1183,"Plant":{"id":1183,"plotId":16,"locationId":null,"plantNumber":"CL7","germplasmId":74,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":16,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":16,"sampleId":16,"plantId":1184,"Plant":{"id":1184,"plotId":16,"locationId":null,"plantNumber":"CL9","germplasmId":75,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":17,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":17,"sampleId":17,"plantId":1185,"Plant":{"id":1185,"plotId":16,"locationId":null,"plantNumber":"CL12","germplasmId":76,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":18,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":18,"sampleId":18,"plantId":1186,"Plant":{"id":1186,"plotId":16,"locationId":null,"plantNumber":"CL13","germplasmId":77,"X":null,"Y":null,"Plot":{"id":16,"locationId":null,"plotNumber":null,"blockNumber":2,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":19,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":19,"sampleId":19,"plantId":1187,"Plant":{"id":1187,"plotId":17,"locationId":null,"plantNumber":"HL1","germplasmId":78,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":20,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":20,"sampleId":20,"plantId":1188,"Plant":{"id":1188,"plotId":17,"locationId":null,"plantNumber":"HL3","germplasmId":79,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":21,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":21,"sampleId":21,"plantId":1189,"Plant":{"id":1189,"plotId":17,"locationId":null,"plantNumber":"HL4","germplasmId":80,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":22,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":22,"sampleId":22,"plantId":1190,"Plant":{"id":1190,"plotId":17,"locationId":null,"plantNumber":"HL6","germplasmId":81,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":23,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":23,"sampleId":23,"plantId":1191,"Plant":{"id":1191,"plotId":17,"locationId":null,"plantNumber":"HL7","germplasmId":82,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":24,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":24,"sampleId":24,"plantId":1192,"Plant":{"id":1192,"plotId":17,"locationId":null,"plantNumber":"HL8","germplasmId":83,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":25,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":25,"sampleId":25,"plantId":1193,"Plant":{"id":1193,"plotId":17,"locationId":null,"plantNumber":"HL9","germplasmId":84,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":26,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":26,"sampleId":26,"plantId":1194,"Plant":{"id":1194,"plotId":17,"locationId":null,"plantNumber":"HL10","germplasmId":85,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":27,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":27,"sampleId":27,"plantId":1195,"Plant":{"id":1195,"plotId":17,"locationId":null,"plantNumber":"HL15","germplasmId":86,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}},{"id":28,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":28,"sampleId":28,"plantId":1196,"Plant":{"id":1196,"plotId":17,"locationId":null,"plantNumber":"HL17","germplasmId":87,"X":null,"Y":null,"Plot":{
							"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"
				}
		}
	}
}
]
}
	var dataValues={"id":28,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"","Person":{"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5},"SamplePlant":{"id":28,"sampleId":28,"plantId":1196,"Plant":{"id":1196,"plotId":17,"locationId":null,"plantNumber":"HL17","germplasmId":87,"X":null,"Y":null,"Plot":{"id":17,"locationId":null,"plotNumber":null,"blockNumber":3,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}}}}	
  	this.sandbox = sinon.createSandbox()
})

afterEach(function () {
  this.sandbox.restore()
})