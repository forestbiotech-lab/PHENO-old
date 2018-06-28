module.exports=
{
  	"locationDbId": "id",
  	"locationType" : "",
  	"name": "",
 	"abbreviation": "",
  	"countryCode": {_table:"Country",_attributes:"code"},
  	"countryName": {_table:"Country",_attributes:"name"},
  	"latitude": "",
  	"longitude": "",
  	"altitude": "",
  	"instituteName": {_table:"Institution",_attributes:"name"},
  	"instituteAdress": "??????",
	"additionalInfo": 
	{
		_table:"LocationAdditionalInfo",
    	"annualMeanRain" : "propertyName", 
    	"soilDescription" :"propertyValue"
  }
}