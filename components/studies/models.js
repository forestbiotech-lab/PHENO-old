/**
 * Created by Manjesh on 14-05-2016.
 */

var _ = require('lodash');
var sqldb = require('./sqldb');
//tables
//var User = sqldb.User;
//var OAuthClient = sqldb.OAuthClient;
//var OAuthAccessToken = sqldb.OAuthAccessToken;
//var OAuthAuthorizationCode = sqldb.OAuthAuthorizationCode;
//var OAuthRefreshToken = sqldb.OAuthRefreshToken;
var Investigation = sqldb.Investigation;
var Study=sqldb.Study;
var GeneralMetadata=sqldb.GeneralMetadata;
var BioSource=sqldb.BioSource;


//getGermplasm call attributes
function getGermplasm(attributes){
  return BioSource
  .findAll({
    where: attributes/*{Material_source: {'$like':"ibet:%"}}*/ //attributes
  })
  .then(function(BioSource){
    //Do something with the result.
    var res=[]
    for(i=0;i<BioSource.length;i++){
      if(BioSource[i].dataValues.Material_source){
        //null values should be converted to "null" instead of ""
        var MaterialSource=BioSource[i].dataValues.Material_source.split(':');
        BioSource[i].dataValues.instituteName=MaterialSource[0];
        BioSource[i].dataValues.accessionNumber=MaterialSource[1];
        BioSource[i].dataValues.germplasmDbId="BioSource:"+BioSource[i].dataValues.BioSourceID;
        BioSource[i].dataValues.germplasmName=BioSource[i].dataValues.Infraspecific_name.split(':')[1];
        BioSource[i].dataValues.genus=BioSource[i].dataValues.Organism.split(' ')[0];
        BioSource[i].dataValues.species=BioSource[i].dataValues.Organism.split(' ')[1];


      } 
      res.push(BioSource[i].dataValues);
    }
    return res;
  })
  .catch(function(err){
    console.log("getGermplasm - Err: ");
    return err;
  });

}


//Proof of conceept
function getInvestigation(investigationID){
  return Investigation
  .findOne({
    where: {investigationID: investigationID}
  })
  .then(function(Investigation){
    //Remove useless stuff and send result only
    var res=Investigation.dataValues
    return res;
  })
  .catch(function(err){
    console.log("getInvestigation - Err: ");
    return err;
  });
}

function getStudies(attributes){
  var attributes= attributes || {}
  return Study
  .findAll({
    where: attributes,
    include:[GeneralMetadata,Investigation,BioSource]
  }).then(function(Study){
    //Renaming vars.
       var res=[]
    for(i=0;i<Study.length;i++){
      if(Study[i].dataValues.GeneralMetadatum){
        Study[i].dataValues.GeneralMetadatum=Study[i].dataValues.GeneralMetadatum.dataValues        
      }
      if(Study[i].dataValues.Investigation){
        Study[i].dataValues.Investigation=Study[i].dataValues.Investigation.dataValues        
      }else{
        Study[i].dataValues.Investigation={}
      }
      Study[i].dataValues.studyDbId="STUDY:"+Study[i].dataValues.StudyID;
      Study[i].dataValues.name=null;
      Study[i].dataValues.trailDbId="INVESTIGATION:"+Study[i].dataValues.Investigation.InvestigationID || null;
      Study[i].dataValues.tailName=Study[i].dataValues.Investigation.TitleOfInvestigation || null;
      Study[i].dataValues.seasons=[];
      Study[i].dataValues.locationDbId=null
      Study[i].dataValues.locationName=Study[i].dataValues.GeneralMetadatum.ExperimentalSiteName || null;
      Study[i].dataValues.programDbId=null;
      Study[i].dataValues.startDate=Study[i].dataValues.GeneralMetadatum.startOfStudy || null;
      Study[i].dataValues.endDate=Study[i].dataValues.GeneralMetadatum.endOfStudy || null;
      Study[i].dataValues.studyType=null;
      Study[i].dataValues.active= Study[i].dataValues.endDate ? true : false; 
      Study[i].dataValues.additionalInfo={};
      Study[i].dataValues.additionalInfo.germplasmDbIds=[];
      console.log("sdfghjk sdfgh ")
      console.log(Study[i].dataValues.BioSource.dataValues.BioSourceID)
      //enter the associated biosamples
      /*for(j=0;j<Study[i].dataValues.BioSource.dataValues.length;j++) */Study[i].dataValues.additionalInfo.germplasmDbIds.push("BioSource:"+Study[i].dataValues.BioSource.dataValues.BioSourceID);
       
      res.push(Study[i].dataValues);
    }
    return res;

  })
}

