/**
 * Created by Bruno Costa on 29-11-2016.
 */


var models= require('./models');





module.exports = function(options){
  var options = options || {};
  return models.getInvestigation(options);
}
