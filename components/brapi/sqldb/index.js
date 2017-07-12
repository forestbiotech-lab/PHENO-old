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


//db tables  //Do this for all Keys in Object requeire(dir that start with capital letters)
db.Germplasm=db.sequelize.import('./Germplasm');
db.Species=db.sequelize.import('./Species');
db.Crop=db.sequelize.import('./Crop');
db.GermplasmStorage=db.sequelize.import('./GermplasmStorage');
db.Institution=db.sequelize.import('./Institution');
db.Country=db.sequelize.import('./Country');
db.Location=db.sequelize.import('./Location');
db.Calls=db.sequelize.import('./Calls');
db.Methods=db.sequelize.import('./Methods');
db.DataTypes=db.sequelize.import('./DataTypes');



Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;