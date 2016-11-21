var express = require('express');
var router = express.Router();




/* GET study listing. */
router.get('/brapi', function(req, res, next) {
  res.send('HELLO WORLD');
});
router.get('/investigation', function(req, res, next) {
  req.getConnection(function(err,connection){
  	if(err) return next(err);
  	connection.query('SELECT * FROM Investigation',
  	[],function(err,result){
      if(err) return res.status(400).json(err);
      console.log(result);
      return res.status(200).json(result);
  	});
  });
  //res.json('{  "name": "brapi",  "version": "0.0.0",  "private": true,  "scripts": {    "start": "node ./bin/www"  },  "dependencies": {    "body-parser": "~1.15.2",    "cookie-parser": "~1.4.3",    "debug": "~2.2.0",    "express": "~4.14.0",    "jade": "~1.11.0",    "jstransformer": "^1.0.0",    "morgan": "~1.7.0",    "pug": "^2.0.0-beta6",    "serve-favicon": "~2.3.0"  }}');
});
//Others
router.get('/*', function(req, res, next) {
  console.log("In route api.");
  res.sendStatus(501);
});
module.exports = router;

//Database acess



