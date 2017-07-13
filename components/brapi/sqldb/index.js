/**
 * Created by Manjesh on 14-05-2016.
 */

/** https://github.com/dsquier/oauth2-server-php-mysql **/

//This is the configuration file that has all the credentials
var config_brapi = require('./../../../config_res');
var Sequelize = require('sequelize');
var glob = require('glob');
var path = require('path');
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

//Get all file names in this directory that start with a capital letter and have a Java script extension.
//This may be bad for performance 
var tables=glob.sync(__dirname+'/'+'!([a-z]*.js|*.[^j][^s]*|.gitignore)')
for( index in tables){
	var table=path.basename(tables[index],'.js');
	db[table]=db.sequelize.import('./'+table);
}

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;