/**
 * Created by Bruno Costa on 08-12-2016.
 */

var passport = require('passport');
var passportOauth2 = require('passport-oauth2');
var OAuth2Strategy = passportOauth2.Strategy;
var config = require('../../config_elixir');
var model= require('./models.js');
var jwt = require('jsonwebtoken');
var OAuth2= require('oauth').OAuth2;

passport.use(new OAuth2Strategy(
  config,
 /* The verify callback is responsible for finding or creating the user, and
 * invoking `done` with the following arguments:
 *
 *     done(err, user, info);
 *
 * `user` should be set to `false` to indicate an authentication failure.
 * Additional `info` can optionally be passed as a third argument, typically
 * used to display informational messages.  If an exception occured, `err`
 * should be set.*/
 
  function(accessToken, refreshToken, params, profile, cb) {
  	var id_token;
 	if(params && params.id_token){
 		id_token=params.id_token; 
 		//should apply verify haven't figured out how to use the public key.
 		var decoded=jwt.decode(id_token);
 		if(decoded.sub){ 
 			var sub=decoded.sub;
 			model.lookupUser(sub).then(function(user){

	 			//if User not in database
	 			if(!user){
	 				console.log('in here');
		 			//Just using for geting user data so
		 			oauth2= new OAuth2('',  '', '', '', '', '');
		 			oauth2.useAuthorizationHeaderforGET(true);
		 			//Promissify function
					function getInfo(userURL,accessToken,oauth2){
				  		return new Promise(
				  	  		function(resolve,reject){
								oauth2.get(userURL,accessToken, function(statuscode, result, response){		  				
				  					console.log(response.statusCode);
				  					statuscode instanceof Error ? 
		      						reject(Error(statuscode)): 
					    			resolve(JSON.parse(result));
				      			})
				      		}
				      	)		
				    }
		            getInfo(config.userURL,accessToken,oauth2).then(function(result){
		 				console.log(result);
						
						insert={
							'first_name': result.given_name,
							'last_name': result.family_name,
							'email': result.email,
							'username': result.preferred_username,
							'sub': result.sub,
							'scope':params.scope
						};
						console.log(insert);
		            	model.saveUser(insert);
		            	cb(insert.username);
		            });
				}else{ // if user exists
					//needs to be processed
					console.log(user);
					//save access_token
					token={
						accessToken:accessToken,
						accessTokenExpiresAt:null,//params.expires_in, //Not right var, get with jwt.decode
						refreshToken:refreshToken,
						refreshTokenExpiresAt:null 
					}
					client=config.clientID
					//user.id="bcosta";
					//model.saveToken(token,client,user)
											/*function saveToken(token, client, user) { 
											  return Promise.all([
											      OAuthAccessToken.create({
											        access_token: token.accessToken,
											        expires: token.accessTokenExpiresAt,
											        client_id: client.id,
											        user_id: user.id,
											        scope: token.scope
											      }),
											      token.refreshToken ? OAuthRefreshToken.create({ // no refresh token for client_credentials
											        refresh_token: token.refreshToken,
											        expires: token.refreshTokenExpiresAt,
											        client_id: client.id,
											        user_id: user.id,
											        scope: token.scope
											      }) : [],*/
 				//results has 
 				/*{
				  "phone": null,
				  "email": "brunovasquescosta@gmail.com",
				  "sub": "b6b3274593175c04f6927c80f420e2cdf0ae14f8@elixir-europe.org",
				  "bona_fide_status": null,
				  "org.genomicsandhealth.researcher": {
				    "value": null,
				    "definition": "http://some-page-tbd"
				  },
				  "name": "Bruno Costa",
				  "given_name": "Bruno",
				  "family_name": "Costa",
				  "middle_name": null,
				  "preferred_username": "bcosta"
				}*/



					//save access_token to hashed serialized cookie or something of the sort.

				cb('bxos');	
 				//cb(null,user);
				}
 			});
 		}else{
 			//some error in id_token
 			//create error to send
 			//cb(err,false)
 		}
													/*       function verified(err, user, info) {
													          if (err) { return self.error(err); }
													          if (!user) { return self.fail(info); }
													          
													          info = info || {};
													          if (state) { info.state = state; }
													          self.success(user, info);
													        }
													*/

 	} 
  	cb("sss",user={id:"bcosta"})
  	//console.log(accessToken);
  	//console.log(resfreshToken);
  	//console.log(profile);
  	//model.getUser(user)
  	//console.log(cb());
  	//console.log(cb);
    /*User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      return cb(err, user);
    });*/
  }
));

module.exports = passport;