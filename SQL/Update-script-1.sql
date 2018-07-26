###Performed locally 25/01/2017
###Update to add ObservationUnitXRef and move germplasmId from StudyPlot to StudyPlant

USE brapi_dan;

SET foreign_key_checks = 0;

DROP TABLE IF EXISTS `StudyPlot`;

DROP TABLE IF EXISTS `StudyPlant`;

CREATE TABLE `StudyPlot` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`studyObservationUnitId` INT NOT NULL,
	`plotNumber` INT NOT NULL,
	`blockNumber` INT NOT NULL,
	`X` INT NOT NULL,
	`Y` INT NOT NULL,
	`replicate` INT NOT NULL,
	`plantingDate` DATE NOT NULL,
	`harvestDate` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyPlant` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`studyPlotId` INT NOT NULL,
	`plantNumber` INT NOT NULL,
	`germplasmId` INT NOT NULL,
	`blockNumber` INT NOT NULL,
	`X` INT NOT NULL,
	`Y` INT NOT NULL,
	PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE `ObservationUnitXRef` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`observationUnitId` INT NOT NULL,
	`source` VARCHAR(255) NOT NULL,
	`xref` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `StudyPlant` ADD CONSTRAINT `StudyPlant_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `ObservationUnitXRef` ADD CONSTRAINT `ObservationUnitXRef_fk0` FOREIGN KEY (`observationUnitId`) REFERENCES `ObservationUnit`(`id`);


SET foreign_key_checks = 1;

#Dropped foreign key while study isn't implemented.
ALTER TABLE StudyGermplasm drop FOREIGN KEY StudyGermplasm_fk0 ;
ALTER TABLE `StudyGermplasm` ADD CONSTRAINT `StudyGermplasm_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`);

ALTER TABLE `StudyGermplasm` ADD CONSTRAINT `StudyGermplasm_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);