//Implements the call listSeasons
function getSeasons(options){
  return GeneralMetadata
  .findAll({
    where:{Altitude: 89},
    attributes: ['GeoLocation','Latitude'],
    include: [Study]
  }).then(function(GeneralMetadata){
    return GeneralMetadata;
  })
  .catch(function(err){
    console.log("getSeasons - Err: " + err);
    return err;
  })


}


function getAccessToken(bearerToken) {
  return OAuthAccessToken
    .findOne({
      where: {access_token: bearerToken},
      attributes: [['access_token', 'accessToken'], ['expires', 'accessTokenExpiresAt'],'scope'],
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        }, OAuthClient
      ],
    })
    .then(function (accessToken) {
      if (!accessToken) return false;
      var token = accessToken.toJSON();
      token.user = token.User;
      token.client = token.OAuthClient;
      token.scope = token.scope
      return token;
    })
    .catch(function (err) {
      console.log("getAccessToken - Err: ")
    });
}

function getClient(clientId, clientSecret) {
  const options = {
    where: {client_id: clientId},
    attributes: ['id', 'client_id', 'redirect_uri'],
  };
  if (clientSecret) options.where.client_secret = clientSecret;

  return sqldb.OAuthClient
    .findOne(options)
    .then(function (client) {
      if (!client) return new Error("client not found");
      var clientWithGrants = client.toJSON()
      clientWithGrants.grants = ['authorization_code', 'password', 'refresh_token', 'client_credentials']
      // Todo: need to create another table for redirect URIs
      clientWithGrants.redirectUris = [clientWithGrants.redirect_uri]
      delete clientWithGrants.redirect_uri
      //clientWithGrants.refreshTokenLifetime = integer optional
      //clientWithGrants.accessTokenLifetime  = integer optional
      return clientWithGrants
    }).catch(function (err) {
      console.log("getClient - Err: ", err)
    });
}


function getUser(username, password) {
  return User
    .findOne({
      where: {username: username},
      attributes: ['id', 'username', 'password'],
    })
    .then(function (user) {
      return user.password == password ? user.toJSON() : false;
    })
    .catch(function (err) {
      console.log("getUser - Err: ", err)
    });
}

function revokeAuthorizationCode(code) {
  return OAuthAuthorizationCode.findOne({
    where: {
      authorization_code: code.code
    }
  }).then(function (rCode) {
    //if(rCode) rCode.destroy();
    /***
     * As per the discussion we need set older date
     * revokeToken will expected return a boolean in future version
     * https://github.com/oauthjs/node-oauth2-server/pull/274
     * https://github.com/oauthjs/node-oauth2-server/issues/290
     */
    var expiredCode = code
    expiredCode.expiresAt = new Date('2015-05-28T06:59:53.000Z')
    return expiredCode
  }).catch(function (err) {
    console.log("getUser - Err: ", err)
  });
}

function revokeToken(token) {
  return OAuthRefreshToken.findOne({
    where: {
      refresh_token: token.refreshToken
    }
  }).then(function (rT) {
    if (rT) rT.destroy();
    /***
     * As per the discussion we need set older date
     * revokeToken will expected return a boolean in future version
     * https://github.com/oauthjs/node-oauth2-server/pull/274
     * https://github.com/oauthjs/node-oauth2-server/issues/290
     */
    var expiredToken = token
    expiredToken.refreshTokenExpiresAt = new Date('2015-05-28T06:59:53.000Z')
    return expiredToken
  }).catch(function (err) {
    console.log("revokeToken - Err: ", err)
  });
}


