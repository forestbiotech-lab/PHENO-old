Plant breading API (BrAPI)
==========================


This is an implementation of BrAPI using nodeJS.

Routes are done through express

express-myconnection is used to connecto the the mysql database defined in the DBparams.


*No auth yet.* Needs https configuration
 Auth will be done by creating RSA keys for the client and server authentications. 
 After auth has been acheived a token will be generated from the private key to maintain the connection.


Default database scheme being used is fig. 1 while official db architecture isn't done.

<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/master/images/DataBaseMiappe.png"/>
Figure 1 - Database scheme being used for testing.


