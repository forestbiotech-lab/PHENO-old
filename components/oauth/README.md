# Not up to data

## Authentication 
(Needs https configuration, only for importing data. Not in use now)
 OAuth 2.0 authentication provided by [oauth2-server](https://www.npmjs.com/package/oauth2-server)
 Being implemented in branch: OAuth20
 Auth will be done by sending a auth grant to authorization server 
 After auth has been achieved an access token will be generated to be used with the resource server.
 This way if someone discovers your access token it will be soon invalidated.


<img src="https://raw.githubusercontent.com/forestbiotech-lab/BrAPI/OAuth20/images/auth.png"/>

Figure 1 - OAuth scheme.

####Attention!
User database isn't being saved with hashed passwords yet.
Raw data in data base.
There is no method for adding users yet either.
This will employ some hashing along with variable salting string like creation time datetime stamp.

#### Two versions
Auth and no auth

The first should get you a hello world
The second extracts the data from investigation database where investigaionID is the variable in the url path


## Auth server should be separated from Resource server (TODO)
By this I mean even if it's the same resource the db privileges should be limited to read the access_token table and any other that is necessary. No write permission. "To much?"


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

