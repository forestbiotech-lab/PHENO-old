var db = require('./../sqldb');

//Break up this file into domains once it gets to big.
var m={}

m.showDataset=function(attributes){
	return db.Program
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include: [
		{
			model:db.Trial
		}],
		where: attributes.where

	}).then(function(res){
		return res
	}).catch(function(err){
		console.log('Show dataset - Err: '+ err);
		return err;
	})
}


module.exports=m