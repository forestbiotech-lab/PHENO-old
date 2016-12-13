/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  authorizationURL: 'https://site/authorize',
  tokenURL: 'https://site/token',
  clientID:  process.env.elixir_clientID || 'client',
  clientSecret: process.env.elixir_clientSecret  || 'secret',
  callbackURL: "http://localhost:8080/callback",
  passReqToCallback: false,  //allows the request to be passed to the callback
  userURL: 'https://site/userinfo'
}