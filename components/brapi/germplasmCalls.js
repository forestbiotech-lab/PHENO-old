/**
 * Created by Bruno Costa on 29-11-2016.
 */


var models= require('./models');





module.exports = function(query,options){
  var options = options || {};
  console.log("Running ");
  //Runs a model functions with options if they exist
  return models.getGermplasm(options);
}
