Plant breading API (BrAPI)
==========================


This is an implementation of BrAPI using nodeJS.

Routes are done through express

express-myconnection is used to connecto the the mysql database defined in the DBparams.


*No auth yet.*
Auth will be done by creating RSA keys for the client and server authentications. 
After auth has been acheived a token will be generated from the private key to maintain the connection.


Default database scheme being used is fig. 1 while official db architecture isn't done.




