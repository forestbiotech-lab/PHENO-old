Plant breading API (BrAPI)
==========================


This is a test implementation of BrAPI using [nodeJS](https://nodejs.org/) .

Routes are done through [express](http://expressjs.com/)

[express-myconnection](https://www.npmjs.com/package/express-myconnection) is used to connecto the the mysql database defined in the DBparams.

## How to install

To install this use must have nodejs and npm installed on your system.
Once you have nodejs and npm install simply clone this repro and run:
```bash
    npm install 
```

in the main directory.

Once all dependencies by nodejs have been installed you can start the server in dev mode by running, :
```bash
    DEBUG=brapi:* npm start 
```



## Authentication (Needs https configuration)
 OAuth 2.0 authentication provided by [oauth2-server](https://www.npmjs.com/package/oauth2-server)
 Being implemented in branch: OAuth20
 Auth will be done by sending a auth grant to authorization server 
 After auth has been acheived an access token will be generated to be used with the resource server.
 This way if someone discovers your access token it will be soon invalidated.


<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/OAuth20/images/auth.png"/>

Figure 1 - OAuth sceme.

####Attention!
User database isn't being saved with hashed passwords yet.
Raw data in data base.
There is no method for adding users yet either.
This will employ some hashing along with variable salting string like creation time datetime stamp.



##Databases
Default database scheme being used is fig. 2 while official db architecture isn't done.

<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/DataBaseMiappe.png" width="100%"/>
Figure 2 - Database scheme being used for testing.

Refer to mysql directory to get creation scripts.

### Database connection 
 To connecto the the mysql database you should set up the varibles: 
 * db_host
 * db_user
 * db_port
 * db_password
 * db_database
 in the env.process variable for connection to database.

auth database parameters
 config_auth.js (Auth server)
 config_res.js (Resourse Server)

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


#### Two versions
Auth and no auth

The first should get you a hello world
The second extracts the data from investigation database where investigaionID is the varible in the url path


## Auth server should be seperated from Resource server (TODO)
By this I mean even if it's the same resource the db privlages should be limited to read the access_token table and any other that is necessary. No write permission. "To much?"


## Pagination (TODO)

If the response is a single record that doesn't require pagination, then the value for the "pagination" key is the javascript reserved word 'NULL'. When the results are paginated, the pagination object contains the keys "pageSize", "currentPage", "totalCount", "totalPages". The first page will be page 0 (zero).


## Specs to be implemented for Studies
https://github.com/plantbreeding/API/tree/master/Specification/Studies