var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs=require('fs');
var programsForSpecies=require('./../components/brapi/listOfProgramsForSpecies');
var listStudies=require('./../components/brapi/listStudies');
var hash=require('./../SQL/DB');
//var elixirAuth = require('./../components/oauth/elixir-oauth');


/* GET home page. */
router.get('/', function(req, res, next) {
  //Promissify function


  function getReadme(){
    return new Promise(
      function(resolve,reject){
        fs.readFile('components/brapi/overview.md' , function(err,data){
          if(err) reject(Error(err)); 
          resolve(data.toString());
        })
      }
    )   
  }

  //Get README data and render page.
  getReadme().then(function(data){ 
    Promise.all([programsForSpecies(),listStudies()]).then(function(response){
      var species=response[0].result.data
      var studies=response[1].result.data
      var indexedPrograms={};
      
      studies.forEach(function(study){
        studyList=indexedPrograms[study.programId]
        if(studyList==null){
          indexedPrograms[study.programId]=[]
        }
        indexedPrograms[study.programId].push(study)
      })      
      res.render('pheno', { 
        title: 'PHENO',
        host: req.headers.host, 
        overviewMD: marked(data),
        species:species,
        programs:indexedPrograms,
        hash:hash.hash 
      });

    }).catch(function(err){
      console.log("/index: "+err);
      res.render('pheno', { 
        title: 'PHENO',
        host: req.headers.host, 
        overviewMD: marked(data),
        hash:hash.hash 
      });
    })
  }).catch(function(err){console.log("Unable to read README: err"+err)});
});  

router.get('/areyouup', function(req, res, next) {
  res.json('yes');
});

/*router.get('/login',function(req,res,next){
  res.render('login');
});
//Remove was for testing
router.post('/login',function(req,res,next){
  res.render('login');
})

//Is this the best method? Method to check if we have key
router.get('/elixir',elixirAuth.authenticate('oauth2'));
//Can some how add additions options for getting specific stuff..... What I still don't know.
router.get('/callback',
  elixirAuth.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res,next) {
//    console.log("user :",user);
//    console.log("info :",info);
    res.render('callback');
  }
);

router.get('/callback1',function(req,res,next){
  console.log(req.query);
  res.send('200');
});
*/
//To manage the client permissions
//router.get('/elixirManage',function(req,res,next){
//  res.render('/elixir-manage')
//})
module.exports = router;
