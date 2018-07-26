module.exports={
//  "X": ,
//  "Y": ,
//  "blockNumber": "",
//  "entryNumber": "",
//  "entryType": "check",
//  "germplasmDbId": "doi:10.155454/12349537E12",
//  "germplasmName": "IR-8",
//  "observationLevel": "plot",
//  "observationLevels": "bloc:2,subBloc:1,plot:2016-Maugio-34-575-abc-123",
  "observationUnitDbId": "id",
//  "observationUnitName": "2016-Maugio-34-575",
//  "observationUnitXref": [
//    {
//      "id": "SAMEA179865230",
//      "source": "biosampleEBI"
//    },
//    {
//          "id": "INRA:CoeSt6 _SMH03",
//          "source": "gnpis.lot"
//      },
//      {
//          "id": "239865",
//          "source": "kernelDB"
//      }
//  ],
  "studyName": {_table:["StudyPlant","Observation","ObservationVariable","StudyObservationVariable"],_attribute:"id"},
  "observations": [{
    _table: ["StudyPlant","Observation"],
    _model:{
      _table:"Observation",
        "collector": {_table:"Person",_attribute:"name"},

        observationDbId: "id",
 //       observationTimeStamp: "",
        observationVariableDbId: {_table:"ObservationVariable",_attribute:"observationVariableId"},
        observationVariableName: {_table:"ObservationVariable",_attribute:"name"},
//          "season": "2015",
          "value": ""
      }
    }
  ],
  "plantNumber": {_table:"StudyPlant"},
  "plotNumber": {_table:["StudyPlant","Observation","StudyPlot"]},
//  "programName": "Whealbi",
//  "replicate": "0",
//  "studyDbId": "YieldStudy2015-5",
//  "studyLocation": "Montpellier",
//  "studyLocationDbId": "mtp-north-32",
//  "treatments": [
//      {
//          "factor": "water regimen",
//          "modality": "water deficit"
//      }
//  ]
  }