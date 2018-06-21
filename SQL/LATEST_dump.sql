-- MySQL dump 10.16  Distrib 10.1.34-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: brapi_dan
-- ------------------------------------------------------
-- Server version	10.1.33-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AttributeCategory`
--

DROP TABLE IF EXISTS `AttributeCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AttributeCategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(20) NOT NULL,
  `uri` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `dataTypeId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `uri` (`uri`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AttributeCategory`
--

LOCK TABLES `AttributeCategory` WRITE;
/*!40000 ALTER TABLE `AttributeCategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `AttributeCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AttributeValue`
--

DROP TABLE IF EXISTS `AttributeValue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AttributeValue` (
  `id` int(11) NOT NULL,
  `attributeCategory` int(11) NOT NULL,
  `value` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AttributeValue`
--

LOCK TABLES `AttributeValue` WRITE;
/*!40000 ALTER TABLE `AttributeValue` DISABLE KEYS */;
/*!40000 ALTER TABLE `AttributeValue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Calls`
--

DROP TABLE IF EXISTS `Calls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Calls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `callName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Calls`
--

LOCK TABLES `Calls` WRITE;
/*!40000 ALTER TABLE `Calls` DISABLE KEYS */;
INSERT INTO `Calls` VALUES (1,'germplasm-search'),(2,'crops'),(3,'calls'),(4,'germplasm/{id}'),(5,'germplasm/{id}/pedigree'),(6,'studies-search'),(7,'studies/{studyDbId}/germplasm'),(8,'studies/{studyDbId}'),(9,'programs'),(10,'programs-search');
/*!40000 ALTER TABLE `Calls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContextOfUse`
--

DROP TABLE IF EXISTS `ContextOfUse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContextOfUse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observationVariableId` int(11) NOT NULL,
  `studyTypeId` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ContextOfUse_fk0` (`observationVariableId`),
  KEY `ContextOfUse_fk1` (`studyTypeId`),
  CONSTRAINT `ContextOfUse_fk0` FOREIGN KEY (`observationVariableId`) REFERENCES `ObservationVariable` (`id`),
  CONSTRAINT `ContextOfUse_fk1` FOREIGN KEY (`studyTypeId`) REFERENCES `StudyType` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContextOfUse`
--

LOCK TABLES `ContextOfUse` WRITE;
/*!40000 ALTER TABLE `ContextOfUse` DISABLE KEYS */;
/*!40000 ALTER TABLE `ContextOfUse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Country`
--

DROP TABLE IF EXISTS `Country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=895 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Country`
--

LOCK TABLES `Country` WRITE;
/*!40000 ALTER TABLE `Country` DISABLE KEYS */;
INSERT INTO `Country` VALUES (4,'Afghanistan','AFG'),(8,'Albania','ALB'),(10,'Antarctica','ATA'),(12,'Algeria','DZA'),(16,'American Samoa','ASM'),(20,'Andorra','AND'),(24,'Angola','AGO'),(28,'Antigua and Barbuda','ATG'),(31,'Azerbaijan','AZE'),(32,'Argentina','ARG'),(36,'Australia','AUS'),(40,'Austria','AUT'),(44,'Bahamas','BHS'),(48,'Bahrain','BHR'),(50,'Bangladesh','BGD'),(51,'Armenia','ARM'),(52,'Barbados','BRB'),(56,'Belgium','BEL'),(60,'Bermuda','BMU'),(64,'Bhutan','BTN'),(68,'Bolivia (Plurinational State of)','BOL'),(70,'Bosnia and Herzegovina','BIH'),(72,'Botswana','BWA'),(74,'Bouvet Island','BVT'),(76,'Brazil','BRA'),(84,'Belize','BLZ'),(86,'British Indian Ocean Territory','IOT'),(90,'Solomon Islands','SLB'),(92,'Virgin Islands (British)','VGB'),(96,'Brunei Darussalam','BRN'),(100,'Bulgaria','BGR'),(104,'Myanmar','MMR'),(108,'Burundi','BDI'),(112,'Belarus','BLR'),(116,'Cambodia','KHM'),(120,'Cameroon','CMR'),(124,'Canada','CAN'),(132,'Cabo Verde','CPV'),(136,'Cayman Islands','CYM'),(140,'Central African Republic','CAF'),(144,'Sri Lanka','LKA'),(148,'Chad','TCD'),(152,'Chile','CHL'),(156,'China','CHN'),(158,'Taiwan, Province of China','TWN'),(162,'Christmas Island','CXR'),(166,'Cocos (Keeling) Islands','CCK'),(170,'Colombia','COL'),(174,'Comoros','COM'),(175,'Mayotte','MYT'),(178,'Congo','COG'),(180,'Congo (Democratic Republic of the)','COD'),(184,'Cook Islands','COK'),(188,'Costa Rica','CRI'),(191,'Croatia','HRV'),(192,'Cuba','CUB'),(196,'Cyprus','CYP'),(203,'Czech Republic','CZE'),(204,'Benin','BEN'),(208,'Denmark','DNK'),(212,'Dominica','DMA'),(214,'Dominican Republic','DOM'),(218,'Ecuador','ECU'),(222,'El Salvador','SLV'),(226,'Equatorial Guinea','GNQ'),(231,'Ethiopia','ETH'),(232,'Eritrea','ERI'),(233,'Estonia','EST'),(234,'Faroe Islands','FRO'),(238,'Falkland Islands (Malvinas)','FLK'),(239,'South Georgia and the South Sandwich Islands','SGS'),(242,'Fiji','FJI'),(246,'Finland','FIN'),(248,'Åland Islands','ALA'),(250,'France','FRA'),(254,'French Guiana','GUF'),(258,'French Polynesia','PYF'),(260,'French Southern Territories','ATF'),(262,'Djibouti','DJI'),(266,'Gabon','GAB'),(268,'Georgia','GEO'),(270,'Gambia','GMB'),(275,'Palestine, State of','PSE'),(276,'Germany','DEU'),(288,'Ghana','GHA'),(292,'Gibraltar','GIB'),(296,'Kiribati','KIR'),(300,'Greece','GRC'),(304,'Greenland','GRL'),(308,'Grenada','GRD'),(312,'Guadeloupe','GLP'),(316,'Guam','GUM'),(320,'Guatemala','GTM'),(324,'Guinea','GIN'),(328,'Guyana','GUY'),(332,'Haiti','HTI'),(334,'Heard Island and McDonald Islands','HMD'),(336,'Holy See','VAT'),(340,'Honduras','HND'),(344,'Hong Kong','HKG'),(348,'Hungary','HUN'),(352,'Iceland','ISL'),(356,'India','IND'),(360,'Indonesia','IDN'),(364,'Iran (Islamic Republic of)','IRN'),(368,'Iraq','IRQ'),(372,'Ireland','IRL'),(376,'Israel','ISR'),(380,'Italy','ITA'),(384,'Côte d\'Ivoire','CIV'),(388,'Jamaica','JAM'),(392,'Japan','JPN'),(398,'Kazakhstan','KAZ'),(400,'Jordan','JOR'),(404,'Kenya','KEN'),(408,'Korea (Democratic People\'s Republic of)','PRK'),(410,'Korea (Republic of)','KOR'),(414,'Kuwait','KWT'),(417,'Kyrgyzstan','KGZ'),(418,'Lao People\'s Democratic Republic','LAO'),(422,'Lebanon','LBN'),(426,'Lesotho','LSO'),(428,'Latvia','LVA'),(430,'Liberia','LBR'),(434,'Libya','LBY'),(438,'Liechtenstein','LIE'),(440,'Lithuania','LTU'),(442,'Luxembourg','LUX'),(446,'Macao','MAC'),(450,'Madagascar','MDG'),(454,'Malawi','MWI'),(458,'Malaysia','MYS'),(462,'Maldives','MDV'),(466,'Mali','MLI'),(470,'Malta','MLT'),(474,'Martinique','MTQ'),(478,'Mauritania','MRT'),(480,'Mauritius','MUS'),(484,'Mexico','MEX'),(492,'Monaco','MCO'),(496,'Mongolia','MNG'),(498,'Moldova (Republic of)','MDA'),(499,'Montenegro','MNE'),(500,'Montserrat','MSR'),(504,'Morocco','MAR'),(508,'Mozambique','MOZ'),(512,'Oman','OMN'),(516,'Namibia','NAM'),(520,'Nauru','NRU'),(524,'Nepal','NPL'),(528,'Netherlands','NLD'),(531,'Curaçao','CUW'),(533,'Aruba','ABW'),(534,'Sint Maarten (Dutch part)','SXM'),(535,'Bonaire, Sint Eustatius and Saba','BES'),(540,'New Caledonia','NCL'),(548,'Vanuatu','VUT'),(554,'New Zealand','NZL'),(558,'Nicaragua','NIC'),(562,'Niger','NER'),(566,'Nigeria','NGA'),(570,'Niue','NIU'),(574,'Norfolk Island','NFK'),(578,'Norway','NOR'),(580,'Northern Mariana Islands','MNP'),(581,'United States Minor Outlying Islands','UMI'),(583,'Micronesia (Federated States of)','FSM'),(584,'Marshall Islands','MHL'),(585,'Palau','PLW'),(586,'Pakistan','PAK'),(591,'Panama','PAN'),(598,'Papua New Guinea','PNG'),(600,'Paraguay','PRY'),(604,'Peru','PER'),(608,'Philippines','PHL'),(612,'Pitcairn','PCN'),(616,'Poland','POL'),(620,'Portugal','PRT'),(624,'Guinea-Bissau','GNB'),(626,'Timor-Leste','TLS'),(630,'Puerto Rico','PRI'),(634,'Qatar','QAT'),(638,'Réunion','REU'),(642,'Romania','ROU'),(643,'Russian Federation','RUS'),(646,'Rwanda','RWA'),(652,'Saint Barthélemy','BLM'),(654,'Saint Helena, Ascension and Tristan da Cunha','SHN'),(659,'Saint Kitts and Nevis','KNA'),(660,'Anguilla','AIA'),(662,'Saint Lucia','LCA'),(663,'Saint Martin (French part)','MAF'),(666,'Saint Pierre and Miquelon','SPM'),(670,'Saint Vincent and the Grenadines','VCT'),(674,'San Marino','SMR'),(678,'Sao Tome and Principe','STP'),(682,'Saudi Arabia','SAU'),(686,'Senegal','SEN'),(688,'Serbia','SRB'),(690,'Seychelles','SYC'),(694,'Sierra Leone','SLE'),(702,'Singapore','SGP'),(703,'Slovakia','SVK'),(704,'Viet Nam','VNM'),(705,'Slovenia','SVN'),(706,'Somalia','SOM'),(710,'South Africa','ZAF'),(716,'Zimbabwe','ZWE'),(724,'Spain','ESP'),(728,'South Sudan','SSD'),(729,'Sudan','SDN'),(732,'Western Sahara','ESH'),(740,'Suriname','SUR'),(744,'Svalbard and Jan Mayen','SJM'),(748,'Swaziland','SWZ'),(752,'Sweden','SWE'),(756,'Switzerland','CHE'),(760,'Syrian Arab Republic','SYR'),(762,'Tajikistan','TJK'),(764,'Thailand','THA'),(768,'Togo','TGO'),(772,'Tokelau','TKL'),(776,'Tonga','TON'),(780,'Trinidad and Tobago','TTO'),(784,'United Arab Emirates','ARE'),(788,'Tunisia','TUN'),(792,'Turkey','TUR'),(795,'Turkmenistan','TKM'),(796,'Turks and Caicos Islands','TCA'),(798,'Tuvalu','TUV'),(800,'Uganda','UGA'),(804,'Ukraine','UKR'),(807,'Macedonia (the former Yugoslav Republic of)','MKD'),(818,'Egypt','EGY'),(826,'United Kingdom of Great Britain and Northern Ireland','GBR'),(831,'Guernsey','GGY'),(832,'Jersey','JEY'),(833,'Isle of Man','IMN'),(834,'Tanzania, United Republic of','TZA'),(840,'United States of America','USA'),(850,'Virgin Islands (U.S.)','VIR'),(854,'Burkina Faso','BFA'),(858,'Uruguay','URY'),(860,'Uzbekistan','UZB'),(862,'Venezuela (Bolivarian Republic of)','VEN'),(876,'Wallis and Futuna','WLF'),(882,'Samoa','WSM'),(887,'Yemen','YEM'),(894,'Zambia','ZMB');
/*!40000 ALTER TABLE `Country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Crop`
--

DROP TABLE IF EXISTS `Crop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Crop` (
  `id` int(11) NOT NULL,
  `commonCropName` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `commonCropName` (`commonCropName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Crop`
--

LOCK TABLES `Crop` WRITE;
/*!40000 ALTER TABLE `Crop` DISABLE KEYS */;
INSERT INTO `Crop` VALUES (0,'Rice');
/*!40000 ALTER TABLE `Crop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DataType`
--

DROP TABLE IF EXISTS `DataType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DataType` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DataType`
--

LOCK TABLES `DataType` WRITE;
/*!40000 ALTER TABLE `DataType` DISABLE KEYS */;
INSERT INTO `DataType` VALUES (1,'float');
/*!40000 ALTER TABLE `DataType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DataTypes`
--

DROP TABLE IF EXISTS `DataTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DataTypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `callId` int(11) NOT NULL,
  `dataType` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DataTypes`
--

LOCK TABLES `DataTypes` WRITE;
/*!40000 ALTER TABLE `DataTypes` DISABLE KEYS */;
INSERT INTO `DataTypes` VALUES (1,1,'JSON'),(2,2,'JSON'),(3,3,'JSON'),(4,4,'JSON'),(5,5,'JSON'),(6,6,'JSON'),(7,7,'JSON'),(8,8,'JSON'),(9,9,'JSON'),(10,10,'JSON');
/*!40000 ALTER TABLE `DataTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DonorInstitute`
--

DROP TABLE IF EXISTS `DonorInstitute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DonorInstitute` (
  `id` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  `DonorGermplasmId` int(11) NOT NULL,
  `instituteId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `DonorInstitute_fk2` (`DonorGermplasmId`),
  CONSTRAINT `DonorInstitute_fk2` FOREIGN KEY (`DonorGermplasmId`) REFERENCES `Germplasm` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DonorInstitute`
--

LOCK TABLES `DonorInstitute` WRITE;
/*!40000 ALTER TABLE `DonorInstitute` DISABLE KEYS */;
/*!40000 ALTER TABLE `DonorInstitute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Extract`
--

DROP TABLE IF EXISTS `Extract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Extract` (
  `id` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Extract`
--

LOCK TABLES `Extract` WRITE;
/*!40000 ALTER TABLE `Extract` DISABLE KEYS */;
/*!40000 ALTER TABLE `Extract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GenomeMap`
--

DROP TABLE IF EXISTS `GenomeMap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GenomeMap` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `speciesId` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publishedDate` date NOT NULL,
  `markerCount` int(11) NOT NULL,
  `linkageGroupCount` int(11) NOT NULL,
  `comments` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `GenomeMap_fk0` (`speciesId`),
  CONSTRAINT `GenomeMap_fk0` FOREIGN KEY (`speciesId`) REFERENCES `Species` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GenomeMap`
--

LOCK TABLES `GenomeMap` WRITE;
/*!40000 ALTER TABLE `GenomeMap` DISABLE KEYS */;
/*!40000 ALTER TABLE `GenomeMap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Germplasm`
--

DROP TABLE IF EXISTS `Germplasm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Germplasm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `speciesId` int(11) NOT NULL,
  `holdingInstitution` int(50) NOT NULL,
  `defaultDisplayName` varchar(50) NOT NULL,
  `accessionNumber` varchar(20) NOT NULL,
  `germplasmPUI` varchar(100) NOT NULL,
  `pedigree` varchar(50) NOT NULL,
  `seedSource` varchar(100) NOT NULL,
  `biologicalStatusOfAccessionCode` varchar(50) NOT NULL,
  `acquisitionDate` date NOT NULL,
  `countryOfOrigin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `defaultDisplayName` (`defaultDisplayName`),
  UNIQUE KEY `assessionNumber` (`accessionNumber`),
  UNIQUE KEY `germplasmPUI` (`germplasmPUI`),
  KEY `Germplasm_fk0` (`speciesId`),
  KEY `Germplasm_fk1` (`holdingInstitution`),
  KEY `Germplasm_fk3` (`countryOfOrigin`),
  CONSTRAINT `Germplasm_fk0` FOREIGN KEY (`speciesId`) REFERENCES `Species` (`id`),
  CONSTRAINT `Germplasm_fk1` FOREIGN KEY (`holdingInstitution`) REFERENCES `Institution` (`id`),
  CONSTRAINT `Germplasm_fk3` FOREIGN KEY (`countryOfOrigin`) REFERENCES `Country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Germplasm`
--

LOCK TABLES `Germplasm` WRITE;
/*!40000 ALTER TABLE `Germplasm` DISABLE KEYS */;
INSERT INTO `Germplasm` VALUES (1,0,3,'IR 52724-2B-6-2B-1-2','WAB0016064','https://purl.org/germplasm/id/3b83e511-1632-426d-8cf5-ad532f357d35','','IRRI','400','0000-00-00',608),(2,0,0,'SHINCHIKU-IKU 103','IRGC10430','6cf44dde-2adc-463d-a849-4faf5a0db185','','IRRI','400','0000-00-00',158),(3,0,0,'FR 13 A','IRGC117267','21ec0046-b7ce-47f4-91f2-dda6495ae65f','','IRRI','','2006-10-01',356),(4,0,0,'IR 64-21','IRGC117268','376ba3c0-8ed0-468f-ba2d-311b2028adfd','','IRRI','','2006-10-01',608),(5,0,0,'LI-JIANG-XIN-TUAN-HEI-GU','IRGC117269','15c1dfc3-807c-46f6-9da0-2d59a8e84e93','','IRRI','','2006-10-01',156),(6,0,0,'MOROBEREKAN','IRGC117272','2297477c-2ae9-452b-9bb3-f3e4190fb435','','IRRI','','2006-10-01',324),(7,0,0,'NIPPONBARE','IRGC117274','a99de2f0-2d15-4762-8685-e51a8c66b376','','IRRI','','2006-10-01',392),(8,0,0,'SWARNA','IRGC117278','dea7e75b-b889-4fc7-8e26-9a4e33ba348e','','IRRI','','2006-10-01',356),(9,0,0,'ASWINA','IRGC117281','9537e7a5-6c65-4345-826b-1a9931249022','','IRRI','500','2007-07-13',50),(10,0,0,'ARC 7229','IRGC12331','47525c35-3849-4bd1-8b1f-99b605232c2b','','IRRI','','1970-07-30',356),(11,0,0,'GOMPA 2','IRGC12894','29b2a6e9-46a2-4d93-a1f1-ca53ffb32b68','','IRRI','','1971-01-12',356),(12,0,0,'LAC23','IRGC14957','5fb54915-51ed-40f6-8e71-b9e6121d66f6','','IRRI','400','1972-03-02',430),(13,0,0,'63-104','IRGC15100','9bdca5c7-006e-42dc-bbb8-4e562df22ddb','','IRRI','','1972-05-19',384),(14,0,0,'HASAWI','IRGC16817','a272b060-4c41-4e7d-961c-275122c04a64','','IRRI','','1972-09-19',682),(15,0,0,'KERITING TINGGI','IRGC19972','2d106cd2-3889-4df8-9fc3-6f8b4fe8e4d0','','IRRI','300','1973-01-18',360),(16,0,0,'NONA BOKRA','IRGC22710','ad902f8b-9c14-4a78-82c2-4ebffc7ca6c5','','IRRI','','1973-07-20',356),(17,0,0,'BINULAWAN','IRGC26872','a6799508-2aa9-46ec-8c3c-272feb88505b','','IRRI','300','1975-01-07',608),(18,0,0,'KHAO DAWK MALI 105','IRGC27748','27756e94-501e-41f4-8482-250c6f3527b7','','IRRI','300','1975-03-19',764),(19,0,0,'CHAHORA 144','IRGC27869','a5a50ebd-87f9-4897-9af4-0e4c083afccf','','IRRI','300','1974-05-22',586),(20,0,0,'P 660','IRGC28134','ff89ca02-6b91-4f39-8b8a-4910238f6354','','IRRI','','1974-05-22',586),(21,0,0,'IR 29','IRGC30412','1c4376e3-e66c-4a6b-b990-2b80e27f9f34','','IRRI','500','1976-03-10',608),(22,0,0,'NP125','IRGC32559','ee39008e-672e-4340-8d9c-1cacb9150be4','','IRRI','','1976-07-06',356),(23,0,0,'BICO BRANCO','IRGC38994','830df449-b7f4-4a04-ab9f-05799532eba7','','IRRI','','1977-09-12',76),(24,0,0,'CICIH BETON','IRGC43372','e7bc1d1c-f0a8-4f1b-8306-dc8ae019ebf7','','IRRI','300','1978-07-31',360),(25,0,0,'TOS7564','IRGC47017','ada39cf6-7114-4144-ab2f-bf30e06c4bcc','','IRRI','300','1978-04-19',384),(26,0,0,'CANELA DE FERRO','IRGC50448','c45d2f06-958a-44f5-861c-d87635d960c9','','IRRI','500','1979-07-18',76),(27,0,0,'SINNA SITHIRA KALI','IRGC51064','5ca1a2e8-0702-42dd-8d3f-b7eaf620ea27','','IRRI','300','1979-02-26',144),(28,0,0,'PA-TOU-HUNG','IRGC51400','1942bc1a-95a3-470a-b7de-0768ab849e9a','','IRRI','500','1979-05-21',156),(29,0,0,'SONA CHUR','IRGC53931','be4e9cdc-5800-4457-a6c8-40563c027dd9','','IRRI','','1980-09-18',356),(30,0,0,'SINTANE DIOFOR','IRGC5418','5abfcd9d-c3c3-40d2-b28d-a6b73b7b6cb3','','IRRI','300','1962-04-12',854),(31,0,0,'PANKHARI 203','IRGC5999','675c7e6e-428f-44d6-9c39-5541c7293f45','','IRRI','400','1963-06-04',356),(32,0,0,'CHITRAJ(DA 23)','IRGC6208','b742901c-f981-465b-b275-c9cbb0318e24','','IRRI','400','1963-06-04',50),(33,0,0,'JHONA 349','IRGC6307','abd0051b-f9ad-4bf8-8dd6-90194708ff76','','IRRI','400','1963-06-04',356),(34,0,0,'CO 18','IRGC6331','9162a476-5808-44d2-855e-cde1b232adf5','','IRRI','400','1963-06-04',356),(35,0,0,'IR 58','IRGC63492','cd93a3a3-a4b6-40a5-965d-e192dca42eb1','','IRRI','500','1984-01-06',608),(36,0,0,'ISSAMO','IRGC63494','d4c83b3b-b806-497d-afbb-f81ff76f3244','','IRRI','','1983-01-27',466),(37,0,0,'SI ADULO','IRGC66640','91887efb-7f4c-4122-bf0a-9e54cea02466','','IRRI','300','1984-04-09',360),(38,0,0,'DINOLORES','IRGC67431','14944f89-e81d-4a48-9579-de19d554920c','','IRRI','300','1986-01-21',608),(39,0,0,'GUMPANGAR','IRGC71524','7798e57d-76ca-4f2b-9b07-bb952486eb1b','','IRRI','300','1985-02-04',458),(40,0,0,'TAK SIAH','IRGC73126','e32803a6-5d33-46b6-a1b3-ceb0639d6a27','','IRRI','300','1985-11-05',586),(41,0,0,'URYEE BOOTA','IRGC74719','1dcba894-fb5f-489c-bf8a-a4db148936de','','IRRI','300','1986-01-21',356),(42,0,0,'MTU9','IRGC7919','ec2ed821-3f73-4d18-ada1-da5c458a6239','','IRRI','','1963-04-06',356),(43,0,0,'MALAGKIT PIRURUTONG','IRGC8182','01ac39ce-130b-4425-9017-9fbcdf8ab096','','IRRI','','1962-03-23',608),(44,0,0,'KUN-MIN-TSIEH-HUNAN','IRGC8195','7d81b521-7d9e-4702-ac79-f840e87ddec9','','IRRI','500','1962-03-23',156),(45,0,0,'KARASUKARA-SURANKASU','IRGC8196','8683da4d-68b5-47aa-affa-67ee30a7c32d','','IRRI','','1962-03-23',158),(46,0,0,'DAVAO','IRGC8244','c985c305-f639-437c-909d-4b6eae05666f','','IRRI','','1962-03-23',608),(47,0,0,'MACAN BINUNDOK','IRGC8245','f3d8fd4b-1b39-444a-b675-50b751f7ee0b','','IRRI','','1962-03-23',608),(48,0,0,'NABESHI','IRGC8269','0f05bab8-9de5-452d-a70d-63bbb1ca75d1','','IRRI','','1962-03-23',158),(49,0,0,'DHOLA AMAN(LOWLAND AMAN)','IRGC8341','221c6fda-4837-49cc-b908-5d930623ffdb','','IRRI','500','1963-06-17',50),(50,0,0,'RATHUWEE','IRGC8952','b844cb44-c4f6-4a10-a951-a5c8a91ad21c','','IRRI','300','1963-07-15',144),(51,0,0,'JC148','IRGC9069','acdc55c8-c657-44b2-a3eb-6c68f32e1875','','IRRI','400','1962-03-23',356),(52,0,0,'JC149','IRGC9070','2a4425d4-dfa1-4d27-b292-f915f7b2fb97','','IRRI','400','1962-03-23',356),(53,0,0,'JC93','IRGC9175','e017d6cd-74af-4d4a-80b9-c957b2b4cb4e','','IRRI','','1962-03-23',356),(54,0,0,'JC91','IRGC9177','55cc6621-ae39-4ab8-8e47-b228c5f4d9cc','','IRRI','400','1962-03-23',356),(55,0,0,'AMARELO','IRGC9389','3991d648-3e0c-4529-b695-6e27a3e9dc41','','IRRI','','0000-00-00',348),(56,0,0,'TADUKAN','IRGC9804','56e5993f-3949-4a1a-b83e-adba21c38fd6','','IRRI','400','0000-00-00',608),(57,0,0,'POKKALI','IRGC 8948','https://purl.org/germplasm/id/4ff5603a-33d4-4e41-81b1-aec97340be9f',' ','IRRI','300','1963-07-15',144),(58,0,0,'FL 478','IRGC 117406','https://purl.org/germplasm/id/196eccff-f544-4ada-99cd-7dcaa186bacb','','IRRI','400','2007-10-01',608),(59,0,0,'PSBRC 18','IRGC 117375','https://purl.org/germplasm/id/6aac6d30-ff11-471e-a4fa-e9fb09b1137f',' ','IRRI','500','2006-11-11',608);
/*!40000 ALTER TABLE `Germplasm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GermplasmAttributeValue`
--

DROP TABLE IF EXISTS `GermplasmAttributeValue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GermplasmAttributeValue` (
  `id` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  `attributeValueId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GermplasmAttributeValue`
--

LOCK TABLES `GermplasmAttributeValue` WRITE;
/*!40000 ALTER TABLE `GermplasmAttributeValue` DISABLE KEYS */;
/*!40000 ALTER TABLE `GermplasmAttributeValue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GermplasmParents`
--

DROP TABLE IF EXISTS `GermplasmParents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GermplasmParents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent1Id` int(11) NOT NULL,
  `parent2Id` int(11) DEFAULT NULL,
  `childId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `GermplasmParents_fk0` (`parent1Id`),
  KEY `GermplasmParents_fk1` (`parent2Id`),
  KEY `GermplasmParents_fk2` (`childId`),
  CONSTRAINT `GermplasmParents_fk0` FOREIGN KEY (`parent1Id`) REFERENCES `Germplasm` (`id`),
  CONSTRAINT `GermplasmParents_fk1` FOREIGN KEY (`parent2Id`) REFERENCES `Germplasm` (`id`),
  CONSTRAINT `GermplasmParents_fk2` FOREIGN KEY (`childId`) REFERENCES `Germplasm` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GermplasmParents`
--

LOCK TABLES `GermplasmParents` WRITE;
/*!40000 ALTER TABLE `GermplasmParents` DISABLE KEYS */;
/*!40000 ALTER TABLE `GermplasmParents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GermplasmStorage`
--

DROP TABLE IF EXISTS `GermplasmStorage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GermplasmStorage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(20) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GermplasmStorage`
--

LOCK TABLES `GermplasmStorage` WRITE;
/*!40000 ALTER TABLE `GermplasmStorage` DISABLE KEYS */;
INSERT INTO `GermplasmStorage` VALUES (1,'12',2),(2,'13',2),(3,'12',3),(4,'13',3),(5,'12',4),(6,'13',4),(7,'12',5),(8,'13',5),(9,'12',6),(10,'13',6),(11,'12',7),(12,'13',7),(13,'12',8),(14,'13',8),(15,'12',9),(16,'13',9),(17,'12',10),(18,'13',10),(19,'12',11),(20,'13',11),(21,'12',12),(22,'13',12),(23,'12',13),(24,'13',13),(25,'12',14),(26,'13',14),(27,'12',15),(28,'13',15),(29,'12',16),(30,'13',16),(31,'12',17),(32,'13',17),(33,'12',18),(34,'13',18),(35,'12',19),(36,'13',19),(37,'12',20),(38,'13',20),(39,'12',21),(40,'13',21),(41,'12',22),(42,'13',22),(43,'12',23),(44,'13',23),(45,'12',24),(46,'13',24),(47,'12',25),(48,'13',25),(49,'12',26),(50,'13',26),(51,'12',27),(52,'13',27),(53,'12',28),(54,'13',28),(55,'12',29),(56,'13',29),(57,'12',30),(58,'13',30),(59,'12',31),(60,'13',31),(61,'12',32),(62,'13',32),(63,'12',33),(64,'13',33),(65,'12',34),(66,'13',34),(67,'12',35),(68,'13',35),(69,'12',36),(70,'13',36),(71,'12',37),(72,'13',37),(73,'12',38),(74,'13',38),(75,'12',39),(76,'13',39),(77,'12',40),(78,'13',40),(79,'12',41),(80,'13',41),(81,'12',42),(82,'13',42),(83,'12',43),(84,'13',43),(85,'12',44),(86,'13',44),(87,'12',45),(88,'13',45),(89,'12',46),(90,'13',46),(91,'12',47),(92,'13',47),(93,'12',48),(94,'13',48),(95,'12',49),(96,'13',49),(97,'12',50),(98,'13',50),(99,'12',51),(100,'13',51),(101,'12',52),(102,'13',52),(103,'12',53),(104,'13',53),(105,'12',54),(106,'13',54),(107,'12',55),(108,'13',55),(109,'12',56),(110,'13',56);
/*!40000 ALTER TABLE `GermplasmStorage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GermplasmSynonym`
--

DROP TABLE IF EXISTS `GermplasmSynonym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GermplasmSynonym` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `germplasmId` int(11) NOT NULL,
  `synonym` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GermplasmSynonym`
--

LOCK TABLES `GermplasmSynonym` WRITE;
/*!40000 ALTER TABLE `GermplasmSynonym` DISABLE KEYS */;
INSERT INTO `GermplasmSynonym` VALUES (1,21,'IR 2061-464-4-14-1'),(2,21,'Gpno 20090'),(3,58,'IR 66946-3R-178-1-1');
/*!40000 ALTER TABLE `GermplasmSynonym` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Institution`
--

DROP TABLE IF EXISTS `Institution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Institution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(20) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `locationId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Institution`
--

LOCK TABLES `Institution` WRITE;
/*!40000 ALTER TABLE `Institution` DISABLE KEYS */;
INSERT INTO `Institution` VALUES (1,NULL,'ITQB',2),(2,'USA029','National Small Grains Germplasm Research Facility',3),(3,'BEN089','Africa Rice Center',4),(4,'PHL001','International Rice Research Institute',1),(5,NULL,'iBET',2);
/*!40000 ALTER TABLE `Institution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LinkageGroup`
--

DROP TABLE IF EXISTS `LinkageGroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LinkageGroup` (
  `id` int(11) NOT NULL,
  `genomeMapId` int(11) NOT NULL,
  `numberMarkers` int(11) NOT NULL,
  `maxPosition` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `LinkageGroup_fk0` (`genomeMapId`),
  CONSTRAINT `LinkageGroup_fk0` FOREIGN KEY (`genomeMapId`) REFERENCES `GenomeMap` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LinkageGroup`
--

LOCK TABLES `LinkageGroup` WRITE;
/*!40000 ALTER TABLE `LinkageGroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `LinkageGroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Location`
--

DROP TABLE IF EXISTS `Location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locationType` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `altitude` int(11) DEFAULT NULL,
  `country` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `Location_fk0` (`country`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
INSERT INTO `Location` VALUES (1,'IRRI, Pili Drive, University of the Philippines Los Baños, Los Baños, 4030 Laguna, Filipinas','IRRI','University','14.18138889','121.26638889',16,608),(2,'Instituto de Tecnologia Química e Biológica','ITQB','Institution','38.696','-9.322',46,620),(3,'National Small Grains Germplasm Research Facility','NSGC','Genebank','-112.5','42.57',1340,840),(4,'Africa Rice Center','AfricaRice','Genebank','2.33','6.42',NULL,204);
/*!40000 ALTER TABLE `Location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LocationAdditionalInfo`
--

DROP TABLE IF EXISTS `LocationAdditionalInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LocationAdditionalInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` int(11) NOT NULL,
  `propertyName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `propertyValue` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `LocationAdditionalInfo_fk0` (`location`),
  CONSTRAINT `LocationAdditionalInfo_fk0` FOREIGN KEY (`location`) REFERENCES `Location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LocationAdditionalInfo`
--

LOCK TABLES `LocationAdditionalInfo` WRITE;
/*!40000 ALTER TABLE `LocationAdditionalInfo` DISABLE KEYS */;
INSERT INTO `LocationAdditionalInfo` VALUES (1,1,'RainFall','21ppm');
/*!40000 ALTER TABLE `LocationAdditionalInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Marker`
--

DROP TABLE IF EXISTS `Marker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Marker` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `linkageGroupId` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `location` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Marker`
--

LOCK TABLES `Marker` WRITE;
/*!40000 ALTER TABLE `Marker` DISABLE KEYS */;
/*!40000 ALTER TABLE `Marker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MarkerAnalysisMethods`
--

DROP TABLE IF EXISTS `MarkerAnalysisMethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MarkerAnalysisMethods` (
  `id` int(11) NOT NULL,
  `markerId` int(11) NOT NULL,
  `analysisMethod` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MarkerAnalysisMethods_fk0` (`markerId`),
  CONSTRAINT `MarkerAnalysisMethods_fk0` FOREIGN KEY (`markerId`) REFERENCES `Marker` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MarkerAnalysisMethods`
--

LOCK TABLES `MarkerAnalysisMethods` WRITE;
/*!40000 ALTER TABLE `MarkerAnalysisMethods` DISABLE KEYS */;
/*!40000 ALTER TABLE `MarkerAnalysisMethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MarkerProfile`
--

DROP TABLE IF EXISTS `MarkerProfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MarkerProfile` (
  `id` int(11) NOT NULL,
  `extract` int(11) NOT NULL,
  `analysisMethod` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MarkerProfile`
--

LOCK TABLES `MarkerProfile` WRITE;
/*!40000 ALTER TABLE `MarkerProfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `MarkerProfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MarkerSynonym`
--

DROP TABLE IF EXISTS `MarkerSynonym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MarkerSynonym` (
  `id` int(11) NOT NULL,
  `markerId` int(11) NOT NULL,
  `synonym` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MarkerSynonym`
--

LOCK TABLES `MarkerSynonym` WRITE;
/*!40000 ALTER TABLE `MarkerSynonym` DISABLE KEYS */;
/*!40000 ALTER TABLE `MarkerSynonym` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MarkerprofileValue`
--

DROP TABLE IF EXISTS `MarkerprofileValue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MarkerprofileValue` (
  `id` int(11) NOT NULL,
  `markerprofileId` int(11) NOT NULL,
  `markervalue1Id` int(11) DEFAULT NULL,
  `markervalue2Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MarkerprofileValue_fk0` (`markerprofileId`),
  CONSTRAINT `MarkerprofileValue_fk0` FOREIGN KEY (`markerprofileId`) REFERENCES `MarkerProfile` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MarkerprofileValue`
--

LOCK TABLES `MarkerprofileValue` WRITE;
/*!40000 ALTER TABLE `MarkerprofileValue` DISABLE KEYS */;
/*!40000 ALTER TABLE `MarkerprofileValue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Method`
--

DROP TABLE IF EXISTS `Method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Method` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `methodId` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `formula` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reference` varchar(254) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `class` (`class`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Method`
--

LOCK TABLES `Method` WRITE;
/*!40000 ALTER TABLE `Method` DISABLE KEYS */;
INSERT INTO `Method` VALUES (1,'CO_320:0001226','Image analysis - Root length using WinRhizo in SITIS platform','Measurement','Scan roots from soil depths of 0-45 cm using CI-600 scanner system associated with the WinRhizo software and calculate root length based on WinRHIZO image analysis. WinRHIZO uses a non-statistical method to calculate total root length from a one pixel thinned image by multiplying the number of pixels by pixel size.','NULL','Regent Instruments, Win/MacRHIZO V 5.0A Userãs Guide, Regent Instruments, Québec, QC, 2001');
/*!40000 ALTER TABLE `Method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Methods`
--

DROP TABLE IF EXISTS `Methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Methods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `callId` int(11) NOT NULL,
  `method` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Methods`
--

LOCK TABLES `Methods` WRITE;
/*!40000 ALTER TABLE `Methods` DISABLE KEYS */;
INSERT INTO `Methods` VALUES (1,1,'GET'),(2,2,'GET'),(3,3,'GET'),(4,1,'POST'),(5,4,'GET'),(6,5,'GET'),(7,6,'GET'),(8,6,'POST'),(9,7,'GET'),(10,8,'GET'),(11,9,'GET'),(12,10,'POST');
/*!40000 ALTER TABLE `Methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Observation`
--

DROP TABLE IF EXISTS `Observation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Observation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observationVariableId` int(11) NOT NULL,
  `operator` int(11) NOT NULL,
  `uploadedBy` int(11) NOT NULL,
  `plantLevel` tinyint(1) NOT NULL,
  `studyPlotId` int(11) DEFAULT NULL,
  `studyPlantId` int(11) DEFAULT NULL,
  `observationTimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `value` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Observation_fk0` (`observationVariableId`),
  KEY `Observation_fk1` (`operator`),
  KEY `Observation_fk2` (`uploadedBy`),
  KEY `Observation_fk3` (`studyPlotId`),
  KEY `Observation_fk4` (`studyPlantId`),
  CONSTRAINT `Observation_fk0` FOREIGN KEY (`observationVariableId`) REFERENCES `ObservationVariable` (`id`),
  CONSTRAINT `Observation_fk1` FOREIGN KEY (`operator`) REFERENCES `Person` (`id`),
  CONSTRAINT `Observation_fk2` FOREIGN KEY (`uploadedBy`) REFERENCES `Person` (`id`),
  CONSTRAINT `Observation_fk3` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot` (`id`),
  CONSTRAINT `Observation_fk4` FOREIGN KEY (`studyPlantId`) REFERENCES `StudyPlant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Observation`
--

LOCK TABLES `Observation` WRITE;
/*!40000 ALTER TABLE `Observation` DISABLE KEYS */;
INSERT INTO `Observation` VALUES (1,1,3,3,1,5,369,'2011-11-21 00:00:00','13.5'),(2,1,3,3,1,5,370,'2011-11-21 00:00:00','30.8'),(3,1,3,3,1,5,371,'2011-11-21 00:00:00','29.5'),(4,1,3,3,1,5,372,'2011-11-21 00:00:00','25'),(5,1,3,3,1,5,373,'2011-11-21 00:00:00','25.4');
/*!40000 ALTER TABLE `Observation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ObservationUnit`
--

DROP TABLE IF EXISTS `ObservationUnit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ObservationUnit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locationId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `ObservationUnit_fk0` (`locationId`),
  CONSTRAINT `ObservationUnit_fk0` FOREIGN KEY (`locationId`) REFERENCES `Location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ObservationUnit`
--

LOCK TABLES `ObservationUnit` WRITE;
/*!40000 ALTER TABLE `ObservationUnit` DISABLE KEYS */;
INSERT INTO `ObservationUnit` VALUES (1,'Whole Plant',1),(2,'Shoot',1),(3,'Root',1);
/*!40000 ALTER TABLE `ObservationUnit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ObservationUnitXRef`
--

DROP TABLE IF EXISTS `ObservationUnitXRef`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ObservationUnitXRef` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observationUnitId` int(11) NOT NULL,
  `source` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `xref` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ObservationUnitXRef_fk0` (`observationUnitId`),
  CONSTRAINT `ObservationUnitXRef_fk0` FOREIGN KEY (`observationUnitId`) REFERENCES `ObservationUnit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ObservationUnitXRef`
--

LOCK TABLES `ObservationUnitXRef` WRITE;
/*!40000 ALTER TABLE `ObservationUnitXRef` DISABLE KEYS */;
/*!40000 ALTER TABLE `ObservationUnitXRef` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ObservationVariable`
--

DROP TABLE IF EXISTS `ObservationVariable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ObservationVariable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ontologyId` int(11) NOT NULL,
  `growthStage` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `xref` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `institution` int(11) NOT NULL,
  `scientist` int(11) NOT NULL,
  `date` date NOT NULL,
  `language` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crop` int(11) NOT NULL,
  `traitId` int(15) NOT NULL,
  `methodId` int(15) NOT NULL,
  `scaleId` int(15) NOT NULL,
  `defaultValue` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `ObservationVariable_fk0` (`ontologyId`),
  KEY `ObservationVariable_fk1` (`institution`),
  KEY `ObservationVariable_fk2` (`scientist`),
  KEY `ObservationVariable_fk3` (`crop`),
  KEY `ObservationVariable_fk4` (`traitId`),
  KEY `ObservationVariable_fk5` (`methodId`),
  KEY `ObservationVariable_fk6` (`scaleId`),
  CONSTRAINT `ObservationVariable_fk0` FOREIGN KEY (`ontologyId`) REFERENCES `Ontology` (`id`),
  CONSTRAINT `ObservationVariable_fk1` FOREIGN KEY (`institution`) REFERENCES `Institution` (`id`),
  CONSTRAINT `ObservationVariable_fk2` FOREIGN KEY (`scientist`) REFERENCES `Person` (`id`),
  CONSTRAINT `ObservationVariable_fk3` FOREIGN KEY (`crop`) REFERENCES `Crop` (`id`),
  CONSTRAINT `ObservationVariable_fk4` FOREIGN KEY (`traitId`) REFERENCES `Trait` (`id`),
  CONSTRAINT `ObservationVariable_fk5` FOREIGN KEY (`methodId`) REFERENCES `Method` (`id`),
  CONSTRAINT `ObservationVariable_fk6` FOREIGN KEY (`scaleId`) REFERENCES `Scale` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ObservationVariable`
--

LOCK TABLES `ObservationVariable` WRITE;
/*!40000 ALTER TABLE `ObservationVariable` DISABLE KEYS */;
INSERT INTO `ObservationVariable` VALUES (1,'RtL_Win_cm',1,'Vegetative [PO:0007134]','Standard GRISP Pheno','http://archive.gramene.org/db/ontology/search?id=P',0,2,'2016-03-09','EN',0,1,1,1,'NULL');
/*!40000 ALTER TABLE `ObservationVariable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ObservationVariableSynonym`
--

DROP TABLE IF EXISTS `ObservationVariableSynonym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ObservationVariableSynonym` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observationVariableId` int(11) NOT NULL,
  `synonym` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ObservationVariableSynonym_fk0` (`observationVariableId`),
  CONSTRAINT `ObservationVariableSynonym_fk0` FOREIGN KEY (`observationVariableId`) REFERENCES `ObservationVariable` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ObservationVariableSynonym`
--

LOCK TABLES `ObservationVariableSynonym` WRITE;
/*!40000 ALTER TABLE `ObservationVariableSynonym` DISABLE KEYS */;
/*!40000 ALTER TABLE `ObservationVariableSynonym` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ontology`
--

DROP TABLE IF EXISTS `Ontology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ontology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accession` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ontology`
--

LOCK TABLES `Ontology` WRITE;
/*!40000 ALTER TABLE `Ontology` DISABLE KEYS */;
INSERT INTO `Ontology` VALUES (1,'http://agr','Rice Ontology'),(2,'http://pur','Trait Ontology');
/*!40000 ALTER TABLE `Ontology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Person`
--

DROP TABLE IF EXISTS `Person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `honorific` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orcid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `affiliation` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `Person_fk0` (`affiliation`),
  CONSTRAINT `Person_fk0` FOREIGN KEY (`affiliation`) REFERENCES `Institution` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Person`
--

LOCK TABLES `Person` WRITE;
/*!40000 ALTER TABLE `Person` DISABLE KEYS */;
INSERT INTO `Person` VALUES (1,'M. Margarida Oliveira','Dra.','Principal Investigator','mmolive@itqb.unl.pt','0000-0002-0095-1952',1),(2,'Julie Pasuquin','Dr.','Manager, GRiSP','j.pasuquin@irri.org',NULL,0),(3,'Sónia Negrão','Dra.','Project Coordinator','snegrao@itqb.unl.pt','NULL',5);
/*!40000 ALTER TABLE `Person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Program`
--

DROP TABLE IF EXISTS `Program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `objective` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `leadPerson` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `abbreviation` (`abbreviation`),
  KEY `Program_fk0` (`leadPerson`),
  CONSTRAINT `Program_fk0` FOREIGN KEY (`leadPerson`) REFERENCES `Person` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Program`
--

LOCK TABLES `Program` WRITE;
/*!40000 ALTER TABLE `Program` DISABLE KEYS */;
INSERT INTO `Program` VALUES (1,'New allelic variants found in key rice salt-tolera','NULL','Testing Salt stress physiological traits in rice.',1);
/*!40000 ALTER TABLE `Program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sample`
--

DROP TABLE IF EXISTS `Sample`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sample` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plantId` int(11) NOT NULL,
  `takenBy` int(11) NOT NULL,
  `sampleDate` date NOT NULL,
  `seasonId` int(11) NOT NULL,
  `sampleType` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tissueType` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Sample_fk0` (`plantId`),
  KEY `Sample_fk1` (`takenBy`),
  KEY `Sample_fk2` (`seasonId`),
  CONSTRAINT `Sample_fk0` FOREIGN KEY (`plantId`) REFERENCES `StudyPlant` (`id`),
  CONSTRAINT `Sample_fk1` FOREIGN KEY (`takenBy`) REFERENCES `Person` (`id`),
  CONSTRAINT `Sample_fk2` FOREIGN KEY (`seasonId`) REFERENCES `Season` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sample`
--

LOCK TABLES `Sample` WRITE;
/*!40000 ALTER TABLE `Sample` DISABLE KEYS */;
/*!40000 ALTER TABLE `Sample` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Scale`
--

DROP TABLE IF EXISTS `Scale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Scale` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `scaleId` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataTypeId` int(11) NOT NULL,
  `decimalPlaces` int(11) NOT NULL,
  `xref` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `min` float DEFAULT NULL,
  `max` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `id` (`name`),
  KEY `Scale_fk0` (`dataTypeId`),
  CONSTRAINT `Scale_fk0` FOREIGN KEY (`dataTypeId`) REFERENCES `DataType` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Scale`
--

LOCK TABLES `Scale` WRITE;
/*!40000 ALTER TABLE `Scale` DISABLE KEYS */;
INSERT INTO `Scale` VALUES (1,'CO_320:0001359','centimeter',1,2,'UO:0000015',0,1e18);
/*!40000 ALTER TABLE `Scale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Season`
--

DROP TABLE IF EXISTS `Season`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Season` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `season` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Season`
--

LOCK TABLES `Season` WRITE;
/*!40000 ALTER TABLE `Season` DISABLE KEYS */;
INSERT INTO `Season` VALUES (1,'Cool dry',2011);
/*!40000 ALTER TABLE `Season` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Species`
--

DROP TABLE IF EXISTS `Species`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Species` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cropId` int(11) NOT NULL,
  `genus` varchar(50) NOT NULL,
  `species` varchar(50) NOT NULL,
  `speciesAuthority` varchar(50) NOT NULL,
  `subtaxa` varchar(50) NOT NULL,
  `subtaxaAuthority` varchar(50) NOT NULL,
  `NCBItaxonId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Species_fk0` (`cropId`),
  CONSTRAINT `Species_fk0` FOREIGN KEY (`cropId`) REFERENCES `Crop` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Species`
--

LOCK TABLES `Species` WRITE;
/*!40000 ALTER TABLE `Species` DISABLE KEYS */;
INSERT INTO `Species` VALUES (0,0,'Oryza','sativa','Carl Linnaeus','','',4530);
/*!40000 ALTER TABLE `Species` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Study`
--

DROP TABLE IF EXISTS `Study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Study` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trialId` int(11) NOT NULL,
  `locationId` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `Study_fk0` (`trialId`),
  KEY `Study_fk1` (`locationId`),
  KEY `Study_fk2` (`type`),
  CONSTRAINT `Study_fk0` FOREIGN KEY (`trialId`) REFERENCES `Trial` (`id`),
  CONSTRAINT `Study_fk1` FOREIGN KEY (`locationId`) REFERENCES `Location` (`id`),
  CONSTRAINT `Study_fk2` FOREIGN KEY (`type`) REFERENCES `StudyType` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Study`
--

LOCK TABLES `Study` WRITE;
/*!40000 ALTER TABLE `Study` DISABLE KEYS */;
INSERT INTO `Study` VALUES (1,'Phenotyping in salt stress',1,1,1,0);
/*!40000 ALTER TABLE `Study` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyAdditionalInfo`
--

DROP TABLE IF EXISTS `StudyAdditionalInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyAdditionalInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyId` int(11) NOT NULL,
  `propertyName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `propertyValue` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyAdditionalInfo_fk0` (`studyId`),
  CONSTRAINT `StudyAdditionalInfo_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyAdditionalInfo`
--

LOCK TABLES `StudyAdditionalInfo` WRITE;
/*!40000 ALTER TABLE `StudyAdditionalInfo` DISABLE KEYS */;
INSERT INTO `StudyAdditionalInfo` VALUES (1,1,'Articlue','Nature');
/*!40000 ALTER TABLE `StudyAdditionalInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyContact`
--

DROP TABLE IF EXISTS `StudyContact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyContact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyId` int(11) NOT NULL,
  `contact` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyContact_fk0` (`studyId`),
  KEY `StudyContact_fk1` (`contact`),
  CONSTRAINT `StudyContact_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudyContact_fk1` FOREIGN KEY (`contact`) REFERENCES `Person` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyContact`
--

LOCK TABLES `StudyContact` WRITE;
/*!40000 ALTER TABLE `StudyContact` DISABLE KEYS */;
INSERT INTO `StudyContact` VALUES (1,1,1);
/*!40000 ALTER TABLE `StudyContact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyGermplasm`
--

DROP TABLE IF EXISTS `StudyGermplasm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyGermplasm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyId` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyGermplasm_fk0` (`studyId`),
  KEY `StudyGermplasm_fk1` (`germplasmId`),
  CONSTRAINT `StudyGermplasm_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudyGermplasm_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyGermplasm`
--

LOCK TABLES `StudyGermplasm` WRITE;
/*!40000 ALTER TABLE `StudyGermplasm` DISABLE KEYS */;
INSERT INTO `StudyGermplasm` VALUES (0,1,2),(1,1,3),(2,1,4),(3,1,5),(4,1,6),(5,1,7),(6,1,8),(7,1,9),(8,1,10),(9,1,11),(10,1,12),(11,1,13),(12,1,14),(13,1,15),(14,1,16),(15,1,17),(16,1,18),(17,1,19),(18,1,20),(19,1,21),(20,1,22),(21,1,23),(22,1,24),(23,1,25),(24,1,26),(25,1,27),(26,1,28),(27,1,29),(28,1,30),(29,1,31),(30,1,32),(31,1,33),(32,1,34),(33,1,35),(34,1,36),(35,1,37),(36,1,38),(37,1,39),(38,1,40),(39,1,41),(40,1,42),(41,1,43),(42,1,44),(43,1,45),(44,1,46),(45,1,47),(46,1,48),(47,1,49),(48,1,50),(49,1,51),(50,1,52),(51,1,53),(52,1,54),(53,1,55),(54,1,56);
/*!40000 ALTER TABLE `StudyGermplasm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyObservationUnit`
--

DROP TABLE IF EXISTS `StudyObservationUnit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyObservationUnit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyId` int(11) NOT NULL,
  `observationUnit` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyObservationUnit_fk0` (`studyId`),
  KEY `StudyObservationUnit_fk1` (`observationUnit`),
  CONSTRAINT `StudyObservationUnit_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudyObservationUnit_fk1` FOREIGN KEY (`observationUnit`) REFERENCES `ObservationUnit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyObservationUnit`
--

LOCK TABLES `StudyObservationUnit` WRITE;
/*!40000 ALTER TABLE `StudyObservationUnit` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyObservationUnit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyObservationVariable`
--

DROP TABLE IF EXISTS `StudyObservationVariable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyObservationVariable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyId` int(11) NOT NULL,
  `observationVariableId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyObservationVariable_fk0` (`studyId`),
  KEY `StudyObservationVariable_fk1` (`observationVariableId`),
  CONSTRAINT `StudyObservationVariable_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudyObservationVariable_fk1` FOREIGN KEY (`observationVariableId`) REFERENCES `ObservationVariable` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyObservationVariable`
--

LOCK TABLES `StudyObservationVariable` WRITE;
/*!40000 ALTER TABLE `StudyObservationVariable` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyObservationVariable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyPlant`
--

DROP TABLE IF EXISTS `StudyPlant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyPlant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyObservationUnitId` int(11) DEFAULT NULL,
  `studyPlotId` int(11) NOT NULL,
  `plantNumber` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  `blockNumber` int(11) NOT NULL,
  `X` int(11) NOT NULL,
  `Y` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyPlant_fk1` (`germplasmId`),
  CONSTRAINT `StudyPlant_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyPlant`
--

LOCK TABLES `StudyPlant` WRITE;
/*!40000 ALTER TABLE `StudyPlant` DISABLE KEYS */;
INSERT INTO `StudyPlant` VALUES (1,NULL,1,1,58,1,1,1),(2,NULL,1,2,58,1,2,1),(3,NULL,1,3,58,1,3,1),(4,NULL,1,4,58,1,4,1),(5,NULL,1,5,58,1,5,1),(6,NULL,1,6,58,1,6,1),(7,NULL,1,7,58,1,7,1),(8,NULL,1,8,58,1,8,1),(9,NULL,1,9,21,1,1,2),(10,NULL,1,10,21,1,2,2),(11,NULL,1,11,21,1,3,2),(12,NULL,1,12,21,1,4,2),(13,NULL,1,13,21,1,5,2),(14,NULL,1,14,21,1,6,2),(15,NULL,1,15,21,1,7,2),(16,NULL,1,16,21,1,8,2),(17,NULL,1,17,30,1,1,3),(18,NULL,1,18,30,1,2,3),(19,NULL,1,19,30,1,3,3),(20,NULL,1,20,30,1,4,3),(21,NULL,1,21,30,1,5,3),(22,NULL,1,22,30,1,6,3),(23,NULL,1,23,30,1,7,3),(24,NULL,1,24,30,1,8,3),(25,NULL,1,25,31,1,1,4),(26,NULL,1,26,31,1,2,4),(27,NULL,1,27,31,1,3,4),(28,NULL,1,28,31,1,4,4),(29,NULL,1,29,31,1,5,4),(30,NULL,1,30,31,1,6,4),(31,NULL,1,31,31,1,7,4),(32,NULL,1,32,31,1,8,4),(33,NULL,1,33,32,1,1,5),(34,NULL,1,34,32,1,2,5),(35,NULL,1,35,32,1,3,5),(36,NULL,1,36,32,1,4,5),(37,NULL,1,37,32,1,5,5),(38,NULL,1,38,32,1,6,5),(39,NULL,1,39,32,1,7,5),(40,NULL,1,40,32,1,8,5),(41,NULL,1,41,33,1,1,6),(42,NULL,1,42,33,1,2,6),(43,NULL,1,43,33,1,3,6),(44,NULL,1,44,33,1,4,6),(45,NULL,1,45,33,1,5,6),(46,NULL,1,46,33,1,6,6),(47,NULL,1,47,33,1,7,6),(48,NULL,1,48,33,1,8,6),(49,NULL,1,49,34,1,1,7),(50,NULL,1,50,34,1,2,7),(51,NULL,1,51,34,1,3,7),(52,NULL,1,52,34,1,4,7),(53,NULL,1,53,34,1,5,7),(54,NULL,1,54,34,1,6,7),(55,NULL,1,55,34,1,7,7),(56,NULL,1,56,34,1,8,7),(57,NULL,1,57,42,1,1,8),(58,NULL,1,58,42,1,2,8),(59,NULL,1,59,42,1,3,8),(60,NULL,1,60,42,1,4,8),(61,NULL,1,61,42,1,5,8),(62,NULL,1,62,42,1,6,8),(63,NULL,1,63,42,1,7,8),(64,NULL,1,64,42,1,8,8),(65,NULL,1,65,43,1,1,9),(66,NULL,1,66,43,1,2,9),(67,NULL,1,67,43,1,3,9),(68,NULL,1,68,43,1,4,9),(69,NULL,1,69,43,1,5,9),(70,NULL,1,70,43,1,6,9),(71,NULL,1,71,43,1,7,9),(72,NULL,1,72,43,1,8,9),(73,NULL,1,73,44,1,1,10),(74,NULL,1,74,44,1,2,10),(75,NULL,1,75,44,1,3,10),(76,NULL,1,76,44,1,4,10),(77,NULL,1,77,44,1,5,10),(78,NULL,1,78,44,1,6,10),(79,NULL,1,79,44,1,7,10),(80,NULL,1,80,44,1,8,10),(81,NULL,1,81,45,1,1,11),(82,NULL,1,82,45,1,2,11),(83,NULL,1,83,45,1,3,11),(84,NULL,1,84,45,1,4,11),(85,NULL,1,85,45,1,5,11),(86,NULL,1,86,45,1,6,11),(87,NULL,1,87,45,1,7,11),(88,NULL,1,88,45,1,8,11),(89,NULL,2,89,58,1,1,1),(90,NULL,2,90,58,1,2,1),(91,NULL,2,91,58,1,3,1),(92,NULL,2,92,58,1,4,1),(93,NULL,2,93,58,1,5,1),(94,NULL,2,94,58,1,6,1),(95,NULL,2,95,58,1,7,1),(96,NULL,2,96,58,1,8,1),(97,NULL,2,97,21,1,1,2),(98,NULL,2,98,21,1,2,2),(99,NULL,2,99,21,1,3,2),(100,NULL,2,100,21,1,4,2),(101,NULL,2,101,21,1,5,2),(102,NULL,2,102,21,1,6,2),(103,NULL,2,103,21,1,7,2),(104,NULL,2,104,21,1,8,2),(105,NULL,2,105,45,1,1,3),(106,NULL,2,106,45,1,2,3),(107,NULL,2,107,45,1,3,3),(108,NULL,2,108,45,1,4,3),(109,NULL,2,109,45,1,5,3),(110,NULL,2,110,45,1,6,3),(111,NULL,2,111,45,1,7,3),(112,NULL,2,112,45,1,8,3),(113,NULL,2,113,46,1,1,4),(114,NULL,2,114,46,1,2,4),(115,NULL,2,115,46,1,3,4),(116,NULL,2,116,46,1,4,4),(117,NULL,2,117,46,1,5,4),(118,NULL,2,118,46,1,6,4),(119,NULL,2,119,46,1,7,4),(120,NULL,2,120,46,1,8,4),(121,NULL,2,121,47,1,1,5),(122,NULL,2,122,47,1,2,5),(123,NULL,2,123,47,1,3,5),(124,NULL,2,124,47,1,4,5),(125,NULL,2,125,47,1,5,5),(126,NULL,2,126,47,1,6,5),(127,NULL,2,127,47,1,7,5),(128,NULL,2,128,47,1,8,5),(129,NULL,2,129,48,1,1,6),(130,NULL,2,130,48,1,2,6),(131,NULL,2,131,48,1,3,6),(132,NULL,2,132,48,1,4,6),(133,NULL,2,133,48,1,5,6),(134,NULL,2,134,48,1,6,6),(135,NULL,2,135,48,1,7,6),(136,NULL,2,136,48,1,8,6),(137,NULL,2,137,49,1,1,7),(138,NULL,2,138,49,1,2,7),(139,NULL,2,139,49,1,3,7),(140,NULL,2,140,49,1,4,7),(141,NULL,2,141,49,1,5,7),(142,NULL,2,142,49,1,6,7),(143,NULL,2,143,49,1,7,7),(144,NULL,2,144,49,1,8,7),(145,NULL,2,145,50,1,1,8),(146,NULL,2,146,50,1,2,8),(147,NULL,2,147,50,1,3,8),(148,NULL,2,148,50,1,4,8),(149,NULL,2,149,50,1,5,8),(150,NULL,2,150,50,1,6,8),(151,NULL,2,151,50,1,7,8),(152,NULL,2,152,50,1,8,8),(153,NULL,2,153,51,1,1,9),(154,NULL,2,154,51,1,2,9),(155,NULL,2,155,51,1,3,9),(156,NULL,2,156,51,1,4,9),(157,NULL,2,157,51,1,5,9),(158,NULL,2,158,51,1,6,9),(159,NULL,2,159,51,1,7,9),(160,NULL,2,160,51,1,8,9),(161,NULL,2,161,52,1,1,10),(162,NULL,2,162,52,1,2,10),(163,NULL,2,163,52,1,3,10),(164,NULL,2,164,52,1,4,10),(165,NULL,2,165,52,1,5,10),(166,NULL,2,166,52,1,6,10),(167,NULL,2,167,52,1,7,10),(168,NULL,2,168,52,1,8,10),(169,NULL,2,169,53,1,1,11),(170,NULL,2,170,53,1,2,11),(171,NULL,2,171,53,1,3,11),(172,NULL,2,172,53,1,4,11),(173,NULL,2,173,53,1,5,11),(174,NULL,2,174,53,1,6,11),(175,NULL,2,175,53,1,7,11),(176,NULL,2,176,53,1,8,11),(177,NULL,3,177,58,1,1,1),(178,NULL,3,178,58,1,2,1),(179,NULL,3,179,58,1,3,1),(180,NULL,3,180,58,1,4,1),(181,NULL,3,181,58,1,5,1),(182,NULL,3,182,58,1,6,1),(183,NULL,3,183,58,1,7,1),(184,NULL,3,184,58,1,8,1),(185,NULL,3,185,21,1,1,2),(186,NULL,3,186,21,1,2,2),(187,NULL,3,187,21,1,3,2),(188,NULL,3,188,21,1,4,2),(189,NULL,3,189,21,1,5,2),(190,NULL,3,190,21,1,6,2),(191,NULL,3,191,21,1,7,2),(192,NULL,3,192,21,1,8,2),(193,NULL,3,193,54,1,1,3),(194,NULL,3,194,54,1,2,3),(195,NULL,3,195,54,1,3,3),(196,NULL,3,196,54,1,4,3),(197,NULL,3,197,54,1,5,3),(198,NULL,3,198,54,1,6,3),(199,NULL,3,199,54,1,7,3),(200,NULL,3,200,54,1,8,3),(201,NULL,3,201,55,1,1,4),(202,NULL,3,202,55,1,2,4),(203,NULL,3,203,55,1,3,4),(204,NULL,3,204,55,1,4,4),(205,NULL,3,205,55,1,5,4),(206,NULL,3,206,55,1,6,4),(207,NULL,3,207,55,1,7,4),(208,NULL,3,208,55,1,8,4),(209,NULL,3,209,56,1,1,5),(210,NULL,3,210,56,1,2,5),(211,NULL,3,211,56,1,3,5),(212,NULL,3,212,56,1,4,5),(213,NULL,3,213,56,1,5,5),(214,NULL,3,214,56,1,6,5),(215,NULL,3,215,56,1,7,5),(216,NULL,3,216,56,1,8,5),(217,NULL,3,217,2,1,1,6),(218,NULL,3,218,2,1,2,6),(219,NULL,3,219,2,1,3,6),(220,NULL,3,220,2,1,4,6),(221,NULL,3,221,2,1,5,6),(222,NULL,3,222,2,1,6,6),(223,NULL,3,223,2,1,7,6),(224,NULL,3,224,2,1,8,6),(225,NULL,3,225,10,1,1,7),(226,NULL,3,226,10,1,2,7),(227,NULL,3,227,10,1,3,7),(228,NULL,3,228,10,1,4,7),(229,NULL,3,229,10,1,5,7),(230,NULL,3,230,10,1,6,7),(231,NULL,3,231,10,1,7,7),(232,NULL,3,232,10,1,8,7),(233,NULL,3,233,11,1,1,8),(234,NULL,3,234,11,1,2,8),(235,NULL,3,235,11,1,3,8),(236,NULL,3,236,11,1,4,8),(237,NULL,3,237,11,1,5,8),(238,NULL,3,238,11,1,6,8),(239,NULL,3,239,11,1,7,8),(240,NULL,3,240,11,1,8,8),(241,NULL,3,241,12,1,1,9),(242,NULL,3,242,12,1,2,9),(243,NULL,3,243,12,1,3,9),(244,NULL,3,244,12,1,4,9),(245,NULL,3,245,12,1,5,9),(246,NULL,3,246,12,1,6,9),(247,NULL,3,247,12,1,7,9),(248,NULL,3,248,12,1,8,9),(249,NULL,3,249,13,1,1,10),(250,NULL,3,250,13,1,2,10),(251,NULL,3,251,13,1,3,10),(252,NULL,3,252,13,1,4,10),(253,NULL,3,253,13,1,5,10),(254,NULL,3,254,13,1,6,10),(255,NULL,3,255,13,1,7,10),(256,NULL,3,256,13,1,8,10),(257,NULL,3,257,15,1,1,11),(258,NULL,3,258,15,1,2,11),(259,NULL,3,259,15,1,3,11),(260,NULL,3,260,15,1,4,11),(261,NULL,3,261,15,1,5,11),(262,NULL,3,262,15,1,6,11),(263,NULL,3,263,15,1,7,11),(264,NULL,3,264,15,1,8,11),(265,NULL,4,265,58,1,1,1),(266,NULL,4,266,58,1,2,1),(267,NULL,4,267,58,1,3,1),(268,NULL,4,268,58,1,4,1),(269,NULL,4,269,58,1,5,1),(270,NULL,4,270,58,1,6,1),(271,NULL,4,271,58,1,7,1),(272,NULL,4,272,58,1,8,1),(273,NULL,4,273,21,1,1,2),(274,NULL,4,274,21,1,2,2),(275,NULL,4,275,21,1,3,2),(276,NULL,4,276,21,1,4,2),(277,NULL,4,277,21,1,5,2),(278,NULL,4,278,21,1,6,2),(279,NULL,4,279,21,1,7,2),(280,NULL,4,280,21,1,8,2),(281,NULL,4,281,17,1,1,3),(282,NULL,4,282,17,1,2,3),(283,NULL,4,283,17,1,3,3),(284,NULL,4,284,17,1,4,3),(285,NULL,4,285,17,1,5,3),(286,NULL,4,286,17,1,6,3),(287,NULL,4,287,17,1,7,3),(288,NULL,4,288,17,1,8,3),(289,NULL,4,289,18,1,1,4),(290,NULL,4,290,18,1,2,4),(291,NULL,4,291,18,1,3,4),(292,NULL,4,292,18,1,4,4),(293,NULL,4,293,18,1,5,4),(294,NULL,4,294,18,1,6,4),(295,NULL,4,295,18,1,7,4),(296,NULL,4,296,18,1,8,4),(297,NULL,4,297,19,1,1,5),(298,NULL,4,298,19,1,2,5),(299,NULL,4,299,19,1,3,5),(300,NULL,4,300,19,1,4,5),(301,NULL,4,301,19,1,5,5),(302,NULL,4,302,19,1,6,5),(303,NULL,4,303,19,1,7,5),(304,NULL,4,304,19,1,8,5),(305,NULL,4,305,20,1,1,6),(306,NULL,4,306,20,1,2,6),(307,NULL,4,307,20,1,3,6),(308,NULL,4,308,20,1,4,6),(309,NULL,4,309,20,1,5,6),(310,NULL,4,310,20,1,6,6),(311,NULL,4,311,20,1,7,6),(312,NULL,4,312,20,1,8,6),(313,NULL,4,313,22,1,1,7),(314,NULL,4,314,22,1,2,7),(315,NULL,4,315,22,1,3,7),(316,NULL,4,316,22,1,4,7),(317,NULL,4,317,22,1,5,7),(318,NULL,4,318,22,1,6,7),(319,NULL,4,319,22,1,7,7),(320,NULL,4,320,22,1,8,7),(321,NULL,4,321,23,1,1,8),(322,NULL,4,322,23,1,2,8),(323,NULL,4,323,23,1,3,8),(324,NULL,4,324,23,1,4,8),(325,NULL,4,325,23,1,5,8),(326,NULL,4,326,23,1,6,8),(327,NULL,4,327,23,1,7,8),(328,NULL,4,328,23,1,8,8),(329,NULL,4,329,24,1,1,9),(330,NULL,4,330,24,1,2,9),(331,NULL,4,331,24,1,3,9),(332,NULL,4,332,24,1,4,9),(333,NULL,4,333,24,1,5,9),(334,NULL,4,334,24,1,6,9),(335,NULL,4,335,24,1,7,9),(336,NULL,4,336,24,1,8,9),(337,NULL,4,337,25,1,1,10),(338,NULL,4,338,25,1,2,10),(339,NULL,4,339,25,1,3,10),(340,NULL,4,340,25,1,4,10),(341,NULL,4,341,25,1,5,10),(342,NULL,4,342,25,1,6,10),(343,NULL,4,343,25,1,7,10),(344,NULL,4,344,25,1,8,10),(345,NULL,4,345,26,1,1,11),(346,NULL,4,346,26,1,2,11),(347,NULL,4,347,26,1,3,11),(348,NULL,4,348,26,1,4,11),(349,NULL,4,349,26,1,5,11),(350,NULL,4,350,26,1,6,11),(351,NULL,4,351,26,1,7,11),(352,NULL,4,352,26,1,8,11),(353,NULL,5,353,58,1,1,1),(354,NULL,5,354,58,1,2,1),(355,NULL,5,355,58,1,3,1),(356,NULL,5,356,58,1,4,1),(357,NULL,5,357,58,1,5,1),(358,NULL,5,358,58,1,6,1),(359,NULL,5,359,58,1,7,1),(360,NULL,5,360,58,1,8,1),(361,NULL,5,361,21,1,1,2),(362,NULL,5,362,21,1,2,2),(363,NULL,5,363,21,1,3,2),(364,NULL,5,364,21,1,4,2),(365,NULL,5,365,21,1,5,2),(366,NULL,5,366,21,1,6,2),(367,NULL,5,367,21,1,7,2),(368,NULL,5,368,21,1,8,2),(369,NULL,5,369,27,1,1,3),(370,NULL,5,370,27,1,2,3),(371,NULL,5,371,27,1,3,3),(372,NULL,5,372,27,1,4,3),(373,NULL,5,373,27,1,5,3),(374,NULL,5,374,27,1,6,3),(375,NULL,5,375,27,1,7,3),(376,NULL,5,376,27,1,8,3),(377,NULL,5,377,28,1,1,4),(378,NULL,5,378,28,1,2,4),(379,NULL,5,379,28,1,3,4),(380,NULL,5,380,28,1,4,4),(381,NULL,5,381,28,1,5,4),(382,NULL,5,382,28,1,6,4),(383,NULL,5,383,28,1,7,4),(384,NULL,5,384,28,1,8,4),(385,NULL,5,385,29,1,1,5),(386,NULL,5,386,29,1,2,5),(387,NULL,5,387,29,1,3,5),(388,NULL,5,388,29,1,4,5),(389,NULL,5,389,29,1,5,5),(390,NULL,5,390,29,1,6,5),(391,NULL,5,391,29,1,7,5),(392,NULL,5,392,29,1,8,5),(393,NULL,5,393,36,1,1,6),(394,NULL,5,394,36,1,2,6),(395,NULL,5,395,36,1,3,6),(396,NULL,5,396,36,1,4,6),(397,NULL,5,397,36,1,5,6),(398,NULL,5,398,36,1,6,6),(399,NULL,5,399,36,1,7,6),(400,NULL,5,400,36,1,8,6),(401,NULL,5,401,37,1,1,7),(402,NULL,5,402,37,1,2,7),(403,NULL,5,403,37,1,3,7),(404,NULL,5,404,37,1,4,7),(405,NULL,5,405,37,1,5,7),(406,NULL,5,406,37,1,6,7),(407,NULL,5,407,37,1,7,7),(408,NULL,5,408,37,1,8,7),(409,NULL,5,409,38,1,1,8),(410,NULL,5,410,38,1,2,8),(411,NULL,5,411,38,1,3,8),(412,NULL,5,412,38,1,4,8),(413,NULL,5,413,38,1,5,8),(414,NULL,5,414,38,1,6,8),(415,NULL,5,415,38,1,7,8),(416,NULL,5,416,38,1,8,8),(417,NULL,5,417,39,1,1,9),(418,NULL,5,418,39,1,2,9),(419,NULL,5,419,39,1,3,9),(420,NULL,5,420,39,1,4,9),(421,NULL,5,421,39,1,5,9),(422,NULL,5,422,39,1,6,9),(423,NULL,5,423,39,1,7,9),(424,NULL,5,424,39,1,8,9),(425,NULL,5,425,40,1,1,10),(426,NULL,5,426,40,1,2,10),(427,NULL,5,427,40,1,3,10),(428,NULL,5,428,40,1,4,10),(429,NULL,5,429,40,1,5,10),(430,NULL,5,430,40,1,6,10),(431,NULL,5,431,40,1,7,10),(432,NULL,5,432,40,1,8,10),(433,NULL,5,433,41,1,1,11),(434,NULL,5,434,41,1,2,11),(435,NULL,5,435,41,1,3,11),(436,NULL,5,436,41,1,4,11),(437,NULL,5,437,41,1,5,11),(438,NULL,5,438,41,1,6,11),(439,NULL,5,439,41,1,7,11),(440,NULL,5,440,41,1,8,11),(441,NULL,6,441,58,1,1,1),(442,NULL,6,442,58,1,2,1),(443,NULL,6,443,58,1,3,1),(444,NULL,6,444,58,1,4,1),(445,NULL,6,445,58,1,5,1),(446,NULL,6,446,58,1,6,1),(447,NULL,6,447,58,1,7,1),(448,NULL,6,448,58,1,8,1),(449,NULL,6,449,21,1,1,2),(450,NULL,6,450,21,1,2,2),(451,NULL,6,451,21,1,3,2),(452,NULL,6,452,21,1,4,2),(453,NULL,6,453,21,1,5,2),(454,NULL,6,454,21,1,6,2),(455,NULL,6,455,21,1,7,2),(456,NULL,6,456,21,1,8,2),(457,NULL,6,457,7,1,1,3),(458,NULL,6,458,7,1,2,3),(459,NULL,6,459,7,1,3,3),(460,NULL,6,460,7,1,4,3),(461,NULL,6,461,7,1,5,3),(462,NULL,6,462,7,1,6,3),(463,NULL,6,463,7,1,7,3),(464,NULL,6,464,7,1,8,3),(465,NULL,6,465,4,1,1,4),(466,NULL,6,466,4,1,2,4),(467,NULL,6,467,4,1,3,4),(468,NULL,6,468,4,1,4,4),(469,NULL,6,469,4,1,5,4),(470,NULL,6,470,4,1,6,4),(471,NULL,6,471,4,1,7,4),(472,NULL,6,472,4,1,8,4),(473,NULL,6,473,5,1,1,5),(474,NULL,6,474,5,1,2,5),(475,NULL,6,475,5,1,3,5),(476,NULL,6,476,5,1,4,5),(477,NULL,6,477,5,1,5,5),(478,NULL,6,478,5,1,6,5),(479,NULL,6,479,5,1,7,5),(480,NULL,6,480,5,1,8,5),(481,NULL,6,481,6,1,1,6),(482,NULL,6,482,6,1,2,6),(483,NULL,6,483,6,1,3,6),(484,NULL,6,484,6,1,4,6),(485,NULL,6,485,6,1,5,6),(486,NULL,6,486,6,1,6,6),(487,NULL,6,487,6,1,7,6),(488,NULL,6,488,6,1,8,6),(489,NULL,6,489,9,1,1,7),(490,NULL,6,490,9,1,2,7),(491,NULL,6,491,9,1,3,7),(492,NULL,6,492,9,1,4,7),(493,NULL,6,493,9,1,5,7),(494,NULL,6,494,9,1,6,7),(495,NULL,6,495,9,1,7,7),(496,NULL,6,496,9,1,8,7),(497,NULL,6,497,3,1,1,8),(498,NULL,6,498,3,1,2,8),(499,NULL,6,499,3,1,3,8),(500,NULL,6,500,3,1,4,8),(501,NULL,6,501,3,1,5,8),(502,NULL,6,502,3,1,6,8),(503,NULL,6,503,3,1,7,8),(504,NULL,6,504,3,1,8,8),(505,NULL,6,505,8,1,1,9),(506,NULL,6,506,8,1,2,9),(507,NULL,6,507,8,1,3,9),(508,NULL,6,508,8,1,4,9),(509,NULL,6,509,8,1,5,9),(510,NULL,6,510,8,1,6,9),(511,NULL,6,511,8,1,7,9),(512,NULL,6,512,8,1,8,9),(513,NULL,6,513,58,1,1,10),(514,NULL,6,514,58,1,2,10),(515,NULL,6,515,58,1,3,10),(516,NULL,6,516,58,1,4,10),(517,NULL,6,517,58,1,5,10),(518,NULL,6,518,58,1,6,10),(519,NULL,6,519,58,1,7,10),(520,NULL,6,520,58,1,8,10),(521,NULL,6,521,1,1,1,11),(522,NULL,6,522,1,1,2,11),(523,NULL,6,523,1,1,3,11),(524,NULL,6,524,1,1,4,11),(525,NULL,6,525,1,1,5,11),(526,NULL,6,526,1,1,6,11),(527,NULL,6,527,1,1,7,11),(528,NULL,6,528,1,1,8,11),(529,NULL,7,529,58,1,1,1),(530,NULL,7,530,58,1,2,1),(531,NULL,7,531,58,1,3,1),(532,NULL,7,532,58,1,4,1),(533,NULL,7,533,58,1,5,1),(534,NULL,7,534,58,1,6,1),(535,NULL,7,535,58,1,7,1),(536,NULL,7,536,58,1,8,1),(537,NULL,7,537,21,1,1,2),(538,NULL,7,538,21,1,2,2),(539,NULL,7,539,21,1,3,2),(540,NULL,7,540,21,1,4,2),(541,NULL,7,541,21,1,5,2),(542,NULL,7,542,21,1,6,2),(543,NULL,7,543,21,1,7,2),(544,NULL,7,544,21,1,8,2),(545,NULL,7,545,35,1,1,3),(546,NULL,7,546,35,1,2,3),(547,NULL,7,547,35,1,3,3),(548,NULL,7,548,35,1,4,3),(549,NULL,7,549,35,1,5,3),(550,NULL,7,550,35,1,6,3),(551,NULL,7,551,35,1,7,3),(552,NULL,7,552,35,1,8,3),(553,NULL,7,553,16,1,1,4),(554,NULL,7,554,16,1,2,4),(555,NULL,7,555,16,1,3,4),(556,NULL,7,556,16,1,4,4),(557,NULL,7,557,16,1,5,4),(558,NULL,7,558,16,1,6,4),(559,NULL,7,559,16,1,7,4),(560,NULL,7,560,16,1,8,4),(561,NULL,7,561,59,1,1,5),(562,NULL,7,562,59,1,2,5),(563,NULL,7,563,59,1,3,5),(564,NULL,7,564,59,1,4,5),(565,NULL,7,565,59,1,5,5),(566,NULL,7,566,59,1,6,5),(567,NULL,7,567,59,1,7,5),(568,NULL,7,568,59,1,8,5),(569,NULL,7,569,14,1,1,6),(570,NULL,7,570,14,1,2,6),(571,NULL,7,571,14,1,3,6),(572,NULL,7,572,14,1,4,6),(573,NULL,7,573,14,1,5,6),(574,NULL,7,574,14,1,6,6),(575,NULL,7,575,14,1,7,6),(576,NULL,7,576,14,1,8,6),(577,NULL,7,577,57,1,1,7),(578,NULL,7,578,57,1,2,7),(579,NULL,7,579,57,1,3,7),(580,NULL,7,580,57,1,4,7),(581,NULL,7,581,57,1,5,7),(582,NULL,7,582,57,1,6,7),(583,NULL,7,583,57,1,7,7),(584,NULL,7,584,57,1,8,7),(585,NULL,8,585,58,2,1,1),(586,NULL,8,586,58,2,2,1),(587,NULL,8,587,58,2,3,1),(588,NULL,8,588,58,2,4,1),(589,NULL,8,589,58,2,5,1),(590,NULL,8,590,58,2,6,1),(591,NULL,8,591,58,2,7,1),(592,NULL,8,592,58,2,8,1),(593,NULL,8,593,21,2,1,2),(594,NULL,8,594,21,2,2,2),(595,NULL,8,595,21,2,3,2),(596,NULL,8,596,21,2,4,2),(597,NULL,8,597,21,2,5,2),(598,NULL,8,598,21,2,6,2),(599,NULL,8,599,21,2,7,2),(600,NULL,8,600,21,2,8,2),(601,NULL,8,601,30,2,1,3),(602,NULL,8,602,30,2,2,3),(603,NULL,8,603,30,2,3,3),(604,NULL,8,604,30,2,4,3),(605,NULL,8,605,30,2,5,3),(606,NULL,8,606,30,2,6,3),(607,NULL,8,607,30,2,7,3),(608,NULL,8,608,30,2,8,3),(609,NULL,8,609,31,2,1,4),(610,NULL,8,610,31,2,2,4),(611,NULL,8,611,31,2,3,4),(612,NULL,8,612,31,2,4,4),(613,NULL,8,613,31,2,5,4),(614,NULL,8,614,31,2,6,4),(615,NULL,8,615,31,2,7,4),(616,NULL,8,616,31,2,8,4),(617,NULL,8,617,32,2,1,5),(618,NULL,8,618,32,2,2,5),(619,NULL,8,619,32,2,3,5),(620,NULL,8,620,32,2,4,5),(621,NULL,8,621,32,2,5,5),(622,NULL,8,622,32,2,6,5),(623,NULL,8,623,32,2,7,5),(624,NULL,8,624,32,2,8,5),(625,NULL,8,625,33,2,1,6),(626,NULL,8,626,33,2,2,6),(627,NULL,8,627,33,2,3,6),(628,NULL,8,628,33,2,4,6),(629,NULL,8,629,33,2,5,6),(630,NULL,8,630,33,2,6,6),(631,NULL,8,631,33,2,7,6),(632,NULL,8,632,33,2,8,6),(633,NULL,8,633,34,2,1,7),(634,NULL,8,634,34,2,2,7),(635,NULL,8,635,34,2,3,7),(636,NULL,8,636,34,2,4,7),(637,NULL,8,637,34,2,5,7),(638,NULL,8,638,34,2,6,7),(639,NULL,8,639,34,2,7,7),(640,NULL,8,640,34,2,8,7),(641,NULL,8,641,42,2,1,8),(642,NULL,8,642,42,2,2,8),(643,NULL,8,643,42,2,3,8),(644,NULL,8,644,42,2,4,8),(645,NULL,8,645,42,2,5,8),(646,NULL,8,646,42,2,6,8),(647,NULL,8,647,42,2,7,8),(648,NULL,8,648,42,2,8,8),(649,NULL,8,649,43,2,1,9),(650,NULL,8,650,43,2,2,9),(651,NULL,8,651,43,2,3,9),(652,NULL,8,652,43,2,4,9),(653,NULL,8,653,43,2,5,9),(654,NULL,8,654,43,2,6,9),(655,NULL,8,655,43,2,7,9),(656,NULL,8,656,43,2,8,9),(657,NULL,8,657,44,2,1,10),(658,NULL,8,658,44,2,2,10),(659,NULL,8,659,44,2,3,10),(660,NULL,8,660,44,2,4,10),(661,NULL,8,661,44,2,5,10),(662,NULL,8,662,44,2,6,10),(663,NULL,8,663,44,2,7,10),(664,NULL,8,664,44,2,8,10),(665,NULL,8,665,45,2,1,11),(666,NULL,8,666,45,2,2,11),(667,NULL,8,667,45,2,3,11),(668,NULL,8,668,45,2,4,11),(669,NULL,8,669,45,2,5,11),(670,NULL,8,670,45,2,6,11),(671,NULL,8,671,45,2,7,11),(672,NULL,8,672,45,2,8,11),(673,NULL,9,673,58,2,1,1),(674,NULL,9,674,58,2,2,1),(675,NULL,9,675,58,2,3,1),(676,NULL,9,676,58,2,4,1),(677,NULL,9,677,58,2,5,1),(678,NULL,9,678,58,2,6,1),(679,NULL,9,679,58,2,7,1),(680,NULL,9,680,58,2,8,1),(681,NULL,9,681,21,2,1,2),(682,NULL,9,682,21,2,2,2),(683,NULL,9,683,21,2,3,2),(684,NULL,9,684,21,2,4,2),(685,NULL,9,685,21,2,5,2),(686,NULL,9,686,21,2,6,2),(687,NULL,9,687,21,2,7,2),(688,NULL,9,688,21,2,8,2),(689,NULL,9,689,45,2,1,3),(690,NULL,9,690,45,2,2,3),(691,NULL,9,691,45,2,3,3),(692,NULL,9,692,45,2,4,3),(693,NULL,9,693,45,2,5,3),(694,NULL,9,694,45,2,6,3),(695,NULL,9,695,45,2,7,3),(696,NULL,9,696,45,2,8,3),(697,NULL,9,697,46,2,1,4),(698,NULL,9,698,46,2,2,4),(699,NULL,9,699,46,2,3,4),(700,NULL,9,700,46,2,4,4),(701,NULL,9,701,46,2,5,4),(702,NULL,9,702,46,2,6,4),(703,NULL,9,703,46,2,7,4),(704,NULL,9,704,46,2,8,4),(705,NULL,9,705,47,2,1,5),(706,NULL,9,706,47,2,2,5),(707,NULL,9,707,47,2,3,5),(708,NULL,9,708,47,2,4,5),(709,NULL,9,709,47,2,5,5),(710,NULL,9,710,47,2,6,5),(711,NULL,9,711,47,2,7,5),(712,NULL,9,712,47,2,8,5),(713,NULL,9,713,48,2,1,6),(714,NULL,9,714,48,2,2,6),(715,NULL,9,715,48,2,3,6),(716,NULL,9,716,48,2,4,6),(717,NULL,9,717,48,2,5,6),(718,NULL,9,718,48,2,6,6),(719,NULL,9,719,48,2,7,6),(720,NULL,9,720,48,2,8,6),(721,NULL,9,721,49,2,1,7),(722,NULL,9,722,49,2,2,7),(723,NULL,9,723,49,2,3,7),(724,NULL,9,724,49,2,4,7),(725,NULL,9,725,49,2,5,7),(726,NULL,9,726,49,2,6,7),(727,NULL,9,727,49,2,7,7),(728,NULL,9,728,49,2,8,7),(729,NULL,9,729,50,2,1,8),(730,NULL,9,730,50,2,2,8),(731,NULL,9,731,50,2,3,8),(732,NULL,9,732,50,2,4,8),(733,NULL,9,733,50,2,5,8),(734,NULL,9,734,50,2,6,8),(735,NULL,9,735,50,2,7,8),(736,NULL,9,736,50,2,8,8),(737,NULL,9,737,51,2,1,9),(738,NULL,9,738,51,2,2,9),(739,NULL,9,739,51,2,3,9),(740,NULL,9,740,51,2,4,9),(741,NULL,9,741,51,2,5,9),(742,NULL,9,742,51,2,6,9),(743,NULL,9,743,51,2,7,9),(744,NULL,9,744,51,2,8,9),(745,NULL,9,745,52,2,1,10),(746,NULL,9,746,52,2,2,10),(747,NULL,9,747,52,2,3,10),(748,NULL,9,748,52,2,4,10),(749,NULL,9,749,52,2,5,10),(750,NULL,9,750,52,2,6,10),(751,NULL,9,751,52,2,7,10),(752,NULL,9,752,52,2,8,10),(753,NULL,9,753,53,2,1,11),(754,NULL,9,754,53,2,2,11),(755,NULL,9,755,53,2,3,11),(756,NULL,9,756,53,2,4,11),(757,NULL,9,757,53,2,5,11),(758,NULL,9,758,53,2,6,11),(759,NULL,9,759,53,2,7,11),(760,NULL,9,760,53,2,8,11),(761,NULL,10,761,58,2,1,1),(762,NULL,10,762,58,2,2,1),(763,NULL,10,763,58,2,3,1),(764,NULL,10,764,58,2,4,1),(765,NULL,10,765,58,2,5,1),(766,NULL,10,766,58,2,6,1),(767,NULL,10,767,58,2,7,1),(768,NULL,10,768,58,2,8,1),(769,NULL,10,769,21,2,1,2),(770,NULL,10,770,21,2,2,2),(771,NULL,10,771,21,2,3,2),(772,NULL,10,772,21,2,4,2),(773,NULL,10,773,21,2,5,2),(774,NULL,10,774,21,2,6,2),(775,NULL,10,775,21,2,7,2),(776,NULL,10,776,21,2,8,2),(777,NULL,10,777,54,2,1,3),(778,NULL,10,778,54,2,2,3),(779,NULL,10,779,54,2,3,3),(780,NULL,10,780,54,2,4,3),(781,NULL,10,781,54,2,5,3),(782,NULL,10,782,54,2,6,3),(783,NULL,10,783,54,2,7,3),(784,NULL,10,784,54,2,8,3),(785,NULL,10,785,55,2,1,4),(786,NULL,10,786,55,2,2,4),(787,NULL,10,787,55,2,3,4),(788,NULL,10,788,55,2,4,4),(789,NULL,10,789,55,2,5,4),(790,NULL,10,790,55,2,6,4),(791,NULL,10,791,55,2,7,4),(792,NULL,10,792,55,2,8,4),(793,NULL,10,793,56,2,1,5),(794,NULL,10,794,56,2,2,5),(795,NULL,10,795,56,2,3,5),(796,NULL,10,796,56,2,4,5),(797,NULL,10,797,56,2,5,5),(798,NULL,10,798,56,2,6,5),(799,NULL,10,799,56,2,7,5),(800,NULL,10,800,56,2,8,5),(801,NULL,10,801,2,2,1,6),(802,NULL,10,802,2,2,2,6),(803,NULL,10,803,2,2,3,6),(804,NULL,10,804,2,2,4,6),(805,NULL,10,805,2,2,5,6),(806,NULL,10,806,2,2,6,6),(807,NULL,10,807,2,2,7,6),(808,NULL,10,808,2,2,8,6),(809,NULL,10,809,10,2,1,7),(810,NULL,10,810,10,2,2,7),(811,NULL,10,811,10,2,3,7),(812,NULL,10,812,10,2,4,7),(813,NULL,10,813,10,2,5,7),(814,NULL,10,814,10,2,6,7),(815,NULL,10,815,10,2,7,7),(816,NULL,10,816,10,2,8,7),(817,NULL,10,817,11,2,1,8),(818,NULL,10,818,11,2,2,8),(819,NULL,10,819,11,2,3,8),(820,NULL,10,820,11,2,4,8),(821,NULL,10,821,11,2,5,8),(822,NULL,10,822,11,2,6,8),(823,NULL,10,823,11,2,7,8),(824,NULL,10,824,11,2,8,8),(825,NULL,10,825,12,2,1,9),(826,NULL,10,826,12,2,2,9),(827,NULL,10,827,12,2,3,9),(828,NULL,10,828,12,2,4,9),(829,NULL,10,829,12,2,5,9),(830,NULL,10,830,12,2,6,9),(831,NULL,10,831,12,2,7,9),(832,NULL,10,832,12,2,8,9),(833,NULL,10,833,13,2,1,10),(834,NULL,10,834,13,2,2,10),(835,NULL,10,835,13,2,3,10),(836,NULL,10,836,13,2,4,10),(837,NULL,10,837,13,2,5,10),(838,NULL,10,838,13,2,6,10),(839,NULL,10,839,13,2,7,10),(840,NULL,10,840,13,2,8,10),(841,NULL,10,841,15,2,1,11),(842,NULL,10,842,15,2,2,11),(843,NULL,10,843,15,2,3,11),(844,NULL,10,844,15,2,4,11),(845,NULL,10,845,15,2,5,11),(846,NULL,10,846,15,2,6,11),(847,NULL,10,847,15,2,7,11),(848,NULL,10,848,15,2,8,11),(849,NULL,11,849,58,2,1,1),(850,NULL,11,850,58,2,2,1),(851,NULL,11,851,58,2,3,1),(852,NULL,11,852,58,2,4,1),(853,NULL,11,853,58,2,5,1),(854,NULL,11,854,58,2,6,1),(855,NULL,11,855,58,2,7,1),(856,NULL,11,856,58,2,8,1),(857,NULL,11,857,21,2,1,2),(858,NULL,11,858,21,2,2,2),(859,NULL,11,859,21,2,3,2),(860,NULL,11,860,21,2,4,2),(861,NULL,11,861,21,2,5,2),(862,NULL,11,862,21,2,6,2),(863,NULL,11,863,21,2,7,2),(864,NULL,11,864,21,2,8,2),(865,NULL,11,865,17,2,1,3),(866,NULL,11,866,17,2,2,3),(867,NULL,11,867,17,2,3,3),(868,NULL,11,868,17,2,4,3),(869,NULL,11,869,17,2,5,3),(870,NULL,11,870,17,2,6,3),(871,NULL,11,871,17,2,7,3),(872,NULL,11,872,17,2,8,3),(873,NULL,11,873,18,2,1,4),(874,NULL,11,874,18,2,2,4),(875,NULL,11,875,18,2,3,4),(876,NULL,11,876,18,2,4,4),(877,NULL,11,877,18,2,5,4),(878,NULL,11,878,18,2,6,4),(879,NULL,11,879,18,2,7,4),(880,NULL,11,880,18,2,8,4),(881,NULL,11,881,19,2,1,5),(882,NULL,11,882,19,2,2,5),(883,NULL,11,883,19,2,3,5),(884,NULL,11,884,19,2,4,5),(885,NULL,11,885,19,2,5,5),(886,NULL,11,886,19,2,6,5),(887,NULL,11,887,19,2,7,5),(888,NULL,11,888,19,2,8,5),(889,NULL,11,889,20,2,1,6),(890,NULL,11,890,20,2,2,6),(891,NULL,11,891,20,2,3,6),(892,NULL,11,892,20,2,4,6),(893,NULL,11,893,20,2,5,6),(894,NULL,11,894,20,2,6,6),(895,NULL,11,895,20,2,7,6),(896,NULL,11,896,20,2,8,6),(897,NULL,11,897,22,2,1,7),(898,NULL,11,898,22,2,2,7),(899,NULL,11,899,22,2,3,7),(900,NULL,11,900,22,2,4,7),(901,NULL,11,901,22,2,5,7),(902,NULL,11,902,22,2,6,7),(903,NULL,11,903,22,2,7,7),(904,NULL,11,904,22,2,8,7),(905,NULL,11,905,23,2,1,8),(906,NULL,11,906,23,2,2,8),(907,NULL,11,907,23,2,3,8),(908,NULL,11,908,23,2,4,8),(909,NULL,11,909,23,2,5,8),(910,NULL,11,910,23,2,6,8),(911,NULL,11,911,23,2,7,8),(912,NULL,11,912,23,2,8,8),(913,NULL,11,913,24,2,1,9),(914,NULL,11,914,24,2,2,9),(915,NULL,11,915,24,2,3,9),(916,NULL,11,916,24,2,4,9),(917,NULL,11,917,24,2,5,9),(918,NULL,11,918,24,2,6,9),(919,NULL,11,919,24,2,7,9),(920,NULL,11,920,24,2,8,9),(921,NULL,11,921,25,2,1,10),(922,NULL,11,922,25,2,2,10),(923,NULL,11,923,25,2,3,10),(924,NULL,11,924,25,2,4,10),(925,NULL,11,925,25,2,5,10),(926,NULL,11,926,25,2,6,10),(927,NULL,11,927,25,2,7,10),(928,NULL,11,928,25,2,8,10),(929,NULL,11,929,26,2,1,11),(930,NULL,11,930,26,2,2,11),(931,NULL,11,931,26,2,3,11),(932,NULL,11,932,26,2,4,11),(933,NULL,11,933,26,2,5,11),(934,NULL,11,934,26,2,6,11),(935,NULL,11,935,26,2,7,11),(936,NULL,11,936,26,2,8,11),(937,NULL,12,937,58,2,1,1),(938,NULL,12,938,58,2,2,1),(939,NULL,12,939,58,2,3,1),(940,NULL,12,940,58,2,4,1),(941,NULL,12,941,58,2,5,1),(942,NULL,12,942,58,2,6,1),(943,NULL,12,943,58,2,7,1),(944,NULL,12,944,58,2,8,1),(945,NULL,12,945,21,2,1,2),(946,NULL,12,946,21,2,2,2),(947,NULL,12,947,21,2,3,2),(948,NULL,12,948,21,2,4,2),(949,NULL,12,949,21,2,5,2),(950,NULL,12,950,21,2,6,2),(951,NULL,12,951,21,2,7,2),(952,NULL,12,952,21,2,8,2),(953,NULL,12,953,27,2,1,3),(954,NULL,12,954,27,2,2,3),(955,NULL,12,955,27,2,3,3),(956,NULL,12,956,27,2,4,3),(957,NULL,12,957,27,2,5,3),(958,NULL,12,958,27,2,6,3),(959,NULL,12,959,27,2,7,3),(960,NULL,12,960,27,2,8,3),(961,NULL,12,961,28,2,1,4),(962,NULL,12,962,28,2,2,4),(963,NULL,12,963,28,2,3,4),(964,NULL,12,964,28,2,4,4),(965,NULL,12,965,28,2,5,4),(966,NULL,12,966,28,2,6,4),(967,NULL,12,967,28,2,7,4),(968,NULL,12,968,28,2,8,4),(969,NULL,12,969,29,2,1,5),(970,NULL,12,970,29,2,2,5),(971,NULL,12,971,29,2,3,5),(972,NULL,12,972,29,2,4,5),(973,NULL,12,973,29,2,5,5),(974,NULL,12,974,29,2,6,5),(975,NULL,12,975,29,2,7,5),(976,NULL,12,976,29,2,8,5),(977,NULL,12,977,36,2,1,6),(978,NULL,12,978,36,2,2,6),(979,NULL,12,979,36,2,3,6),(980,NULL,12,980,36,2,4,6),(981,NULL,12,981,36,2,5,6),(982,NULL,12,982,36,2,6,6),(983,NULL,12,983,36,2,7,6),(984,NULL,12,984,36,2,8,6),(985,NULL,12,985,37,2,1,7),(986,NULL,12,986,37,2,2,7),(987,NULL,12,987,37,2,3,7),(988,NULL,12,988,37,2,4,7),(989,NULL,12,989,37,2,5,7),(990,NULL,12,990,37,2,6,7),(991,NULL,12,991,37,2,7,7),(992,NULL,12,992,37,2,8,7),(993,NULL,12,993,38,2,1,8),(994,NULL,12,994,38,2,2,8),(995,NULL,12,995,38,2,3,8),(996,NULL,12,996,38,2,4,8),(997,NULL,12,997,38,2,5,8),(998,NULL,12,998,38,2,6,8),(999,NULL,12,999,38,2,7,8),(1000,NULL,12,1000,38,2,8,8),(1001,NULL,12,1001,39,2,1,9),(1002,NULL,12,1002,39,2,2,9),(1003,NULL,12,1003,39,2,3,9),(1004,NULL,12,1004,39,2,4,9),(1005,NULL,12,1005,39,2,5,9),(1006,NULL,12,1006,39,2,6,9),(1007,NULL,12,1007,39,2,7,9),(1008,NULL,12,1008,39,2,8,9),(1009,NULL,12,1009,40,2,1,10),(1010,NULL,12,1010,40,2,2,10),(1011,NULL,12,1011,40,2,3,10),(1012,NULL,12,1012,40,2,4,10),(1013,NULL,12,1013,40,2,5,10),(1014,NULL,12,1014,40,2,6,10),(1015,NULL,12,1015,40,2,7,10),(1016,NULL,12,1016,40,2,8,10),(1017,NULL,12,1017,41,2,1,11),(1018,NULL,12,1018,41,2,2,11),(1019,NULL,12,1019,41,2,3,11),(1020,NULL,12,1020,41,2,4,11),(1021,NULL,12,1021,41,2,5,11),(1022,NULL,12,1022,41,2,6,11),(1023,NULL,12,1023,41,2,7,11),(1024,NULL,12,1024,41,2,8,11),(1025,NULL,13,1025,58,2,1,1),(1026,NULL,13,1026,58,2,2,1),(1027,NULL,13,1027,58,2,3,1),(1028,NULL,13,1028,58,2,4,1),(1029,NULL,13,1029,58,2,5,1),(1030,NULL,13,1030,58,2,6,1),(1031,NULL,13,1031,58,2,7,1),(1032,NULL,13,1032,58,2,8,1),(1033,NULL,13,1033,21,2,1,2),(1034,NULL,13,1034,21,2,2,2),(1035,NULL,13,1035,21,2,3,2),(1036,NULL,13,1036,21,2,4,2),(1037,NULL,13,1037,21,2,5,2),(1038,NULL,13,1038,21,2,6,2),(1039,NULL,13,1039,21,2,7,2),(1040,NULL,13,1040,21,2,8,2),(1041,NULL,13,1041,7,2,1,3),(1042,NULL,13,1042,7,2,2,3),(1043,NULL,13,1043,7,2,3,3),(1044,NULL,13,1044,7,2,4,3),(1045,NULL,13,1045,7,2,5,3),(1046,NULL,13,1046,7,2,6,3),(1047,NULL,13,1047,7,2,7,3),(1048,NULL,13,1048,7,2,8,3),(1049,NULL,13,1049,4,2,1,4),(1050,NULL,13,1050,4,2,2,4),(1051,NULL,13,1051,4,2,3,4),(1052,NULL,13,1052,4,2,4,4),(1053,NULL,13,1053,4,2,5,4),(1054,NULL,13,1054,4,2,6,4),(1055,NULL,13,1055,4,2,7,4),(1056,NULL,13,1056,4,2,8,4),(1057,NULL,13,1057,5,2,1,5),(1058,NULL,13,1058,5,2,2,5),(1059,NULL,13,1059,5,2,3,5),(1060,NULL,13,1060,5,2,4,5),(1061,NULL,13,1061,5,2,5,5),(1062,NULL,13,1062,5,2,6,5),(1063,NULL,13,1063,5,2,7,5),(1064,NULL,13,1064,5,2,8,5),(1065,NULL,13,1065,6,2,1,6),(1066,NULL,13,1066,6,2,2,6),(1067,NULL,13,1067,6,2,3,6),(1068,NULL,13,1068,6,2,4,6),(1069,NULL,13,1069,6,2,5,6),(1070,NULL,13,1070,6,2,6,6),(1071,NULL,13,1071,6,2,7,6),(1072,NULL,13,1072,6,2,8,6),(1073,NULL,13,1073,9,2,1,7),(1074,NULL,13,1074,9,2,2,7),(1075,NULL,13,1075,9,2,3,7),(1076,NULL,13,1076,9,2,4,7),(1077,NULL,13,1077,9,2,5,7),(1078,NULL,13,1078,9,2,6,7),(1079,NULL,13,1079,9,2,7,7),(1080,NULL,13,1080,9,2,8,7),(1081,NULL,13,1081,3,2,1,8),(1082,NULL,13,1082,3,2,2,8),(1083,NULL,13,1083,3,2,3,8),(1084,NULL,13,1084,3,2,4,8),(1085,NULL,13,1085,3,2,5,8),(1086,NULL,13,1086,3,2,6,8),(1087,NULL,13,1087,3,2,7,8),(1088,NULL,13,1088,3,2,8,8),(1089,NULL,13,1089,8,2,1,9),(1090,NULL,13,1090,8,2,2,9),(1091,NULL,13,1091,8,2,3,9),(1092,NULL,13,1092,8,2,4,9),(1093,NULL,13,1093,8,2,5,9),(1094,NULL,13,1094,8,2,6,9),(1095,NULL,13,1095,8,2,7,9),(1096,NULL,13,1096,8,2,8,9),(1097,NULL,13,1097,58,2,1,10),(1098,NULL,13,1098,58,2,2,10),(1099,NULL,13,1099,58,2,3,10),(1100,NULL,13,1100,58,2,4,10),(1101,NULL,13,1101,58,2,5,10),(1102,NULL,13,1102,58,2,6,10),(1103,NULL,13,1103,58,2,7,10),(1104,NULL,13,1104,58,2,8,10),(1105,NULL,13,1105,1,2,1,11),(1106,NULL,13,1106,1,2,2,11),(1107,NULL,13,1107,1,2,3,11),(1108,NULL,13,1108,1,2,4,11),(1109,NULL,13,1109,1,2,5,11),(1110,NULL,13,1110,1,2,6,11),(1111,NULL,13,1111,1,2,7,11),(1112,NULL,13,1112,1,2,8,11),(1113,NULL,14,1113,58,2,1,1),(1114,NULL,14,1114,58,2,2,1),(1115,NULL,14,1115,58,2,3,1),(1116,NULL,14,1116,58,2,4,1),(1117,NULL,14,1117,58,2,5,1),(1118,NULL,14,1118,58,2,6,1),(1119,NULL,14,1119,58,2,7,1),(1120,NULL,14,1120,58,2,8,1),(1121,NULL,14,1121,21,2,1,2),(1122,NULL,14,1122,21,2,2,2),(1123,NULL,14,1123,21,2,3,2),(1124,NULL,14,1124,21,2,4,2),(1125,NULL,14,1125,21,2,5,2),(1126,NULL,14,1126,21,2,6,2),(1127,NULL,14,1127,21,2,7,2),(1128,NULL,14,1128,21,2,8,2),(1129,NULL,14,1129,35,2,1,3),(1130,NULL,14,1130,35,2,2,3),(1131,NULL,14,1131,35,2,3,3),(1132,NULL,14,1132,35,2,4,3),(1133,NULL,14,1133,35,2,5,3),(1134,NULL,14,1134,35,2,6,3),(1135,NULL,14,1135,35,2,7,3),(1136,NULL,14,1136,35,2,8,3),(1137,NULL,14,1137,16,2,1,4),(1138,NULL,14,1138,16,2,2,4),(1139,NULL,14,1139,16,2,3,4),(1140,NULL,14,1140,16,2,4,4),(1141,NULL,14,1141,16,2,5,4),(1142,NULL,14,1142,16,2,6,4),(1143,NULL,14,1143,16,2,7,4),(1144,NULL,14,1144,16,2,8,4),(1145,NULL,14,1145,59,2,1,5),(1146,NULL,14,1146,59,2,2,5),(1147,NULL,14,1147,59,2,3,5),(1148,NULL,14,1148,59,2,4,5),(1149,NULL,14,1149,59,2,5,5),(1150,NULL,14,1150,59,2,6,5),(1151,NULL,14,1151,59,2,7,5),(1152,NULL,14,1152,59,2,8,5),(1153,NULL,14,1153,14,2,1,6),(1154,NULL,14,1154,14,2,2,6),(1155,NULL,14,1155,14,2,3,6),(1156,NULL,14,1156,14,2,4,6),(1157,NULL,14,1157,14,2,5,6),(1158,NULL,14,1158,14,2,6,6),(1159,NULL,14,1159,14,2,7,6),(1160,NULL,14,1160,14,2,8,6),(1161,NULL,14,1161,57,2,1,7),(1162,NULL,14,1162,57,2,2,7),(1163,NULL,14,1163,57,2,3,7),(1164,NULL,14,1164,57,2,4,7),(1165,NULL,14,1165,57,2,5,7),(1166,NULL,14,1166,57,2,6,7),(1167,NULL,14,1167,57,2,7,7),(1168,NULL,14,1168,57,2,8,7);
/*!40000 ALTER TABLE `StudyPlant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyPlot`
--

DROP TABLE IF EXISTS `StudyPlot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyPlot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyObservationUnitId` int(11) DEFAULT NULL,
  `plotNumber` int(11) NOT NULL,
  `blockNumber` int(11) NOT NULL,
  `X` int(11) NOT NULL,
  `Y` int(11) NOT NULL,
  `replicate` int(11) NOT NULL,
  `plantingDate` date NOT NULL,
  `harvestDate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyPlot`
--

LOCK TABLES `StudyPlot` WRITE;
/*!40000 ALTER TABLE `StudyPlot` DISABLE KEYS */;
INSERT INTO `StudyPlot` VALUES (1,NULL,1,1,1,1,1,'2011-11-01','2011-11-20'),(2,NULL,2,1,2,1,1,'2011-11-01','2011-11-20'),(3,NULL,3,1,3,1,1,'2011-11-01','2011-11-20'),(4,NULL,4,1,4,1,1,'2011-11-01','2011-11-20'),(5,NULL,5,1,5,1,1,'2011-11-01','2011-11-20'),(6,NULL,6,1,6,1,1,'2011-11-01','2011-11-20'),(7,NULL,7,1,7,1,1,'2011-11-01','2011-11-20'),(8,NULL,8,1,1,2,2,'2011-11-01','2011-11-20'),(9,NULL,9,1,2,2,2,'2011-11-01','2011-11-20'),(10,NULL,10,1,3,2,2,'2011-11-01','2011-11-20'),(11,NULL,11,1,4,2,2,'2011-11-01','2011-11-20'),(12,NULL,12,1,5,2,2,'2011-11-01','2011-11-20'),(13,NULL,13,1,6,2,2,'2011-11-01','2011-11-20'),(14,NULL,14,1,7,2,2,'2011-11-01','2011-11-20');
/*!40000 ALTER TABLE `StudyPlot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudySeason`
--

DROP TABLE IF EXISTS `StudySeason`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudySeason` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyId` int(11) NOT NULL,
  `seasonId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudySeason_fk0` (`studyId`),
  KEY `StudySeason_fk1` (`seasonId`),
  CONSTRAINT `StudySeason_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudySeason_fk1` FOREIGN KEY (`seasonId`) REFERENCES `Season` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudySeason`
--

LOCK TABLES `StudySeason` WRITE;
/*!40000 ALTER TABLE `StudySeason` DISABLE KEYS */;
INSERT INTO `StudySeason` VALUES (1,1,1),(2,1,1);
/*!40000 ALTER TABLE `StudySeason` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyTreatment`
--

DROP TABLE IF EXISTS `StudyTreatment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyTreatment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studyPlotId` int(11) NOT NULL,
  `treatmentModalityId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyTreatment_fk0` (`studyPlotId`),
  KEY `StudyTreatment_fk1` (`treatmentModalityId`),
  CONSTRAINT `StudyTreatment_fk0` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot` (`id`),
  CONSTRAINT `StudyTreatment_fk1` FOREIGN KEY (`treatmentModalityId`) REFERENCES `TreatmentModality` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyTreatment`
--

LOCK TABLES `StudyTreatment` WRITE;
/*!40000 ALTER TABLE `StudyTreatment` DISABLE KEYS */;
INSERT INTO `StudyTreatment` VALUES (1,1,2),(2,2,2),(3,3,2),(4,4,2),(5,5,2),(6,6,2),(7,7,2),(8,8,3),(9,9,3),(10,10,3),(11,11,3),(12,12,3),(13,13,3),(14,14,3);
/*!40000 ALTER TABLE `StudyTreatment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyType`
--

DROP TABLE IF EXISTS `StudyType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyType` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyType`
--

LOCK TABLES `StudyType` WRITE;
/*!40000 ALTER TABLE `StudyType` DISABLE KEYS */;
INSERT INTO `StudyType` VALUES (1,'Green house','29ºC/22ºC Day/Night with 70% relative humidity, Split plot design with 11 genotypes per tray and 16 plants per genotype. In the control tray no salt was added.');
/*!40000 ALTER TABLE `StudyType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Trait`
--

DROP TABLE IF EXISTS `Trait`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Trait` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `traitId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mainAbbreviation` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entity` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attribute` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `xref` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trait`
--

LOCK TABLES `Trait` WRITE;
/*!40000 ALTER TABLE `Trait` DISABLE KEYS */;
INSERT INTO `Trait` VALUES (1,'CO_320:0001110','Root length','Morphological','Total root length','RtL','Root','Length','NULL','TO:0000227');
/*!40000 ALTER TABLE `Trait` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TraitAlternativeAbbreviation`
--

DROP TABLE IF EXISTS `TraitAlternativeAbbreviation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TraitAlternativeAbbreviation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `traitId` int(15) NOT NULL,
  `abbreviation` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `TraitAlternativeAbbreviation_fk0` (`traitId`),
  CONSTRAINT `TraitAlternativeAbbreviation_fk0` FOREIGN KEY (`traitId`) REFERENCES `Trait` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TraitAlternativeAbbreviation`
--

LOCK TABLES `TraitAlternativeAbbreviation` WRITE;
/*!40000 ALTER TABLE `TraitAlternativeAbbreviation` DISABLE KEYS */;
/*!40000 ALTER TABLE `TraitAlternativeAbbreviation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TraitSynonym`
--

DROP TABLE IF EXISTS `TraitSynonym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TraitSynonym` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `traitId` int(15) NOT NULL,
  `synonym` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `TraitSynonym_fk0` (`traitId`),
  CONSTRAINT `TraitSynonym_fk0` FOREIGN KEY (`traitId`) REFERENCES `Trait` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TraitSynonym`
--

LOCK TABLES `TraitSynonym` WRITE;
/*!40000 ALTER TABLE `TraitSynonym` DISABLE KEYS */;
/*!40000 ALTER TABLE `TraitSynonym` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TreatmentFactor`
--

DROP TABLE IF EXISTS `TreatmentFactor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TreatmentFactor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `factor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `factor` (`factor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TreatmentFactor`
--

LOCK TABLES `TreatmentFactor` WRITE;
/*!40000 ALTER TABLE `TreatmentFactor` DISABLE KEYS */;
INSERT INTO `TreatmentFactor` VALUES (1,'Salt Treatment (NaCl)');
/*!40000 ALTER TABLE `TreatmentFactor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TreatmentModality`
--

DROP TABLE IF EXISTS `TreatmentModality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TreatmentModality` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `treatmentFactorId` int(11) NOT NULL,
  `modality` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `modality` (`modality`),
  KEY `TreatmentModality_fk0` (`treatmentFactorId`),
  CONSTRAINT `TreatmentModality_fk0` FOREIGN KEY (`treatmentFactorId`) REFERENCES `TreatmentFactor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TreatmentModality`
--

LOCK TABLES `TreatmentModality` WRITE;
/*!40000 ALTER TABLE `TreatmentModality` DISABLE KEYS */;
INSERT INTO `TreatmentModality` VALUES (2,1,'None'),(3,1,'6g/L NaCl');
/*!40000 ALTER TABLE `TreatmentModality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Trial`
--

DROP TABLE IF EXISTS `Trial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Trial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `programId` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `Trial_fk0` (`programId`),
  CONSTRAINT `Trial_fk0` FOREIGN KEY (`programId`) REFERENCES `Program` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trial`
--

LOCK TABLES `Trial` WRITE;
/*!40000 ALTER TABLE `Trial` DISABLE KEYS */;
INSERT INTO `Trial` VALUES (1,'Phenotyping in salt stress',1,'2011-11-01','2011-11-21');
/*!40000 ALTER TABLE `Trial` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-21 16:49:35
