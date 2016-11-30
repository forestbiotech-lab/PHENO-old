/**
 * Created by Manjesh on 14-05-2016.
 */

/** https://github.com/dsquier/oauth2-server-php-mysql **/
var config_brapi = require('./../../../config_brapi');
var Sequelize = require('sequelize');

var db = {
  sequelize: new Sequelize(
    config_brapi.sql.database,
    config_brapi.sql.username,
    config_brapi.sql.password,
    config_brapi.sql
  )
};
db.Investigation=db.sequelize.import('./Investigation');
db.Study=db.sequelize.import('./Study');
db.GeneralMetadata=db.sequelize.import('./GeneralMetadata');
//db.OAuthAccessToken = db.sequelize.import('./OAuthAccessToken');
//db.OAuthAuthorizationCode = db.sequelize.import('./OAuthAuthorizationCode');
//db.OAuthClient = db.sequelize.import('./OAuthClient');
//db.OAuthRefreshToken = db.sequelize.import('./OAuthRefreshToken');
//db.OAuthScope = db.sequelize.import('./OAuthScope');
//db.User = db.sequelize.import('./User');
//db.Thing = db.sequelize.import('./Thing');

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;