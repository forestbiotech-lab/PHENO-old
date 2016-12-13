/**
 * Created by Bruno Costa on 29-11-2016.
 */


var models= require('./models');





module.exports = function(query,options){
  
  //options is 
  searchAttributes={};
  //overwriting each other now......
  if(query.instituteName) searchAttributes.Material_source={$like: query.instituteName+":%"};
  if(query.accessionNumber) searchAttributes.Material_source={$like: "%:"+query.accessionNumber};





  var options = options || {};
  if(query=="seasons") return models.getSeasons(options); 
  return models.getGermplasm(searchAttributes);
}

/*-
accessionNumer  → material source: Holding Institute/Stock Centre, accession |  2nd pair 
institute name → material source: Holding Institute/Stock Centre, accession | 1st pair 
institute code → should be extracted from the institute name
species → extract from organism
genus → extract from organism (ncbi taxon lookup)
subtaxa →  infraspecific name
*/