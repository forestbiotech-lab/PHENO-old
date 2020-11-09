var fs=require('fs')
var path=require('path')
var formidable=require('formidable')
var detect=require('detect-file-type')
var formidable = require('formidable')

function uploadFile(req,uploadDir,destination){
  return new Promise((res,rej)=>{

    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = false;
    //Calculate file hash
    form.hash = 'md5';
    form.studyId = ''
    // store all uploads in the /uploads directory
    form.uploadDir = uploadDir

    // every time a file has been uploaded successfully,
    // rename it to it's original name
    form.on('file', function(field, file) {
      detect.fromFile(file.path,function(err,result){
        if (err) rej(err)
        if (result===null){
          let destinationDir=path.join(uploadDir,`/${destination}`)
          let destinationFile=path.join(destinationDir, file.name)
          fs.exists(destinationDir, (exists)=>{
            if(exists){
             rename(file.path, destinationFile) 
            }else{
              fs.mkdir(destinationDir, { recursive: true }, (err)=>{
                if (err){ 
                  rej(err);
                }else{
                  rename(file.path, destinationFile)  
                }
              })  
            }
            function rename(inFile,outFile){
              fs.rename(inFile,outFile, (err)=>{
                if(err){
                  rej(err);
                }else{
                  file={hash:form.openedFiles[0].hash, name:form.openedFiles[0].name}
                  res(file)
                }
              });
            }
          })          
        }else{
          fs.unlink(file.path, (err)=>{
            err ? rej(err) : res({hash:'',name:"UnsupportedFile"}) 
          })
        } 
      })
    });

    // log any errors that occur
    form.on('error', function(err) {
      rej(err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
      //Not necessary for single file
    });

    // parse the incoming request containing the form data
    form.parse(req);

  })
}


function uploadFileGetPreview(req,uploadDir,destination){
  return new Promise((res,rej)=>{
      // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = false;
    //Calculate file hash
    form.hash = 'md5';
    // store all uploads in the /uploads directory
    form.uploadDir = uploadDir;

    // every time a file has been uploaded successfully,
    // rename it to it's original name
    form.on('file', function(field, file) {
      detect.fromFile(file.path,function(err,result){
        if (err) rej(err);
        if (result===null){
          let destinationDir=path.join(uploadDir,`/${destination}`)
          let destinationFile=path.join(destinationDir, file.name)
          fs.exists(destinationDir, (exists)=>{
            if(exists){
             rename(file.path, destinationFile) 
            }else{
              fs.mkdir(destinationDir, { recursive: true }, (err)=>{
                if (err){ 
                  rej(err);
                }else{
                  rename(file.path, destinationFile)  
                }
              })  
            }
            function rename(inFile,outFile){
              fs.rename(inFile,outFile, (err)=>{
                if(err){
                  rej(err);
                }else{
                  file={hash:form.openedFiles[0].hash, name:form.openedFiles[0].name}
                  getPreview(outFile,20).then(result=>{
                    result instanceof Error ? rej(result) : res({filePreview:result,file});             
                  })
                }
              });
            }
          })          
        }else{
          fs.unlink(file.path, (err)=>{
            err ? rej(err) : res({hash:'',name:"UnsupportedFile"})
          })
        } 
      })
    });
    
    // log any errors that occur
    form.on('error', function(err) {
      console.log('An error has occured: \n' + err);
      rej(err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
      //Not necessary for single file
    });

    // parse the incoming request containing the form data
    form.parse(req);

  })
}


function getPreview(previewFile,PREVIEW_LINES){
  return new Promise((res,rej)=>{
    var rs = fs.createReadStream(previewFile, {encoding: 'utf8'});
    var acc = '';
    var pos = 0;
    let savedLines=0
    var index = 0;

    rs.on('data', function (chunk) {
      matches = chunk.match(/\n/g);
      acc += chunk;
      lines=matches.length

      if(lines>=PREVIEW_LINES){
        rs.close()
        if(matches.length>1){
          var lastLines=PREVIEW_LINES-savedLines
          let i=0;
          while (i<lastLines){
            index=chunk.indexOf("\n",index)+1
            i+=1
          }
        }else{
          index=chunk.indexOf('\n')
        }
      }else{
        pos+=chunk.length;
        savedLines+=lines
      }
    }).on('close', function () {
      res(acc.slice(0, pos + index).split('\n'));
    }).on('error', function (err) {
      rej(err);
    })
  })
}

module.exports={uploadFile,uploadFileGetPreview}