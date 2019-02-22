var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');
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
		debug_std('Model | Dataset | showDataset - Err: '+ err);
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
		debug_std('Model | Dataset | Germplasm - Err: '+ err);
		return err;
	})
}

m.study=function(attributes){
	return db.Study
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{
			model:db.Trial,
			include:[{
				model:db.Program,
				include:[{
					model:db.Person,
					include:[{
						model:db.Institution,
					}]
				}]
			}]
		},{
			model:db.Location,
			include:[{
				model:db.Country
			}]
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | Study - Err: '+ err);
		return err;
	})
}
m.relatedStudies=function(attributes){
	return db.Program
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{		
			model:db.Trial,
			include:[{
				model:db.Study,
				include:[{
					model:db.Trial
				}]
			}]
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | relatedStudies - Err: '+ err);
		return err;
	})
}

m.relatedGermplasms=function(attributes){
	return db.StudyGermplasm
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{		
			model:db.Germplasm
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | relatedGermplasm - Err: '+ err);
		return err;
	})
}

m.observationVariables=function(attributes){
	return db.StudyObservationVariable
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{		
			model:db.ObservationVariable,
			include:[{
				model:db.Trait
			},{
				model:db.Method
			},{
				model:db.Scale
			},{
				model:db.Ontology
			}]
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | observationVariables - Err: '+ err);
		return err;
	})
}

m.studyAdditionalInfo=function(attributes){
	return db.Study
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{
			model:db.StudyAdditionalInfo
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | studyAdditionalInfo - Err: '+ err);
		return err;
	})
}

m.locationAdditionalInfo=function(attributes){
	return db.Location
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{
			model:db.LocationAdditionalInfo
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | relatedStudy - Err: '+ err);
		return err;
	})
}

m.trial=function(attributes){
	return db.Trial
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{		
			model:db.Study
		},{
			model:db.Program,
			include:[{
				model:db.Person,
				include:[{
					model:db.Institution
				}]
			}]
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | trial - Err: '+ err);
		return err;
	})
}

m.example=function(attributes){
	return db.Study
	.findAndCountAll({
		offset: parseInt(attributes.offset),
		limit: parseInt(attributes.pageSize)+1,
		include:[{		
			model:db.dd
		}],
		where: attributes.where
	}).then(function(res){
		return res
	}).catch(function(err){
		debug_std('Model | Dataset | relatedStudy - Err: '+ err);
		return err;
	})
}

module.exports=m