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

m.germplasm=function(attributes){
	return db.Germplasm
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include: [
		{
			model:db.StudyGermplasm,
			include:[{
				model:db.Study,
				include:[{
					model:db.Trial,
					include:[{
						model:db.Program
					}]
				}]
			}]
		},{
			model:db.Species,
			include:[{
				model:db.Crop
			}]
		},{
			model:db.Institution,
			include:[{
				model:db.Location,
				include:[{
					model:db.Country
				}]
			}]
		},{
			model:db.DonorInstitute,
			include:[{
				model:db.Institution
			}]
		},{
			model:db.Country
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