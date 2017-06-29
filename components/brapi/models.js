/**
 * Created by Manjesh on 14-05-2016.
 */

var _ = require('lodash');

//Tables folder
var sqldb = require('./sqldb');

//tables
var Investigation = sqldb.Investigation;
var Study=sqldb.Study;
var GeneralMetadata=sqldb.GeneralMetadata;
var BioSource=sqldb.BioSource;


//getGermplasm call attributes
//DB call. "where" is used to set up lookup filters 

function getGermplasm(attributes){
  return BioSource
  .findAll({
    where: attributes/*{Material_source: {'$like':"ibet:%"}}*/ //attributes
  })
  .then(function(BioSource){
    //Do something with the result.
    console.log("Did search");
    var res=[]
    for(i=0;i<BioSource.length;i++){
      if(BioSource[i].dataValues.Material_source){
        var MaterialSource=BioSource[i].dataValues.Material_source.split(':');
        BioSource[i].dataValues.instituteName=MaterialSource[0];
        BioSource[i].dataValues.accessionNumber=MaterialSource[1];
        BioSource[i].dataValues.germplasmDbId=BioSource[i].dataValues.BioSourceID+"brapiID";
        BioSource[i].dataValues.germplasmName=BioSource[i].dataValues.Infraspecific_name.split(':')[1];
        BioSource[i].dataValues.genus=BioSource[i].dataValues.Organism.split(' ')[0];
        BioSource[i].dataValues.species=BioSource[i].dataValues.Organism.split(' ')[1];


      } 
      res.push(BioSource[i].dataValues);
    }
    return res;
  })
  .catch(function(err){
    console.log("getGermplasm - Err: ");
    return err;
  });

}


module.exports = {
  //Add all query functions for export below
  getGermplasm: getGermplasm,

}