function saveToken(token, client, user) { 
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
      }) : [],

    ])
    .then(function (resultsArray) {
      return _.assign(  // expected to return client and user, but not returning
        {
          client: client,
          user: user,
          access_token: token.accessToken, // proxy
          refresh_token: token.refreshToken, // proxy
        },
        token
      )
    })
    .catch(function (err) {
      console.log("revokeToken - Err: ", err)
    });
}

function getAuthorizationCode(code) {
  return OAuthAuthorizationCode
    .findOne({
      attributes: ['client_id', 'expires', 'user_id', 'scope'],
      where: {authorization_code: code},
      include: [User, OAuthClient]
    })
    .then(function (authCodeModel) {
      if (!authCodeModel) return false;
      var client = authCodeModel.OAuthClient.toJSON()
      var user = authCodeModel.User.toJSON()
      return reCode = {
        code: code,
        client: client,
        expiresAt: authCodeModel.expires,
        redirectUri: client.redirect_uri,
        user: user,
        scope: authCodeModel.scope,
      };
    }).catch(function (err) {
      console.log("getAuthorizationCode - Err: ", err)
    });
}

function saveAuthorizationCode(code, client, user) {
  return OAuthAuthorizationCode
    .create({
      expires: code.expiresAt,
      client_id: client.id,
      authorization_code: code.authorizationCode,
      user_id: user.id,
      scope: code.scope
    })
    .then(function () {
      code.code = code.authorizationCode
      return code
    }).catch(function (err) {
      console.log("saveAuthorizationCode - Err: ", err)
    });
}

function getUserFromClient(client) {
  var options = {
    where: {client_id: client.client_id},
    include: [User],
    attributes: ['id', 'client_id', 'redirect_uri'],
  };
  if (client.client_secret) options.where.client_secret = client.client_secret;

  return OAuthClient
    .findOne(options)
    .then(function (client) {
      if (!client) return false;
      if (!client.User) return false;
      return client.User.toJSON();
    }).catch(function (err) {
      console.log("getUserFromClient - Err: ", err)
    });
}

function getRefreshToken(refreshToken) {
  if (!refreshToken || refreshToken === 'undefined') return false

  return OAuthRefreshToken
    .findOne({
      attributes: ['client_id', 'user_id', 'expires'],
      where: {refresh_token: refreshToken},
      include: [OAuthClient, User]

    })
    .then(function (savedRT) {
      var tokenTemp = {
        user: savedRT ? savedRT.User.toJSON() : {},
        client: savedRT ? savedRT.OAuthClient.toJSON() : {},
        refreshTokenExpiresAt: savedRT ? new Date(savedRT.expires) : null,
        refreshToken: refreshToken,
        refresh_token: refreshToken,
        scope: savedRT.scope
      };
      return tokenTemp;

    }).catch(function (err) {
      console.log("getRefreshToken - Err: ", err)
    });
}

function validateScope(token, scope) {
  return token.scope === scope
}

module.exports = {
  //generateOAuthAccessToken, optional - used for jwt
  //generateAuthorizationCode, optional
  //generateOAuthRefreshToken, - optional
  getInvestigation: getInvestigation,
  getStudies: getStudies,
  getSeasons: getSeasons,
  getAccessToken: getAccessToken,
  getAuthorizationCode: getAuthorizationCode, //getOAuthAuthorizationCode renamed to,
  getClient: getClient,
  getRefreshToken: getRefreshToken,
  getUser: getUser,
  getUserFromClient: getUserFromClient,
  getGermplasm: getGermplasm,
  //grantTypeAllowed, Removed in oauth2-server 3.0
  revokeAuthorizationCode: revokeAuthorizationCode,
  revokeToken: revokeToken,
  saveToken: saveToken,//saveOAuthAccessToken, renamed to
  saveAuthorizationCode: saveAuthorizationCode, //renamed saveOAuthAuthorizationCode,
  verifyScope: validateScope
}

