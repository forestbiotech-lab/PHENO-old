module.exports = function(req){
	//Exports cleaned request
	result={}
	result.body=req.body;
	result.params=req.params;
	result.query=req.query;
	return result;
}