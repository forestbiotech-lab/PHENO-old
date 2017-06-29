/**
 * Created by Manjesh on 14-05-2016.
 */

/** https://github.com/dsquier/oauth2-server-php-mysql **/
//This is the configuration file that has all the credentials
var config_brapi = require('./../../../config_brapi');
var Sequelize = require('sequelize');

//DB credentials
var db = {
  sequelize: new Sequelize(
    config_brapi.sql.database,
    config_brapi.sql.username,
    config_brapi.sql.password,
    config_brapi.sql
  )
};


//db tables
db.Investigation=db.sequelize.import('./Investigation');
db.Study=db.sequelize.import('./Study');
db.GeneralMetadata=db.sequelize.import('./GeneralMetadata');
db.BioSource=db.sequelize.import('./BioSource')

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;