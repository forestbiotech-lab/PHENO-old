module.exports={
  id:"",
  defaultDisplayName:"",
  holdingInstitution:{_table:"Institution",
  	name:"name",
    locationId:"",
  	location: {_table:"Location",_attribute:"name"},
  	country: {_table:["Location","Country"],_attribute:"name"},
  	coordinates: [{
  		_table:"Location",
  		_model:{
  			_table:"Location",
  			longitude:"",
  			latitude:""
  		}
  	}],
  },
  donorInstitute:{_table:["donorInstitute","Institution"],_attribute:"name"},
  accessionNumber:"",
  germplasmPUI:"",
  seedSource:"",
  acquisitionDate:"",
  biologicalStatusOfAccessionCode:"",
  country_of_origin: {
  	_table:"Country",
  	name:"",
  	code:""
  },
  Specie:{
  	_table:"Species",
  	genus:"genus", 
  	species:"species",
  	crop: {_table:"Crop",_attribute:"commonCropName"}
  },
  Studies:[{
  	_table:["StudyGermplasm","Study"],
  	_model:{
  		_table:"Study",
  		headers:["name","programId","startDate","endDate"],
  	  	id:'',
  	  	name:'',
  		programId:'',
  		startDate:{_table:'Trial'},
  		endDate:{_table:'Trial'},
  		program:{_table:["Trial","Program"],_attribute:"name"}
  	}
  }]
}