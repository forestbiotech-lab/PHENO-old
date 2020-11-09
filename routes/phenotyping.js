var express = require('express');
var router = express.Router();
var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');
const path=require('path')
const uploadfile=require('./../components/helpers/uploadfile')
const uploadDir=path.join(__dirname,"../uploads/")
const destination="uploadedfiles"
const parserMapping=require('./../components/parsers/mapping')

router.get('/setup',function(req,res,next){
   res.render('setup',req.params)
})

router.get('/plant/set/:study/:plot/:block/:row/:pot',function(req,res,next){
   res.render('plant2',req.params)
})

router.post('/mapping/upload', (req,res)=>{
  uploadfile.uploadFileGetPreview(req,uploadDir,destination).then(data=>{
    res.json(data)
  }).catch(err=>{
    let message=err.message
    res.writeHead( 400, message, {'content-type' : 'text/plain'});
    res.end(message)
  })
})

router.get('/mapping/parse', (req,res)=>{
  let mappingFile=path.join(uploadDir,destination,"Mapa - Folha1.tsv")
  parserMapping(mappingFile).then(data=>{
    res.json(data)
  }).catch(err=>{
    let message=err.message
    res.writeHead( 400, message, {'content-type' : 'text/plain'});
    res.end(message)    
  })
})

module.exports = router;