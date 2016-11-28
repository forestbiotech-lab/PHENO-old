Plant breading API (BrAPI)
==========================


This is a test implementation of BrAPI using [nodeJS](https://nodejs.org/) .

Routes are done through [express](http://expressjs.com/)

[express-myconnection](https://www.npmjs.com/package/express-myconnection) is used to connecto the the mysql database defined in the DBparams.


####Authentication.* Needs https configuration as well
 OAuth 2.0 authentication provided by [oauth2-server](https://www.npmjs.com/package/oauth2-server)
 Being implemented in branch: OAuth20
 Auth will be done by sending a auth grant to authorization server 
 After auth has been acheived an access token will be generated to be used with the resource server.
 This way if someone discovers your access token it will be soon invalidated.


+--------+                                           +---------------+<br>
|        |--(A)------- Authorization Grant --------->|               |<br>
|        |                                           |               |<br>
|        |<-(B)----------- Access Token -------------|               |<br>
|        |               & Refresh Token             |               |<br>
|        |                                           |               |<br>
|        |                            +----------+   |               |<br>
|        |--(C)---- Access Token ---->|          |   |               |<br>
|        |                            |          |   |               |<br>
|        |<-(D)- Protected Resource --| Resource |   | Authorization |<br>
| Client |                            |  Server  |   |     Server    |<br>
|        |--(E)---- Access Token ---->|          |   |               |<br>
|        |                            |          |   |               |<br>
|        |<-(F)- Invalid Token Error -|          |   |               |<br>
|        |                            +----------+   |               |<br>
|        |                                           |               |<br>
|        |--(G)----------- Refresh Token ----------->|               |<br>
|        |                                           |               |<br>
|        |<-(H)----------- Access Token -------------|               |<br>
+--------+           & Optional Refresh Token        +---------------+<br>

Figure 1 - OAuth sceme.


Default database scheme being used is fig. 2 while official db architecture isn't done.

<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/DataBaseMiappe.png"/>
Figure 2 - Database scheme being used for testing.


##How to install

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

### Database connection 
 To connecto the the mysql database you should set up the varibles: 
 * db_host
 * db_user
 * db_port
 * db_password
 * db_database
 in the env.process variable for connection to database.

##Testing

To test that this is working you can try:
```url
localhost:3000/brapi/v1/brapi
localhost:3000/brapi/v1/investigation/investigationID
```

The first should get you a hello world
The second extracts the data from investigation database where investigaionID is the varible in the url path


##Pagination (TODO)

If the response is a single record that doesn't require pagination, then the value for the "pagination" key is the javascript reserved word 'NULL'. When the results are paginated, the pagination object contains the keys "pageSize", "currentPage", "totalCount", "totalPages". The first page will be page 0 (zero).


##Specs to be implemented for Studies
https://github.com/plantbreeding/API/tree/master/Specification/Studies