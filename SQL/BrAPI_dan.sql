/*Created by D.F.
http://dbdesigner.net/designer/schema/73762
*/

USE brapi_dan;

CREATE TABLE `Species` (
	`id` INT NOT NULL,
	`cropId` INT NOT NULL,
	`genus` varchar(50) NOT NULL,
	`species` varchar(50) NOT NULL,
	`speciesAuthority` varchar(50) NOT NULL,
	`subtaxa` varchar(50) NOT NULL,
	`subtaxaAuthority` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Germplasm` (
	`id` INT NOT NULL,
	`speciesId` INT NOT NULL,
	`origin` INT(50) NOT NULL,
	`defaultDisplayName` varchar(50) NOT NULL UNIQUE,
	`assessionNumber` varchar(20) NOT NULL UNIQUE,
	`germplasmPUI` varchar(50) NOT NULL UNIQUE,
	`pedigree` varchar(50) NOT NULL,
	`seedSource` varchar(100) NOT NULL,
	`biologicalStatusOfAccessionCode` varchar(50) NOT NULL,
	`acquisitionDate` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `GermplasmSynonym` (
	`id` INT NOT NULL,
	`germplasmId` INT NOT NULL,
	`synonym` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Institution` (
	`id` INT NOT NULL,
	`code` varchar(20) NOT NULL UNIQUE,
	`name` varchar(100) NOT NULL UNIQUE,
	`locationId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `GermplasmStorage` (
	`id` INT NOT NULL,
	`code` varchar(20) NOT NULL,
	`germplasmId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `DonorInstitute` (
	`id` INT NOT NULL,
	`germplasmId` INT NOT NULL,
	`instituteId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `GermplasmParents` (
	`id` INT NOT NULL,
	`parent1Id` INT NOT NULL,
	`parent2Id` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Extract` (
	`id` INT NOT NULL,
	`germplasmId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `AttributeCategory` (
	`id` INT NOT NULL,
	`code` varchar(20) NOT NULL UNIQUE,
	`uri` varchar(100) NOT NULL UNIQUE,
	`name` varchar(50) NOT NULL UNIQUE,
	`description` TEXT NOT NULL,
	`dataTypeId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `AttributeValue` (
	`id` INT NOT NULL,
	`attributeCategory` INT NOT NULL,
	`value` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `GermplasmAttributeValue` (
	`id` INT NOT NULL,
	`germplasmId` INT NOT NULL,
	`attributeValueId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Marker` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`linkageGroupId` INT NOT NULL,
	`type` varchar(20) NOT NULL,
	`location` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `MarkerSynonym` (
	`id` INT NOT NULL,
	`markerId` INT NOT NULL,
	`synonym` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `MarkerProfile` (
	`id` INT NOT NULL,
	`extract` INT NOT NULL,
	`analysisMethod` varchar(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `MarkerValue` (
	`id` INT NOT NULL,
	`markerId` INT NOT NULL,
	`value` varchar(1) NOT NULL,
	`isRef` BOOLEAN NOT NULL DEFAULT 'false',
	PRIMARY KEY (`id`)
);

CREATE TABLE `MarkerAnalysisMethods` (
	`id` INT NOT NULL,
	`markerId` INT NOT NULL,
	`analysisMethod` varchar(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `MarkerprofileValue` (
	`id` INT NOT NULL,
	`markerprofileId` INT NOT NULL,
	`markervalue1Id` INT,
	`markervalue2Id` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Crop` (
	`id` INT NOT NULL,
	`commonCropName` varchar(50) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Trial` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`programId` INT NOT NULL,
	`startDate` DATE NOT NULL,
	`endDate` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Program` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`abbreviation` varchar(10) NOT NULL UNIQUE,
	`objective` TEXT NOT NULL,
	`leadPerson` INT(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Person` (
	`id` INT NOT NULL,
	`name` varchar(100) NOT NULL,
	`honorific` varchar(5) NOT NULL,
	`role` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL UNIQUE,
	`orcid` varchar(50),
	`affiliation` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Location` (
	`id` INT NOT NULL,
	`name` varchar(100) NOT NULL UNIQUE,
	`abbreviation` varchar(10) NOT NULL,
	`locationType` varchar(50) NOT NULL,
	`latitude` FLOAT NOT NULL,
	`longitude` FLOAT NOT NULL,
	`altitude` INT NOT NULL,
	`country` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Study` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`trialId` INT NOT NULL,
	`locationId` INT NOT NULL,
	`type` INT NOT NULL,
	`active` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Season` (
	`id` INT NOT NULL,
	`season` varchar(20) NOT NULL,
	`year` INT(4) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyType` (
	`id` INT NOT NULL,
	`name` varchar(100) NOT NULL UNIQUE,
	`description` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudySeason` (
	`id` INT NOT NULL,
	`studyId` INT NOT NULL,
	`seasonId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyAdditionalInfo` (
	`id` INT NOT NULL,
	`studyId` INT NOT NULL,
	`propertyName` varchar(50) NOT NULL,
	`propertyValue` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Country` (
	`int` INT NOT NULL,
	`name` varchar(100) NOT NULL UNIQUE,
	`code` varchar(3) NOT NULL UNIQUE,
	PRIMARY KEY (`int`)
);

CREATE TABLE `LocationAdditionalInfo` (
	`id` INT NOT NULL,
	`location` INT NOT NULL,
	`propertyName` varchar(50) NOT NULL,
	`propertyValue` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyContact` (
	`id` INT NOT NULL,
	`studyId` INT NOT NULL,
	`contact` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ObservationVariable` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`ontologyId` INT NOT NULL,
	`growthStage` varchar(50) NOT NULL,
	`status` varchar(20) NOT NULL,
	`xref` varchar(50) NOT NULL,
	`institution` INT NOT NULL,
	`scientist` INT NOT NULL,
	`date` DATE NOT NULL,
	`language` varchar(2) NOT NULL,
	`crop` INT NOT NULL,
	`traitId` INT NOT NULL,
	`methodId` BINARY NOT NULL,
	`scaleId` BINARY NOT NULL,
	`defaultValue` varchar(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyObservationVariable` (
	`id` INT NOT NULL,
	`studyId` INT NOT NULL,
	`observationVariableId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Trait` (
	`id` INT NOT NULL,
	`name` varchar(100) NOT NULL UNIQUE,
	`class` varchar(50) NOT NULL,
	`description` TEXT NOT NULL,
	`mainAbbreviation` varchar(5) NOT NULL,
	`entity` varchar(50) NOT NULL,
	`attribute` varchar(50) NOT NULL,
	`status` varchar(20) NOT NULL,
	`xref` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Method` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`class` varchar(50) NOT NULL UNIQUE,
	`description` TEXT NOT NULL,
	`formula` varchar(50),
	`reference` varchar(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `Ontology` (
	`id` INT NOT NULL,
	`accession` varchar(10) NOT NULL,
	`name` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ObservationVariableSynonym` (
	`id` INT NOT NULL,
	`observationVariableId` INT NOT NULL,
	`synonym` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Scale` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`dataTypeId` INT NOT NULL,
	`decimalPlaces` INT NOT NULL,
	`xref` varchar(50) NOT NULL,
	`min` FLOAT,
	`max` FLOAT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ContextOfUse` (
	`id` INT NOT NULL,
	`observationVariableId` INT NOT NULL,
	`studyTypeId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `TraitSynonym` (
	`id` INT NOT NULL,
	`traitId` INT NOT NULL,
	`synonym` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `TraitAlternativeAbbreviation` (
	`id` INT NOT NULL,
	`traitId` INT NOT NULL,
	`abbreviation` varchar(5) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ScaleCategories` (
	`int` INT NOT NULL,
	`scaleId` INT NOT NULL,
	`value` FLOAT,
	`category` varchar(20) NOT NULL,
	PRIMARY KEY (`int`)
);

CREATE TABLE `StudyGermplasm` (
	`id` INT NOT NULL,
	`studyId` INT NOT NULL,
	`germplasmId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ObservationUnit` (
	`id` INT NOT NULL,
	`name` varchar(100) NOT NULL UNIQUE,
	`locationId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyObservationUnit` (
	`id` INT NOT NULL,
	`studyId` INT NOT NULL,
	`observationUnit` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Observation` (
	`id` INT NOT NULL,
	`observationVariable` INT NOT NULL,
	`operator` INT NOT NULL,
	`uploadedBy` INT NOT NULL,
	`plantLevel` BOOLEAN NOT NULL,
	`studyPlotId` INT,
	`studyPlantId` INT,
	`observationTimeStamp` TIMESTAMP NOT NULL,
	`value` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyPlot` (
	`id` INT NOT NULL,
	`studyObservationUnitId` INT NOT NULL,
	`germplasmId` INT NOT NULL,
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
	`id` INT NOT NULL,
	`studyPlotId` INT NOT NULL,
	`plantNumber` INT NOT NULL,
	`blockNumber` INT NOT NULL,
	`X` INT NOT NULL,
	`Y` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `StudyTreatment` (
	`id` INT NOT NULL,
	`studyPlotId` INT NOT NULL,
	`treatmentModalityId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `TreatmentFactor` (
	`id` INT NOT NULL,
	`factor` varchar(50) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `TreatmentModality` (
	`id` INT NOT NULL,
	`treatmentFactorId` INT NOT NULL,
	`modality` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `DataType` (
	`id` INT NOT NULL,
	`type` varchar(20) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `GenomeMap` (
	`id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`speciesId` INT NOT NULL,
	`type` varchar(20) NOT NULL,
	`unit` varchar(5) NOT NULL,
	`publishedDate` DATE NOT NULL,
	`markerCount` INT NOT NULL,
	`linkageGroupCount` INT NOT NULL,
	`comments` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `LinkageGroup` (
	`id` INT NOT NULL,
	`genomeMapId` INT NOT NULL,
	`numberMarkers` INT NOT NULL,
	`maxPosition` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Sample` (
	`id` INT NOT NULL,
	`plantId` INT NOT NULL,
	`takenBy` INT NOT NULL,
	`sampleDate` DATE NOT NULL,
	`seasonId` INT NOT NULL,
	`sampleType` varchar(50) NOT NULL,
	`tissueType` varchar(50) NOT NULL,
	`notes` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Species` ADD CONSTRAINT `Species_fk0` FOREIGN KEY (`cropId`) REFERENCES `Crop`(`id`);

ALTER TABLE `Germplasm` ADD CONSTRAINT `Germplasm_fk0` FOREIGN KEY (`speciesId`) REFERENCES `Species`(`id`);

ALTER TABLE `Germplasm` ADD CONSTRAINT `Germplasm_fk1` FOREIGN KEY (`origin`) REFERENCES `Institution`(`id`);

ALTER TABLE `GermplasmSynonym` ADD CONSTRAINT `GermplasmSynonym_fk0` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `Institution` ADD CONSTRAINT `Institution_fk0` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`);

ALTER TABLE `GermplasmStorage` ADD CONSTRAINT `GermplasmStorage_fk0` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `DonorInstitute` ADD CONSTRAINT `DonorInstitute_fk0` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `DonorInstitute` ADD CONSTRAINT `DonorInstitute_fk1` FOREIGN KEY (`instituteId`) REFERENCES `Institution`(`id`);

ALTER TABLE `GermplasmParents` ADD CONSTRAINT `GermplasmParents_fk0` FOREIGN KEY (`parent1Id`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `GermplasmParents` ADD CONSTRAINT `GermplasmParents_fk1` FOREIGN KEY (`parent2Id`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `Extract` ADD CONSTRAINT `Extract_fk0` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `AttributeCategory` ADD CONSTRAINT `AttributeCategory_fk0` FOREIGN KEY (`dataTypeId`) REFERENCES `DataType`(`id`);

ALTER TABLE `AttributeValue` ADD CONSTRAINT `AttributeValue_fk0` FOREIGN KEY (`attributeCategory`) REFERENCES `AttributeCategory`(`id`);

ALTER TABLE `GermplasmAttributeValue` ADD CONSTRAINT `GermplasmAttributeValue_fk0` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `GermplasmAttributeValue` ADD CONSTRAINT `GermplasmAttributeValue_fk1` FOREIGN KEY (`attributeValueId`) REFERENCES `AttributeValue`(`id`);

ALTER TABLE `Marker` ADD CONSTRAINT `Marker_fk0` FOREIGN KEY (`linkageGroupId`) REFERENCES `LinkageGroup`(`id`);

ALTER TABLE `MarkerSynonym` ADD CONSTRAINT `MarkerSynonym_fk0` FOREIGN KEY (`markerId`) REFERENCES `Marker`(`id`);

ALTER TABLE `MarkerProfile` ADD CONSTRAINT `MarkerProfile_fk0` FOREIGN KEY (`extract`) REFERENCES `Extract`(`id`);

ALTER TABLE `MarkerValue` ADD CONSTRAINT `MarkerValue_fk0` FOREIGN KEY (`markerId`) REFERENCES `Marker`(`id`);

ALTER TABLE `MarkerAnalysisMethods` ADD CONSTRAINT `MarkerAnalysisMethods_fk0` FOREIGN KEY (`markerId`) REFERENCES `Marker`(`id`);

ALTER TABLE `MarkerprofileValue` ADD CONSTRAINT `MarkerprofileValue_fk0` FOREIGN KEY (`markerprofileId`) REFERENCES `MarkerProfile`(`id`);

ALTER TABLE `MarkerprofileValue` ADD CONSTRAINT `MarkerprofileValue_fk1` FOREIGN KEY (`markervalue1Id`) REFERENCES `MarkerValue`(`id`);

ALTER TABLE `MarkerprofileValue` ADD CONSTRAINT `MarkerprofileValue_fk2` FOREIGN KEY (`markervalue2Id`) REFERENCES `MarkerValue`(`id`);

ALTER TABLE `Trial` ADD CONSTRAINT `Trial_fk0` FOREIGN KEY (`programId`) REFERENCES `Program`(`id`);

ALTER TABLE `Program` ADD CONSTRAINT `Program_fk0` FOREIGN KEY (`leadPerson`) REFERENCES `Person`(`id`);

ALTER TABLE `Person` ADD CONSTRAINT `Person_fk0` FOREIGN KEY (`affiliation`) REFERENCES `Institution`(`id`);

ALTER TABLE `Location` ADD CONSTRAINT `Location_fk0` FOREIGN KEY (`country`) REFERENCES `Country`(`int`);

ALTER TABLE `Study` ADD CONSTRAINT `Study_fk0` FOREIGN KEY (`trialId`) REFERENCES `Trial`(`id`);

ALTER TABLE `Study` ADD CONSTRAINT `Study_fk1` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`);

ALTER TABLE `Study` ADD CONSTRAINT `Study_fk2` FOREIGN KEY (`type`) REFERENCES `StudyType`(`id`);

ALTER TABLE `StudySeason` ADD CONSTRAINT `StudySeason_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`);

ALTER TABLE `StudySeason` ADD CONSTRAINT `StudySeason_fk1` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`);

ALTER TABLE `StudyAdditionalInfo` ADD CONSTRAINT `StudyAdditionalInfo_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`);

ALTER TABLE `LocationAdditionalInfo` ADD CONSTRAINT `LocationAdditionalInfo_fk0` FOREIGN KEY (`location`) REFERENCES `Location`(`id`);

ALTER TABLE `StudyContact` ADD CONSTRAINT `StudyContact_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`);

ALTER TABLE `StudyContact` ADD CONSTRAINT `StudyContact_fk1` FOREIGN KEY (`contact`) REFERENCES `Person`(`id`);

ALTER TABLE `ObservationVariable` ADD CONSTRAINT `ObservationVariable_fk0` FOREIGN KEY (`ontologyId`) REFERENCES `Ontology`(`id`);

ALTER TABLE `ObservationVariable` ADD CONSTRAINT `ObservationVariable_fk1` FOREIGN KEY (`institution`) REFERENCES `Institution`(`id`);

ALTER TABLE `ObservationVariable` ADD CONSTRAINT `ObservationVariable_fk2` FOREIGN KEY (`scientist`) REFERENCES `Person`(`id`);

ALTER TABLE `ObservationVariable` ADD CONSTRAINT `ObservationVariable_fk3` FOREIGN KEY (`crop`) REFERENCES `Crop`(`id`);

ALTER TABLE `ObservationVariable` ADD CONSTRAINT `ObservationVariable_fk4` FOREIGN KEY (`traitId`) REFERENCES `Trait`(`id`);

ALTER TABLE `ObservationVariable` ADD CONSTRAINT `ObservationVariable_fk5` FOREIGN KEY (`methodId`) REFERENCES `Method`(`id`);

ALTER TABLE `ObservationVariable` ADD CONSTRAINT `ObservationVariable_fk6` FOREIGN KEY (`scaleId`) REFERENCES `Scale`(`id`);

ALTER TABLE `StudyObservationVariable` ADD CONSTRAINT `StudyObservationVariable_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`);

ALTER TABLE `StudyObservationVariable` ADD CONSTRAINT `StudyObservationVariable_fk1` FOREIGN KEY (`observationVariableId`) REFERENCES `ObservationVariable`(`id`);

ALTER TABLE `ObservationVariableSynonym` ADD CONSTRAINT `ObservationVariableSynonym_fk0` FOREIGN KEY (`observationVariableId`) REFERENCES `ObservationVariable`(`id`);

ALTER TABLE `Scale` ADD CONSTRAINT `Scale_fk0` FOREIGN KEY (`dataTypeId`) REFERENCES `DataType`(`id`);

ALTER TABLE `ContextOfUse` ADD CONSTRAINT `ContextOfUse_fk0` FOREIGN KEY (`observationVariableId`) REFERENCES `ObservationVariable`(`id`);

ALTER TABLE `ContextOfUse` ADD CONSTRAINT `ContextOfUse_fk1` FOREIGN KEY (`studyTypeId`) REFERENCES `StudyType`(`id`);

ALTER TABLE `TraitSynonym` ADD CONSTRAINT `TraitSynonym_fk0` FOREIGN KEY (`traitId`) REFERENCES `Trait`(`id`);

ALTER TABLE `TraitAlternativeAbbreviation` ADD CONSTRAINT `TraitAlternativeAbbreviation_fk0` FOREIGN KEY (`traitId`) REFERENCES `Trait`(`id`);

ALTER TABLE `ScaleCategories` ADD CONSTRAINT `ScaleCategories_fk0` FOREIGN KEY (`scaleId`) REFERENCES `Scale`(`id`);

ALTER TABLE `StudyGermplasm` ADD CONSTRAINT `StudyGermplasm_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`);

ALTER TABLE `StudyGermplasm` ADD CONSTRAINT `StudyGermplasm_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `ObservationUnit` ADD CONSTRAINT `ObservationUnit_fk0` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`);

ALTER TABLE `StudyObservationUnit` ADD CONSTRAINT `StudyObservationUnit_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`);

ALTER TABLE `StudyObservationUnit` ADD CONSTRAINT `StudyObservationUnit_fk1` FOREIGN KEY (`observationUnit`) REFERENCES `ObservationUnit`(`id`);

ALTER TABLE `Observation` ADD CONSTRAINT `Observation_fk0` FOREIGN KEY (`observationVariable`) REFERENCES `ObservationVariable`(`id`);

ALTER TABLE `Observation` ADD CONSTRAINT `Observation_fk1` FOREIGN KEY (`operator`) REFERENCES `Person`(`id`);

ALTER TABLE `Observation` ADD CONSTRAINT `Observation_fk2` FOREIGN KEY (`uploadedBy`) REFERENCES `Person`(`id`);

ALTER TABLE `Observation` ADD CONSTRAINT `Observation_fk3` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot`(`id`);

ALTER TABLE `Observation` ADD CONSTRAINT `Observation_fk4` FOREIGN KEY (`studyPlantId`) REFERENCES `StudyPlant`(`id`);

ALTER TABLE `StudyPlot` ADD CONSTRAINT `StudyPlot_fk0` FOREIGN KEY (`studyObservationUnitId`) REFERENCES `StudyObservationUnit`(`id`);

ALTER TABLE `StudyPlot` ADD CONSTRAINT `StudyPlot_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm`(`id`);

ALTER TABLE `StudyPlant` ADD CONSTRAINT `StudyPlant_fk0` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot`(`id`);

ALTER TABLE `StudyTreatment` ADD CONSTRAINT `StudyTreatment_fk0` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot`(`id`);

ALTER TABLE `StudyTreatment` ADD CONSTRAINT `StudyTreatment_fk1` FOREIGN KEY (`treatmentModalityId`) REFERENCES `TreatmentModality`(`id`);

ALTER TABLE `TreatmentModality` ADD CONSTRAINT `TreatmentModality_fk0` FOREIGN KEY (`treatmentFactorId`) REFERENCES `TreatmentFactor`(`id`);

ALTER TABLE `GenomeMap` ADD CONSTRAINT `GenomeMap_fk0` FOREIGN KEY (`speciesId`) REFERENCES `Species`(`id`);

ALTER TABLE `LinkageGroup` ADD CONSTRAINT `LinkageGroup_fk0` FOREIGN KEY (`genomeMapId`) REFERENCES `GenomeMap`(`id`);

ALTER TABLE `Sample` ADD CONSTRAINT `Sample_fk0` FOREIGN KEY (`plantId`) REFERENCES `StudyPlant`(`id`);

ALTER TABLE `Sample` ADD CONSTRAINT `Sample_fk1` FOREIGN KEY (`takenBy`) REFERENCES `Person`(`id`);

ALTER TABLE `Sample` ADD CONSTRAINT `Sample_fk2` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`);

