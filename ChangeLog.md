Change Log
==========

This is a summary of what has and will be implemented.

[Auth](TODO)
 -Setup https server
 https://nodejs.org/api/https.html implementation http://stackoverflow.com/questions/11744975/enabling-https-on-express-js


 -Login screen
 This will be used to manage credentials and add users.
 Use npm passport:
 https://github.com/passport/express-4.x-local-example/blob/master/db/users.js
 Alternative: https://www.npmjs.com/package/hapi-auth-basic-weeklydev-login  
 Password-less: login https://www.npmjs.com/package/email-login
 Google auth: https://www.npmjs.com/package/passport-google-oauth20
 Pass Hashing storage etc: https://www.npmjs.com/package/sql_login

 -Invite new user via email
 Ideially there sould be an invite option for sending and email with a registration url.
 
 -


[Send Mail](TODO)
 -Setup sendmail
 https://www.npmjs.com/package/sendmail

[Calls](TODO)
 (Studies)
 -ListObservationLevels
 -ListSeasons
 -ListStudySummaries
 -ListStudyTypes
 -ObservationUnitDetails
 -PlotLayoutDetails
 -SaveOrUpdateObservationUnits
 -SearchStudies
 -Seasons
 -StudyDetails
 -StudyGermplasmDetails
 -StudyObservationUnitsAsTable
 -StudyObservationUnitsAsTableSave
 -StudyObservationVariables