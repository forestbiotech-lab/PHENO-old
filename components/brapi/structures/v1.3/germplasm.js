module.exports={
  accessionNumber: "",
  acquisitionDate: "",
  biologicalStatusOfAccessionCode: {_table:"Germplasm",_attribute:"biologicalStatusOfAccessionCode",_parse:"int"},
  breedingMethodDbId: "",
  commonCropName: {_table:["Species","Crop"]},
  countryOfOriginCode: {_table:"Country",_attribute:"code"},
  defaultDisplayName: "",
  documentationURL: {
    _table:"Germplasm",
    _attribute:{
      _joiner:"https://brapi.biodata.pt/brapi/datasets/germplasm/",
      _attributes:["","id"],
    }
  },
  donors: [{
    _table:"DonorInstitute",
      _model:{
        _table:"DonorInstitute",
        donorAccessionNumber: {_table:"Germplasm",_attribute:"accessionNumber"},
        donorInstituteCode: {_table:"Institution",_attribute:"code"},
        germplasmPUI:{_table:"Germplasm",_attribute:"germplasmPUI"}
      }
  }],
  germplasmDbId: {_table:"Germplasm",_attribute:"id",_parse:"str"},
  germplasmGenus: {_table:"Species",_attribute:"genus"},
  germplasmName: "defaultDisplayName",
  germplasmPUI: "",//http://pui.per/accession/A000003
  germplasmSpecies: {_table:"Species",_attribute:"species"},
  instituteCode: {_table:"Institution",_attribute:"code"},
  instituteName: {_table:"Institution",_attribute:"name"},
  pedigree: "",
  seedSource: "",
  speciesAuthority: {_table:"Species",_attribute:""},
  subtaxa: {_table:"Species",_attribute:""},
  subtaxaAuthority: {_table:"Species",_attribute:""},
  synonyms:[{
    _table:"GermplasmSynonym",
    _attribute:"synonym"
  }], 
  taxonIds:[{
    _table:"Species",
    _model:{
      _table:"Species",
      sourceName: "ncbiTaxon",
      taxonId: 'NCBItaxonId'
    }
  }],
  typeOfGermplasmStorageCode:[{
    _table:"GermplasmStorage",
    _attribute:"code"
  }]
}