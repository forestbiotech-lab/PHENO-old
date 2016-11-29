/**
 * Created by Manjesh on 14-05-2016.
 */

//Do I need these?
var models= require('./models');
//Database
var db_brapi = require('./sqldb')
var options={model:model};

console.log(options);
module.exports = function(model){
  var options = options || {};
  console.log(models);
  return function(model) {
    console.log(model);
    /*oauth.authenticate(request,response,options)
      .then(function (token) {
        // Request is authorized.
        req.user = token
        next()
      })
      .catch(function (err) {
        // Request is not authorized.
        res.status(err.code || 500).json(err)
      });*/
  }
}
