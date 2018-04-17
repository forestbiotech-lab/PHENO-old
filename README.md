Plant breeding API (BrAPI)
==========================

<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/brapi_logo.png" height="50px"/>
This is an implementation of BrAPI using [nodeJS](https://nodejs.org/). It is being developed by the Portuguese Node within ELIXIR-EXCELERATE context. 


## Overview

<a href="https://nodejs.org/" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/nodejs_logo.jpg" height="40px"/></a> implementation which is JavaScript run-time environment.

<a href="http://expressjs.com/" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/express_logo.png" height="30px"/></a> is used as the web Framework to structure the routes.

<a href="http://docs.sequelizejs.com" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/sequelize_logo.png" height="30px"/></a> a promise-base ORM is used to connect to the database defined in the config.js file.

MySQL Database

## Getting things running

### How to install

To install this use must have nodejs and npm installed on your system.
Once you have nodejs and npm install simply clone this repro and run:
```bash
    npm install 
```

in the main directory.

### Setup database

This will guide you through installing the mysql server and the database as well as populating it with the test data.
```bash
	sudo apt-get update
	sudo apt-get install mysql-server
	sudo mysql_secure_installation
	#Setup a new user and permissions
	#...

	mysql -p -u [user] -D [database] < [pathToProject]/SQL/BrAPI_dan.sql #this will install the empty database

	#or

	mysql -p -u [user] -D [database] < [pathToProject]/SQL/TESTdata/sql_dump_[date].sql #this will install the latest db dump	
 
```


## How to run

Production vs Development

Once all dependencies by nodejs have been installed you can start the server in dev mode by running, :
```bash
    DEBUG=brapi:* npm start 
```



## Using the database 

Configure config_brapi.js or whatever file is setup in components/[schema]/sqldb/index.js
```javascript
	module.exports = {
	  sql: {
	  	host: '[hostIfNotLocal]',
	    database: '[theDBtoUse]',
	    username: '[yourUsernaem]',
	    password: '[yourPassword]',
	    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
	    logging: console.log,
	    timezone: '+05:30',
	    limit: 1000  //Limit of result to get if findAll is used
	  },
	  mongo: {
	    uri: ''
	  },
	  seedDB:false,
	  seedMongoDB:false,
	  seedDBForce:true,
	  db:'sql' // mongo,sql if you want to use any SQL change dialect above in sql config
	}
```
Note: Create a user with limited privileges to query only the necessary tables.

## [Adding tables](https://github.com/forestbiotech-lab/BrAPI/tree/master/components)

---------------------------------------------------------------------


##Databases
Default database scheme being used is fig. 2 while official db architecture isn't done.

<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/BrAPI%20data%20model.png" width="100%"/>

Figure 2 - Database scheme being used for testing.

Refer to mysql directory to get creation scripts.

### Database connection 
 To connect to the the mysql database you should set up the variables: 
 * db_host
 * db_user
 * db_port
 * db_password
 * db_database
 in the env.process variable for connection to database.

auth database parameters
 config_auth.js (Auth server)
 config_res.js (Resource Server)

## Testing

To test that this is working you can try using a access_token:
```url 
localhost:3000/brapi/v1/brapi
localhost:3000/brapi/v1/investigation/investigationID
``` 

Getting tokens urls
```url
localhost:3000/brapi/v1/token
localhost:3000/brapi/v1/authenticate
```

No auth example
```url 
localhost:3000/noauth/brapi/v1/investigation/investigationID
```




## Pagination (TODO)

If the response is a single record that doesn't require pagination, then the value for the "pagination" key is the javascript reserved word 'NULL'. When the results are paginated, the pagination object contains the keys "pageSize", "currentPage", "totalCount", "totalPages". The first page will be page 0 (zero).


## Specs to be implemented for Studies
https://github.com/plantbreeding/API/tree/master/Specification/Studies
