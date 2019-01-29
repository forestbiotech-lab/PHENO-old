var e={}

e.arg={
	metadata:{},
	attribute:"id",
	callStructure:{
		notes:"",
		observationUnitDbId:{"_table":"ObservationUnit","_attribute":"id"},
		plantDbId:{
			"_table":["SamplePlant","Plant"],
			"_attribute":"id"
		},
		plotDbId:{
			"_table":["SamplePlant","Plant","Plot"],
			"_attribute":"id"
		},
		"sampleDbId":"id",
		"sampleTimestamp":"sampleDate",
		"sampleType":"",
		"takenBy":{"_table":"Person","_attribute":"name"},
		"tissueType":"",
		person:[{
			_table:"Person",
			_attribute:{
				_joiner:" ",
				_attributes:["honorific","name"]
			}
		}],
		plantsArrayObj:[{
			_table:"SamplePlant",
			_model:{
				_table:"SamplePlant",
				id:"",
				sampleId:""
			}
		}],
		plantsDynamicArray:[{
			_table:"Person",
			_model:{
				_table:"Person",
				_key:"honorific",
				_value:"name"
			}
		}]
		}
	};


e.res={ 
		"count":2, 
		"rows":[{
			_modelOptions:{tableName:"Sample"},
			dataValues:{
				"id":1,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"",
				"Person":{
					_modelOptions:{tableName:"Person"},
					dataValues:{
						"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5
					}
				},
				"SamplePlant":{
					_modelOptions:{tableName:"SamplePlant"},
					dataValues:{
						"id":1,"sampleId":1,"plantId":1169,"Plant":{
							_modelOptions:{tableName:"Plant"},
							dataValues:{
								"id":1169,"plotId":15,"locationId":null,"plantNumber":"BS3","germplasmId":60,"X":null,"Y":null,
								"Plot":{
									_modelOptions:{tableName:"Plot"},
									dataValues:{"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}
								}
							}		
						}
					}
				}
			}
		},{
			_modelOptions:{tableName:"Sample"},
			dataValues:{
				"id":1,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"",
				"Person":{
					_modelOptions:{tableName:"Person"},
					dataValues:{
						"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5
					}
				},
				"SamplePlant":{
					_modelOptions:{tableName:"SamplePlant"},
					dataValues:{
						"id":2,"sampleId":2,"plantId":1170,
						"Plant":{
							_modelOptions:{tableName:"Plant"},
							dataValues:{
								"id":1170,"plotId":15,"locationId":null,"plantNumber":"BS3","germplasmId":60,"X":null,"Y":null,
								"Plot":{
									_modelOptions:{tableName:"Plot"},
									dataValues:{"id":15,"locationId":null,"plotNumber":null,"blockNumber":1,"X":null,"Y":null,"replicate":1,"plantingDate":"0000-00-00","harvestDate":"2015-06-01"}
								}
							}		
						}
					}
				}
			}
		},{
			_modelOptions:{tableName:"Sample"},
			dataValues:{
				"id":2,"name":"","takenBy":6,"sampleDate":"2015-06-01","seasonId":2,"sampleType":"Cork plank","tissueType":"Cork Amadia","notes":"",
				"Person":{
					_modelOptions:{tableName:"Person"},
					dataValues:{
						"id":6,"name":"Inês Chaves","honorific":"Dr.","role":"Investigator","email":"ichaves@itqb.unl.pt","orcid":"0000-0001-7569-3495","affiliation":5
					}
				},
				"SamplePlant":{
					_modelOptions:{tableName:"SamplePlant"},
					dataValues:{
						"id":1,"sampleId":1,"plantId":1169,"Plant":{
							_modelOptions:{tableName:"Plant"},
							dataValues:{
								"id":1169,"plotId":18,"locationId":null,"plantNumber":"BS3","germplasmId":60,"X":null,"Y":null,
								"Plot":{
									_modelOptions:{tableName:"Plot"},
									dataValues:{ "id":18, "locationId":null, "plotNumber":null, "blockNumber":1, "X":null, "Y":null, "replicate":1, "plantingDate":"0000-00-00", "harvestDate":"2015-06-01"}
								}
							}		
						}
					}
				}
			}
		}]
	}





module.exports=e