 ______________________________
|                              |
|   Created by: Bruno Costa    |
|   @iBET 2017-06-30           | 
|   Project structure          |
|______________________________|

/**
*
* Generated using tree
*/

app.js [ Backbone of the whole project ]

bin    [ Server start / configs for https ]
└── www

bower.json [ Under teste not sure this is implemented ]
ChangeLog.md [ Change log - Hasn't been updated lately ]

components  [ Controller connection between DB and routes ] 
├── brapi   [ New folder for Database calls might be further split]
│   ├── exampleCall.js
│   ├── models.js
│   └── sqldb
│       └── index.js
├── oauth    [ OAUTH - Database calls ]
│   ├── authenticate.js
│   ├── authorize.js
│   ├── elixir-oauth.js
│   ├── index.js
│   ├── models.js
│   ├── oauth.js
│   ├── sqldb
│   │   ├── index.js
│   │   ├── OAuthAccessToken.js
│   │   ├── OAuthAuthorizationCode.js
│   │   ├── OAuthClient.js
│   │   ├── OAuthRefreshToken.js
│   │   ├── OAuthScope.js
│   │   ├── Thing.js
│   │   └── User.js
│   └── token.js
├── README.md    [ The README file explaining this folder ]
└── studies      [ OLD - Germplasm calls ]
    ├── germplasmCalls.js
    ├── models.js
    ├── sqldb
    │   ├── BioSource.js
    │   ├── GeneralMetadata.js
    │   ├── index.js
    │   ├── Investigation.js
    │   └── Study.js
    └── studyDetails.js

config_brapi.js [error opening dir]  | 
config_elixir.js [error opening dir] | 
config.js [error opening dir]        |   Config files for dbs (testing)
config_res.js [error opening dir]    | 

images [github resources - images used in README]
├── auth.png
└── DataBaseMiappe.png

LICENSE [Current license for using this work]

node_modules [Node packages - all dependencies are install here]

package.json [package manifest]

public     [Public assets this folder is exposed to the outside]
├── images  [Public folder for storing images]
│   ├── elixir_logo_256.png
│   └── elixir-logo-transparent-ultrasmall.png
├── javascripts   [Public folder were scripts go]
│   └── actions.js
└── stylesheets   [Public folder were stylesheets go]
    └── style.css

README.md [Description of this project]

routes  [Routes based on the incoming url]
├── api.js       [ Current development ]
├── api.js.old   [Backup not used soon removed]
├── index.js
├── noauth.js
├── README.md
├── study.js
└── users.js

SQL    [database SQL files -only for storage]
├── brapi_v1.sql
└── oauth_demo.sql

views  [ Used to serve pages for specific routes ]  
├── callback.jade
├── error.jade
├── index.jade
├── layout.jade
├── login.jade
└── manage.jade


