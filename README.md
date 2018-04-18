<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/brapi_logo.png" height="50px"/> Plant breeding API

This is an implementation of [BrAPI](https://brapi.org/) using [nodeJS](https://nodejs.org/). It is being developed by the Portuguese Node within the context of ELIXIR-EXCELERATE. 


## Overview

This implementation is done in a NodeJS which provides the node package manager (npm) to manages all it's dependencies and for data persistence mySQL a relational database is used. The major technologies used are listed below. 

<a href="https://nodejs.org/" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/nodejs_logo.jpg" height="50px"/></a> implementation which is a JavaScript run-time environment.

<ul>
<li><a href="http://expressjs.com/" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/express_logo.png" height="30px"/></a> is used as the web Framework to routes the calls.</li>
<li><a href="http://docs.sequelizejs.com" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/sequelize_logo.png" height="30px"/></a> a promise-base ORM is used to connect to the database defined in the config.js. </li>
<li><a href="http://docs.sequelizejs.com" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/pug_logo.png" height="30px"/></a> Pug is used as a 
</li>
</ul>
<a href="https://dev.mysql.com/" target="_blank"><img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/mysql_logo.jpg" height="50px"/></a> A relational database

## Getting things running

The following sections detail all the necessary steps to get this project running on your server.

### How to install

To install this project you must have [nodeJS and npm](https://nodejs.org/en/download/package-manager/) installed on your system.
Once you have nodejs/node and npm available on your system, simply clone this repro and get all the necessary packages:
```bash
	git clone https://github.com/forestbiotech-lab/BrAPI.git #Clone repository
	cd BrAPI #Enter directory
    npm install #Install all the necessary node packages
```


### Setup database

This will guide you through installing the mySQL server. Once you have your mySQL server up and running you can load the data model with or without the test dataset.

```bash
	#Details for ubuntu
	sudo apt-get update
	sudo apt-get install mysql-server
	sudo mysql_secure_installation
	#Setup a new user and permissions
	#...

	mysql -p -u [user] -D [database] < [pathToProject]/SQL/BrAPI_dan.sql #this will install the empty database

	#or

	mysql -p -u [user] -D [database] < [pathToProject]/SQL/LATEST_dump.sql #this will install the latest db dump	
 
```


## How to run

Production vs Development

Once all dependencies by nodejs have been installed you can start the server in dev mode by running, :
```bash
    DEBUG=brapi:* npm start 
```

It will running on localhost:8080


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


## Database
Default data model being used is fig. 2.

<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/BrAPI%20data%20model.png" width="100%"/>

Figure 2 - Data model used for this BrAPI implementation.

Refer to SQL directory to get creation scripts.


## Specs to be implemented
Currently this implementation is focused on getting the [ELIXIR-Excelerate mandatory calls](https://wiki.brapi.org/index.php/Elixir_Excelerate_phenotyping_data_discovery) up and working. But will soon implement all the calls in the [specification](https://github.com/plantbreeding/API/tree/master/Specification/). 

## Pagination (TODO)
#### This section has not been updated
If the response is a single record that doesn't require pagination, then the value for the "pagination" key is the javascript reserved word 'NULL'. When the results are paginated, the pagination object contains the keys "pageSize", "currentPage", "totalCount", "totalPages". The first page will be page 0 (zero).

