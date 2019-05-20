var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');
var getOptions=require('./getOptions');

function resolveCall(call,req,res,errMsg,view,frontendObj){

  var options=getOptions(req);
  call(options).then(function(callRes){
    if (view){
      if (frontendObj){
        if(typeof frontendObj == "function" ){
          result=frontendObj(callRes)
          if(result instanceof Promise){
            result.then(function(promRes){
              res.render(view,promRes) 
            }).catch(function(err){
              debug_std(errMsg+" - "+err);
              if (debug_full.enabled) debug_full(console.trace(errMsg+" - "+err));
              resolveError(res,err);              
            })
          }else{
            res.render(view,result) 
          }
        }
        if(typeof frontendObj == "object" ){
          res.render(view,frontendObj)  
        }
      }else{
        res.render(view,callRes)
      }
    }else{
      res.status(200).json(callRes);
    }
  }).catch(function(err){
    debug_std(errMsg+" - "+err);
    if (debug_full.enabled) debug_full(console.trace(errMsg+" - "+err));
    resolveError(res,err);
  })
}
function resolveError(res,err){
  var statusCode;
  try{
    statusCode=err.metadata.status[0].code;
  }
  catch(error){
    statusCode=500;
  }
  res.status(statusCode).json(err);  
}


module.exports={
	resolveCall:resolveCall,
  resolveError: resolveError
}
