/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  sql: {
    database: 'brapi_dan',
    username: 'testing',
    password: 'test',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: false,
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