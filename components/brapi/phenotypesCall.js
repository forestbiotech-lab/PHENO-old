/**
 * Created by Bruno Costa on 20-07-2017.
**/


var models= require('./models');
var fmtFunc= require('./formatingFunctions');




module.exports = function(query,options){

  query.pageSize = query.pageSize || 1000     //The default in specs is 1000    
  query.page = query.page || 0 

  //Set the page to show
  query.offset= query.page * query.pageSize;
  query.notation=query.notation || 'string' //string | prudy?????
  query.where={}

  //Now this promise will send the call and the logic of parsing the result will be set here.
  return new Promise(function(resolve,reject){

    //Missing how to deal with rejections of the model. Function for rejection?
    models.getGermPedigree(query).then(function(res){
      //Logic to decide which is sent
      if(res instanceof Error){
        //Send the error in the status send rejection to promise
        //Args:queryData,pagination,code,message
        reject( fmtFunc.generateJSON(null,null,400,res.name+" : "+res.message) );
 
      }else{
        //If res isn't an error send the appropriate response
        var databaseValues={}
        




        //Generate pagination details
        var pagination=fmtFunc.generatePagination(res,query);

        //Args:queryData,pagination,code,message
        resolve(fmtFunc.generateJSON(databaseValues,pagination,200,null));

      //end else
      }

    //end then
    }).catch(function(err){

      //queryData,pagination,code,message
      reject( fmtFunc.generateJSON(null,null,500,err.name+" : "+err.message) );        
    });
  });
}



/*
[{
    "observationUnitDbId": "2016-Maugio-34-575-abc-123",
    "observationLevel": "plot",
    "observationLevels": "bloc:2,subBloc:1,plot:2016-Maugio-34-575-abc-123",
    "plotNumber": "2016-Maugio-34-575-abc-123",
    "plantNumber" : null,
    "blockNumber" : "2",
    "replicate": null,
    "observationUnitName": "2016-Maugio-34-575",
    "germplasmDbId": "doi:10.155454/12349537E12",
    "germplasmName": "IR-8",
    "studyDbId": "YieldStudy2015-5",
    "studyName": "Yield wheat 2015",
    "studyLocationDbId": "mtp-north-32",
    "studyLocation": "Montpellier",
    "programName": "Whealbi",
    "X": "5",
    "Y": "15",
    "entryType": null,
    "entryNumber": null,
    "treatments": [
      {
        "factor": "water regimen",
        "modality": "water deficit"
      }
    ],
    "observationUnitXref":[
        {"source": "biosampleEBI", "id": "SAMEA179865230"},
        {"source": "gnpis.lot", "id": "INRA:CoeSt6 _SMH03"}, 
        {"source": "kernelDB", "id": "239865"}
    ],
    "observations": [
      {
        "observationDbId": "153453453",
        "observationVariableDbId": "CO_321:0000045",
        "observationVariableName": "Plant_height",
        "observationTimeStamp": "2015-06-16T00:53:26-0800",
        "season": "2015",
        "collector": "Mr. Technician",
        "value": "45"
      },
      {
        "observationDbId": "23453454345",
        "observationVariableDbId": "CO_321:0000996",
        "observationVariableName": "GW100_g",
        "observationTimeStamp": "2015-06-16T00:53:26-0800",
        "season": "2015",
        "collector": "Mr. Technician",
        "value": "3"
      }
    ]
  },
  {
    "observationUnitDbId": "45204",
    "observationLevel": "plant",
    "observationLevels": null,
    "plotNumber": null,
    "plantNumber" : "45204",
    "blockNumber" : null,
    "replicate": "2",
    "observationUnitName": "2010-Cornell-37-99",
    "germplasmDbId": "doi:10.155499/12349537E00",
    "germplasmName": "ZE-45",
    "studyDbId": "YieldStudy2010-5",
    "studyName": "Yield wheat 2010",
    "studyLocationDbId": "88484",
    "studyLocation": "Cornell",
    "programName": "Wheat for futur",
    "X": null,
    "Y": null,
    "entryType": null,
    "entryNumber": null,
    "treatments": [],
    "observations": [
      {
        "observationDbId": "153453453",
        "observationVariableDbId": "CO_321:0000045",
        "observationVariableName": "Plant_height",
        "observationTimeStamp": "2010-06-16T00:53:26-0800",
        "season": "2010",
        "collector": "Mr. Technician",
        "value": "45"
      },
      {
        "observationDbId": "23453454345",
        "observationVariableDbId": "CO_321:0000996",
        "observationVariableName": "GW100_g",
        "observationTimeStamp": "2010-06-16T00:53:26-0800",
        "season": "2010",
        "collector": "Mr. Technician",
        "value": "3"
      }
    ]
  }
]
*/