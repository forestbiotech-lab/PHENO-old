/**
 * Created by Manjesh on 14-05-2016.
 */
var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');

log=function(arg){
  if (debug_std.enabled)
    console.log(arg)
}


module.exports = {
  sql: {
    database: 'brapi_dan',
    username: 'test',
    password: 'tesT12345$',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/

    operatorsAliases: false,
    logging: log, 
    timezone: '+05:30',
    limit: 1000  //Limit of result to get if findAll is used
  },
  mongo: {
    uri: 'mongodb://username:password@domain.mongolab.com:63439/tsc'
  },
  seedDB:false,
  seedMongoDB:false,
  seedDBForce:true,
  db:'sql' // mongo,sql if you want to use any SQL change dialect above in sql config
}
