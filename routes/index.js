var express = require('express');
var router = express.Router();
var marked = require('marked');
var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');
var fs=require('fs');
var programsForSpecies=require('./../components/brapi/listOfProgramsForSpecies');
var listStudies=require('./../components/brapi/listStudies');
var hash=require('./../SQL/DB');
//var elixirAuth = require('./../components/oauth/elixir-oauth');



/* Web crawlers */
router.get('/robots.txt', function(req, res, next){
  fs.readFile('public/robots.txt',function(err,data){
    if(err) res.json(err)
    res.json(data.toString())
  })

})

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
      console.log('ghfjhfgh'+response[0])
      studies.forEach(function(study){
        studyList=indexedPrograms[study.programId]
        if(studyList==null){
          indexedPrograms[study.programId]=[]
        }
        indexedPrograms[study.programId].push(study)
      })      
      result={ 
        title: 'PHENO - The [PT] BrAPI endpoint',
        host: req.headers.host, 
        overviewMD: marked(data),
        species:species,
        programs:indexedPrograms,
        hash:hash.hash 
      }


      res.render('pheno',result );

    }).catch(function(err){
      console.log("Error - /index: "+err[0]);
      errMsg="Router index | '/'' - Error retrieving data for render: err"
      debug_std(errMsg+" - "+err);
      if (debug_full.enabled) debug_full(console.trace(errMsg+" - "+err));

      res.render('pheno', { 
        title: 'PHENO - The [PT] BrAPI endpoint',
        host: req.headers.host, 
        overviewMD: marked(data),
        hash:hash.hash 
      });
    })
  }).catch(function(err){
    /////////////////// REPLACE WITH /////////// DEBUG ////////
    errMsg="Unable to read README: err"
    debug_std(errMsg+" - "+err);
    if (debug_full.enabled) debug_full(console.trace(errMsg+" - "+err));
  });
});  


router.get('/edit/person',function(req,res,next){
  let mode=process.env.mode 
  let host=req.headers.host
  let server = ""
  let port = 80
  if ( host.includes(":") ){
    let hostArray=host.split(":")
    server=hostArray[0]
    port=hostArray[1]
  }else{
    server=host
  }

  if( (host.startsWith("10.") || host.startsWith("192.168.") ) && mode != "PRODUCTION" && port==3000 ){
   res.render('edit/person')
  }
})

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
