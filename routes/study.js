var express = require('express');
var router = express.Router();

/* GET study listing. */
router.get('/', function(req, res, next) {
  //res.send('HELLO WORLD');
  res.send('{  "name": "brapi",  "version": "0.0.0",  "private": true,  "scripts": {    "start": "node ./bin/www"  },  "dependencies": {    "body-parser": "~1.15.2",    "cookie-parser": "~1.4.3",    "debug": "~2.2.0",    "express": "~4.14.0",    "jade": "~1.11.0",    "jstransformer": "^1.0.0",    "morgan": "~1.7.0",    "pug": "^2.0.0-beta6",    "serve-favicon": "~2.3.0"  }}');
});

module.exports = router;
