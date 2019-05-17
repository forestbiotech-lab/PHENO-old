ALTER TABLE `ObservationUnit` ADD levels varchar(11);
ALTER TABLE `ObservationUnit` ADD blockNumber varchar(11);
ALTER TABLE `ObservationUnit` ADD entryNumber varchar(11);
ALTER TABLE `ObservationUnit` ADD entryType varchar(50);
ALTER TABLE `ObservationUnit` ADD x varchar(10);
ALTER TABLE `ObservationUnit` ADD y varchar(10);
ALTER TABLE `ObservationUnit` ADD germplasmId int(11);
ALTER TABLE `ObservationUnit` ADD plantingDate date(11);
ALTER TABLE `ObservationUnit` ADD harvestingDate date(11);
ALTER TABLE `ObservationUnit` ADD replicate varchar(11);
ALTER TABLE `ObservationUnit` ADD plantNumber varchar(11);
ALTER TABLE `ObservationUnit` ADD plotNumber varchar(11);
ALTER TABLE `ObservationUnit` ADD containedIn int(11);
ALTER TABLE `ObservationUnit` ADD locationId int(11);


SELECT 
ou.id,
ou.name,
ou.studyId,
ou.level,
ou.levels,
plo.blockNumber,
ou.entryNumber,
ou.entryType,
pla.x,
pla.y,
ou.sampleId,
pla.germplasmId, 
plo.plantingDate,
plo.harvestDate,
plo.replicate,
pla.plantNumber,
plo.plotNumber,
ou.containedIn,
pla.locationId 
FROM  
ObservationUnit AS ou,
Plant AS pla,
Plot as plo

WHERE 
///QS
ou.plantId = pla.id AND
pla.plotId = plo.id;

//JC
ou.plotId = plo.id AND
pla.plotId = plo.id;

//OS ??????  1 obs for each plant They don't exist yet good luck!!!!