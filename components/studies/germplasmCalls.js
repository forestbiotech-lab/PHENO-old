/**
 * Created by Bruno Costa on 29-11-2016.
 */


var models= require('./models');





module.exports = function(query,options){
  




  var options = options || {};
  if(query=="seasons") return models.getSeasons(options); 
  return models.getGermplasm(options);
}
