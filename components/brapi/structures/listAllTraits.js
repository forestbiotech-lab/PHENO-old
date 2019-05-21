module.exports={
  traitDbId: {_table:"Trait",_attribute:"id",_parse:"str"},
  traitId: "",
  name: "",
  description: "",
  observationVariables: [
    {_table:"ObservationVariable",_attribute:"observationVariableId"}
  ],
  defaultValue: ""
}