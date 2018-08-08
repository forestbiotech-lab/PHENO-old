var getOptions=require('./getOptions');

function resolveCall(call,req,res,errMsg,view){

  var options=getOptions(req);
  call(options).then(function(callRes){
    if (view){
      console.log(callRes.result.data[0].Trial)
      res.render(view,callRes)
    }else{
      res.status(200).json(callRes);
    }
  }).catch(function(err){
    console.trace(errMsg+err)
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
	resolveCall:resolveCall
}
