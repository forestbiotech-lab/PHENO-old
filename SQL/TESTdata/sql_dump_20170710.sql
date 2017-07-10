-- MySQL dump 10.16  Distrib 10.1.25-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: brapi_dan
-- ------------------------------------------------------
-- Server version	10.1.25-MariaDB

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
  `id` int(11) NOT NULL,
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
-- Table structure for table `ContextOfUse`
--

DROP TABLE IF EXISTS `ContextOfUse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContextOfUse` (
  `id` int(11) NOT NULL,
  `observationVariableId` int(11) NOT NULL,
  `studyTypeId` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DataType`
--

LOCK TABLES `DataType` WRITE;
/*!40000 ALTER TABLE `DataType` DISABLE KEYS */;
/*!40000 ALTER TABLE `DataType` ENABLE KEYS */;
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
  `instituteId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
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
  `id` int(11) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Germplasm`
--

LOCK TABLES `Germplasm` WRITE;
/*!40000 ALTER TABLE `Germplasm` DISABLE KEYS */;
INSERT INTO `Germplasm` VALUES (2,0,0,'SHINCHIKU-IKU 103','IRGC10430','6cf44dde-2adc-463d-a849-4faf5a0db185','','IRRI','400','0000-00-00',158),(3,0,0,'FR 13 A','IRGC117267','21ec0046-b7ce-47f4-91f2-dda6495ae65f','','IRRI','','2006-10-01',356),(4,0,0,'IR 64-21','IRGC117268','376ba3c0-8ed0-468f-ba2d-311b2028adfd','','IRRI','','2006-10-01',608),(5,0,0,'LI-JIANG-XIN-TUAN-HEI-GU','IRGC117269','15c1dfc3-807c-46f6-9da0-2d59a8e84e93','','IRRI','','2006-10-01',156),(6,0,0,'MOROBEREKAN','IRGC117272','2297477c-2ae9-452b-9bb3-f3e4190fb435','','IRRI','','2006-10-01',324),(7,0,0,'NIPPONBARE','IRGC117274','a99de2f0-2d15-4762-8685-e51a8c66b376','','IRRI','','2006-10-01',392),(8,0,0,'SWARNA','IRGC117278','dea7e75b-b889-4fc7-8e26-9a4e33ba348e','','IRRI','','2006-10-01',356),(9,0,0,'ASWINA','IRGC117281','9537e7a5-6c65-4345-826b-1a9931249022','','IRRI','500','2007-07-13',50),(10,0,0,'ARC 7229','IRGC12331','47525c35-3849-4bd1-8b1f-99b605232c2b','','IRRI','','1970-07-30',356),(11,0,0,'GOMPA 2','IRGC12894','29b2a6e9-46a2-4d93-a1f1-ca53ffb32b68','','IRRI','','1971-01-12',356),(12,0,0,'LAC23','IRGC14957','5fb54915-51ed-40f6-8e71-b9e6121d66f6','','IRRI','400','1972-03-02',430),(13,0,0,'63-104','IRGC15100','9bdca5c7-006e-42dc-bbb8-4e562df22ddb','','IRRI','','1972-05-19',384),(14,0,0,'HASAWI','IRGC16817','a272b060-4c41-4e7d-961c-275122c04a64','','IRRI','','1972-09-19',682),(15,0,0,'KERITING TINGGI','IRGC19972','2d106cd2-3889-4df8-9fc3-6f8b4fe8e4d0','','IRRI','300','1973-01-18',360),(16,0,0,'NONA BOKRA','IRGC22710','ad902f8b-9c14-4a78-82c2-4ebffc7ca6c5','','IRRI','','1973-07-20',356),(17,0,0,'BINULAWAN','IRGC26872','a6799508-2aa9-46ec-8c3c-272feb88505b','','IRRI','300','1975-01-07',608),(18,0,0,'KHAO DAWK MALI 105','IRGC27748','27756e94-501e-41f4-8482-250c6f3527b7','','IRRI','300','1975-03-19',764),(19,0,0,'CHAHORA 144','IRGC27869','a5a50ebd-87f9-4897-9af4-0e4c083afccf','','IRRI','300','1974-05-22',586),(20,0,0,'P 660','IRGC28134','ff89ca02-6b91-4f39-8b8a-4910238f6354','','IRRI','','1974-05-22',586),(21,0,0,'IR 29','IRGC30412','1c4376e3-e66c-4a6b-b990-2b80e27f9f34','','IRRI','500','1976-03-10',608),(22,0,0,'NP125','IRGC32559','ee39008e-672e-4340-8d9c-1cacb9150be4','','IRRI','','1976-07-06',356),(23,0,0,'BICO BRANCO','IRGC38994','830df449-b7f4-4a04-ab9f-05799532eba7','','IRRI','','1977-09-12',76),(24,0,0,'CICIH BETON','IRGC43372','e7bc1d1c-f0a8-4f1b-8306-dc8ae019ebf7','','IRRI','300','1978-07-31',360),(25,0,0,'','IRGC47017','ada39cf6-7114-4144-ab2f-bf30e06c4bcc','','IRRI','300','1978-04-19',384),(26,0,0,'CANELA DE FERRO','IRGC50448','c45d2f06-958a-44f5-861c-d87635d960c9','','IRRI','500','1979-07-18',76),(27,0,0,'SINNA SITHIRA KALI','IRGC51064','5ca1a2e8-0702-42dd-8d3f-b7eaf620ea27','','IRRI','300','1979-02-26',144),(28,0,0,'PA-TOU-HUNG','IRGC51400','1942bc1a-95a3-470a-b7de-0768ab849e9a','','IRRI','500','1979-05-21',156),(29,0,0,'SONA CHUR','IRGC53931','be4e9cdc-5800-4457-a6c8-40563c027dd9','','IRRI','','1980-09-18',356),(30,0,0,'SINTANE DIOFOR','IRGC5418','5abfcd9d-c3c3-40d2-b28d-a6b73b7b6cb3','','IRRI','300','1962-04-12',854),(31,0,0,'PANKHARI 203','IRGC5999','675c7e6e-428f-44d6-9c39-5541c7293f45','','IRRI','400','1963-06-04',356),(32,0,0,'CHITRAJ(DA 23)','IRGC6208','b742901c-f981-465b-b275-c9cbb0318e24','','IRRI','400','1963-06-04',50),(33,0,0,'JHONA 349','IRGC6307','abd0051b-f9ad-4bf8-8dd6-90194708ff76','','IRRI','400','1963-06-04',356),(34,0,0,'CO 18','IRGC6331','9162a476-5808-44d2-855e-cde1b232adf5','','IRRI','400','1963-06-04',356),(35,0,0,'IR 58','IRGC63492','cd93a3a3-a4b6-40a5-965d-e192dca42eb1','','IRRI','500','1984-01-06',608),(36,0,0,'ISSAMO','IRGC63494','d4c83b3b-b806-497d-afbb-f81ff76f3244','','IRRI','','1983-01-27',466),(37,0,0,'SI ADULO','IRGC66640','91887efb-7f4c-4122-bf0a-9e54cea02466','','IRRI','300','1984-04-09',360),(38,0,0,'DINOLORES','IRGC67431','14944f89-e81d-4a48-9579-de19d554920c','','IRRI','300','1986-01-21',608),(39,0,0,'GUMPANGAR','IRGC71524','7798e57d-76ca-4f2b-9b07-bb952486eb1b','','IRRI','300','1985-02-04',458),(40,0,0,'TAK SIAH','IRGC73126','e32803a6-5d33-46b6-a1b3-ceb0639d6a27','','IRRI','300','1985-11-05',586),(41,0,0,'URYEE BOOTA','IRGC74719','1dcba894-fb5f-489c-bf8a-a4db148936de','','IRRI','300','1986-01-21',356),(42,0,0,'MTU9','IRGC7919','ec2ed821-3f73-4d18-ada1-da5c458a6239','','IRRI','','1963-04-06',356),(43,0,0,'MALAGKIT PIRURUTONG','IRGC8182','01ac39ce-130b-4425-9017-9fbcdf8ab096','','IRRI','','1962-03-23',608),(44,0,0,'KUN-MIN-TSIEH-HUNAN','IRGC8195','7d81b521-7d9e-4702-ac79-f840e87ddec9','','IRRI','500','1962-03-23',156),(45,0,0,'KARASUKARA-SURANKASU','IRGC8196','8683da4d-68b5-47aa-affa-67ee30a7c32d','','IRRI','','1962-03-23',158),(46,0,0,'DAVAO','IRGC8244','c985c305-f639-437c-909d-4b6eae05666f','','IRRI','','1962-03-23',608),(47,0,0,'MACAN BINUNDOK','IRGC8245','f3d8fd4b-1b39-444a-b675-50b751f7ee0b','','IRRI','','1962-03-23',608),(48,0,0,'NABESHI','IRGC8269','0f05bab8-9de5-452d-a70d-63bbb1ca75d1','','IRRI','','1962-03-23',158),(49,0,0,'DHOLA AMAN(LOWLAND AMAN)','IRGC8341','221c6fda-4837-49cc-b908-5d930623ffdb','','IRRI','500','1963-06-17',50),(50,0,0,'RATHUWEE','IRGC8952','b844cb44-c4f6-4a10-a951-a5c8a91ad21c','','IRRI','300','1963-07-15',144),(51,0,0,'JC148','IRGC9069','acdc55c8-c657-44b2-a3eb-6c68f32e1875','','IRRI','400','1962-03-23',356),(52,0,0,'JC149','IRGC9070','2a4425d4-dfa1-4d27-b292-f915f7b2fb97','','IRRI','400','1962-03-23',356),(53,0,0,'JC93','IRGC9175','e017d6cd-74af-4d4a-80b9-c957b2b4cb4e','','IRRI','','1962-03-23',356),(54,0,0,'JC91','IRGC9177','55cc6621-ae39-4ab8-8e47-b228c5f4d9cc','','IRRI','400','1962-03-23',356),(55,0,0,'AMARELO','IRGC9389','3991d648-3e0c-4529-b695-6e27a3e9dc41','','IRRI','','0000-00-00',348),(56,0,0,'TADUKAN','IRGC9804','56e5993f-3949-4a1a-b83e-adba21c38fd6','','IRRI','400','0000-00-00',608);
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
  `id` int(11) NOT NULL,
  `parent1Id` int(11) NOT NULL,
  `parent2Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  `id` int(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GermplasmStorage`
--

LOCK TABLES `GermplasmStorage` WRITE;
/*!40000 ALTER TABLE `GermplasmStorage` DISABLE KEYS */;
INSERT INTO `GermplasmStorage` VALUES (0,'12;13',2),(1,'12;13',2),(2,'12;13',3),(3,'12;13',4),(4,'12;13',5),(5,'12;13',6),(6,'12;13',7),(7,'12;13',8),(8,'12;13',9),(9,'12;13',10),(10,'12;13',11),(11,'12;13',12),(12,'12;13',13),(13,'12;13',14),(14,'12;13',15),(15,'12;13',16),(16,'12;13',17),(17,'12;13',18),(18,'12;13',19),(19,'12;13',20),(20,'12;13',21),(21,'12;13',22),(22,'12;13',23),(23,'12;13',24),(24,'12;13',25),(25,'12;13',26),(26,'12;13',27),(27,'12;13',28),(28,'12;13',29),(29,'12;13',30),(30,'12;13',31),(31,'12;13',32),(32,'12;13',33),(33,'12;13',34),(34,'12;13',35),(35,'12;13',36),(36,'12;13',37),(37,'12;13',38),(38,'12;13',39),(39,'12;13',40),(40,'12;13',41),(41,'12;13',42),(42,'12;13',43),(43,'12;13',44),(44,'12;13',45),(45,'12;13',46),(46,'12;13',47),(47,'12;13',48),(48,'12;13',49),(49,'12;13',50),(50,'12;13',51),(51,'12;13',52),(52,'12;13',53),(53,'12;13',54),(54,'12;13',55),(55,'12;13',56);
/*!40000 ALTER TABLE `GermplasmStorage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GermplasmSynonym`
--

DROP TABLE IF EXISTS `GermplasmSynonym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GermplasmSynonym` (
  `id` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  `synonym` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GermplasmSynonym`
--

LOCK TABLES `GermplasmSynonym` WRITE;
/*!40000 ALTER TABLE `GermplasmSynonym` DISABLE KEYS */;
/*!40000 ALTER TABLE `GermplasmSynonym` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Institution`
--

DROP TABLE IF EXISTS `Institution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Institution` (
  `id` int(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `locationId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Institution`
--

LOCK TABLES `Institution` WRITE;
/*!40000 ALTER TABLE `Institution` DISABLE KEYS */;
INSERT INTO `Institution` VALUES (0,'PHL001','International Rice Research Institute',0);
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
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locationType` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `altitude` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `Location_fk0` (`country`),
  CONSTRAINT `Location_fk0` FOREIGN KEY (`country`) REFERENCES `Country` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
INSERT INTO `Location` VALUES (0,'IRRI, Pili Drive, University of the Philippines Los Baños, Los Baños, 4030 Laguna, Filipinas','IRRI','University','14°10\'53\'\'N','121°15\'59\'\'E',16,608);
/*!40000 ALTER TABLE `Location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LocationAdditionalInfo`
--

DROP TABLE IF EXISTS `LocationAdditionalInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LocationAdditionalInfo` (
  `id` int(11) NOT NULL,
  `location` int(11) NOT NULL,
  `propertyName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `propertyValue` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `LocationAdditionalInfo_fk0` (`location`),
  CONSTRAINT `LocationAdditionalInfo_fk0` FOREIGN KEY (`location`) REFERENCES `Location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LocationAdditionalInfo`
--

LOCK TABLES `LocationAdditionalInfo` WRITE;
/*!40000 ALTER TABLE `LocationAdditionalInfo` DISABLE KEYS */;
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
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `formula` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reference` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `class` (`class`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Method`
--

LOCK TABLES `Method` WRITE;
/*!40000 ALTER TABLE `Method` DISABLE KEYS */;
/*!40000 ALTER TABLE `Method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Observation`
--

DROP TABLE IF EXISTS `Observation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Observation` (
  `id` int(11) NOT NULL,
  `observationVariable` int(11) NOT NULL,
  `operator` int(11) NOT NULL,
  `uploadedBy` int(11) NOT NULL,
  `plantLevel` tinyint(1) NOT NULL,
  `studyPlotId` int(11) DEFAULT NULL,
  `studyPlantId` int(11) DEFAULT NULL,
  `observationTimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `value` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Observation_fk0` (`observationVariable`),
  KEY `Observation_fk1` (`operator`),
  KEY `Observation_fk2` (`uploadedBy`),
  KEY `Observation_fk3` (`studyPlotId`),
  KEY `Observation_fk4` (`studyPlantId`),
  CONSTRAINT `Observation_fk0` FOREIGN KEY (`observationVariable`) REFERENCES `ObservationVariable` (`id`),
  CONSTRAINT `Observation_fk1` FOREIGN KEY (`operator`) REFERENCES `Person` (`id`),
  CONSTRAINT `Observation_fk2` FOREIGN KEY (`uploadedBy`) REFERENCES `Person` (`id`),
  CONSTRAINT `Observation_fk3` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot` (`id`),
  CONSTRAINT `Observation_fk4` FOREIGN KEY (`studyPlantId`) REFERENCES `StudyPlant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Observation`
--

LOCK TABLES `Observation` WRITE;
/*!40000 ALTER TABLE `Observation` DISABLE KEYS */;
/*!40000 ALTER TABLE `Observation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ObservationUnit`
--

DROP TABLE IF EXISTS `ObservationUnit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ObservationUnit` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locationId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `ObservationUnit_fk0` (`locationId`),
  CONSTRAINT `ObservationUnit_fk0` FOREIGN KEY (`locationId`) REFERENCES `Location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ObservationUnit`
--

LOCK TABLES `ObservationUnit` WRITE;
/*!40000 ALTER TABLE `ObservationUnit` DISABLE KEYS */;
/*!40000 ALTER TABLE `ObservationUnit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ObservationVariable`
--

DROP TABLE IF EXISTS `ObservationVariable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ObservationVariable` (
  `id` int(11) NOT NULL,
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
  `traitId` int(11) NOT NULL,
  `methodId` binary(1) NOT NULL,
  `scaleId` binary(1) NOT NULL,
  `defaultValue` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `ObservationVariable_fk0` (`ontologyId`),
  KEY `ObservationVariable_fk1` (`institution`),
  KEY `ObservationVariable_fk2` (`scientist`),
  KEY `ObservationVariable_fk3` (`crop`),
  KEY `ObservationVariable_fk4` (`traitId`),
  CONSTRAINT `ObservationVariable_fk0` FOREIGN KEY (`ontologyId`) REFERENCES `Ontology` (`id`),
  CONSTRAINT `ObservationVariable_fk1` FOREIGN KEY (`institution`) REFERENCES `Institution` (`id`),
  CONSTRAINT `ObservationVariable_fk2` FOREIGN KEY (`scientist`) REFERENCES `Person` (`id`),
  CONSTRAINT `ObservationVariable_fk3` FOREIGN KEY (`crop`) REFERENCES `Crop` (`id`),
  CONSTRAINT `ObservationVariable_fk4` FOREIGN KEY (`traitId`) REFERENCES `Trait` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ObservationVariable`
--

LOCK TABLES `ObservationVariable` WRITE;
/*!40000 ALTER TABLE `ObservationVariable` DISABLE KEYS */;
/*!40000 ALTER TABLE `ObservationVariable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ObservationVariableSynonym`
--

DROP TABLE IF EXISTS `ObservationVariableSynonym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ObservationVariableSynonym` (
  `id` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `accession` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ontology`
--

LOCK TABLES `Ontology` WRITE;
/*!40000 ALTER TABLE `Ontology` DISABLE KEYS */;
/*!40000 ALTER TABLE `Ontology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Person`
--

DROP TABLE IF EXISTS `Person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Person` (
  `id` int(11) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Person`
--

LOCK TABLES `Person` WRITE;
/*!40000 ALTER TABLE `Person` DISABLE KEYS */;
/*!40000 ALTER TABLE `Person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Program`
--

DROP TABLE IF EXISTS `Program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Program` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `objective` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `leadPerson` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `abbreviation` (`abbreviation`),
  KEY `Program_fk0` (`leadPerson`),
  CONSTRAINT `Program_fk0` FOREIGN KEY (`leadPerson`) REFERENCES `Person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Program`
--

LOCK TABLES `Program` WRITE;
/*!40000 ALTER TABLE `Program` DISABLE KEYS */;
/*!40000 ALTER TABLE `Program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sample`
--

DROP TABLE IF EXISTS `Sample`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sample` (
  `id` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataTypeId` int(11) NOT NULL,
  `decimalPlaces` int(11) NOT NULL,
  `xref` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `min` float DEFAULT NULL,
  `max` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `Scale_fk0` (`dataTypeId`),
  CONSTRAINT `Scale_fk0` FOREIGN KEY (`dataTypeId`) REFERENCES `DataType` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Scale`
--

LOCK TABLES `Scale` WRITE;
/*!40000 ALTER TABLE `Scale` DISABLE KEYS */;
/*!40000 ALTER TABLE `Scale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ScaleCategories`
--

DROP TABLE IF EXISTS `ScaleCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ScaleCategories` (
  `int` int(11) NOT NULL,
  `scaleId` int(11) NOT NULL,
  `value` float DEFAULT NULL,
  `category` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`int`),
  KEY `ScaleCategories_fk0` (`scaleId`),
  CONSTRAINT `ScaleCategories_fk0` FOREIGN KEY (`scaleId`) REFERENCES `Scale` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ScaleCategories`
--

LOCK TABLES `ScaleCategories` WRITE;
/*!40000 ALTER TABLE `ScaleCategories` DISABLE KEYS */;
/*!40000 ALTER TABLE `ScaleCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Season`
--

DROP TABLE IF EXISTS `Season`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Season` (
  `id` int(11) NOT NULL,
  `season` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Season`
--

LOCK TABLES `Season` WRITE;
/*!40000 ALTER TABLE `Season` DISABLE KEYS */;
/*!40000 ALTER TABLE `Season` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Species`
--

DROP TABLE IF EXISTS `Species`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Species` (
  `id` int(11) NOT NULL,
  `cropId` int(11) NOT NULL,
  `genus` varchar(50) NOT NULL,
  `species` varchar(50) NOT NULL,
  `speciesAuthority` varchar(50) NOT NULL,
  `subtaxa` varchar(50) NOT NULL,
  `subtaxaAuthority` varchar(50) NOT NULL,
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
INSERT INTO `Species` VALUES (0,0,'Oryza','sativa','Carl Linnaeus','','');
/*!40000 ALTER TABLE `Species` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Study`
--

DROP TABLE IF EXISTS `Study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Study` (
  `id` int(11) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Study`
--

LOCK TABLES `Study` WRITE;
/*!40000 ALTER TABLE `Study` DISABLE KEYS */;
/*!40000 ALTER TABLE `Study` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyAdditionalInfo`
--

DROP TABLE IF EXISTS `StudyAdditionalInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyAdditionalInfo` (
  `id` int(11) NOT NULL,
  `studyId` int(11) NOT NULL,
  `propertyName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `propertyValue` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyAdditionalInfo_fk0` (`studyId`),
  CONSTRAINT `StudyAdditionalInfo_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyAdditionalInfo`
--

LOCK TABLES `StudyAdditionalInfo` WRITE;
/*!40000 ALTER TABLE `StudyAdditionalInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyAdditionalInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyContact`
--

DROP TABLE IF EXISTS `StudyContact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyContact` (
  `id` int(11) NOT NULL,
  `studyId` int(11) NOT NULL,
  `contact` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyContact_fk0` (`studyId`),
  KEY `StudyContact_fk1` (`contact`),
  CONSTRAINT `StudyContact_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudyContact_fk1` FOREIGN KEY (`contact`) REFERENCES `Person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyContact`
--

LOCK TABLES `StudyContact` WRITE;
/*!40000 ALTER TABLE `StudyContact` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyContact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyGermplasm`
--

DROP TABLE IF EXISTS `StudyGermplasm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyGermplasm` (
  `id` int(11) NOT NULL,
  `studyId` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyGermplasm_fk0` (`studyId`),
  KEY `StudyGermplasm_fk1` (`germplasmId`),
  CONSTRAINT `StudyGermplasm_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudyGermplasm_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyGermplasm`
--

LOCK TABLES `StudyGermplasm` WRITE;
/*!40000 ALTER TABLE `StudyGermplasm` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyGermplasm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyObservationUnit`
--

DROP TABLE IF EXISTS `StudyObservationUnit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyObservationUnit` (
  `id` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `studyPlotId` int(11) NOT NULL,
  `plantNumber` int(11) NOT NULL,
  `blockNumber` int(11) NOT NULL,
  `X` int(11) NOT NULL,
  `Y` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyPlant_fk0` (`studyPlotId`),
  CONSTRAINT `StudyPlant_fk0` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyPlant`
--

LOCK TABLES `StudyPlant` WRITE;
/*!40000 ALTER TABLE `StudyPlant` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyPlant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyPlot`
--

DROP TABLE IF EXISTS `StudyPlot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyPlot` (
  `id` int(11) NOT NULL,
  `studyObservationUnitId` int(11) NOT NULL,
  `germplasmId` int(11) NOT NULL,
  `plotNumber` int(11) NOT NULL,
  `blockNumber` int(11) NOT NULL,
  `X` int(11) NOT NULL,
  `Y` int(11) NOT NULL,
  `replicate` int(11) NOT NULL,
  `plantingDate` date NOT NULL,
  `harvestDate` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyPlot_fk0` (`studyObservationUnitId`),
  KEY `StudyPlot_fk1` (`germplasmId`),
  CONSTRAINT `StudyPlot_fk0` FOREIGN KEY (`studyObservationUnitId`) REFERENCES `StudyObservationUnit` (`id`),
  CONSTRAINT `StudyPlot_fk1` FOREIGN KEY (`germplasmId`) REFERENCES `Germplasm` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyPlot`
--

LOCK TABLES `StudyPlot` WRITE;
/*!40000 ALTER TABLE `StudyPlot` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyPlot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudySeason`
--

DROP TABLE IF EXISTS `StudySeason`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudySeason` (
  `id` int(11) NOT NULL,
  `studyId` int(11) NOT NULL,
  `seasonId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudySeason_fk0` (`studyId`),
  KEY `StudySeason_fk1` (`seasonId`),
  CONSTRAINT `StudySeason_fk0` FOREIGN KEY (`studyId`) REFERENCES `Study` (`id`),
  CONSTRAINT `StudySeason_fk1` FOREIGN KEY (`seasonId`) REFERENCES `Season` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudySeason`
--

LOCK TABLES `StudySeason` WRITE;
/*!40000 ALTER TABLE `StudySeason` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudySeason` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyTreatment`
--

DROP TABLE IF EXISTS `StudyTreatment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyTreatment` (
  `id` int(11) NOT NULL,
  `studyPlotId` int(11) NOT NULL,
  `treatmentModalityId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `StudyTreatment_fk0` (`studyPlotId`),
  KEY `StudyTreatment_fk1` (`treatmentModalityId`),
  CONSTRAINT `StudyTreatment_fk0` FOREIGN KEY (`studyPlotId`) REFERENCES `StudyPlot` (`id`),
  CONSTRAINT `StudyTreatment_fk1` FOREIGN KEY (`treatmentModalityId`) REFERENCES `TreatmentModality` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyTreatment`
--

LOCK TABLES `StudyTreatment` WRITE;
/*!40000 ALTER TABLE `StudyTreatment` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyTreatment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudyType`
--

DROP TABLE IF EXISTS `StudyType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudyType` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudyType`
--

LOCK TABLES `StudyType` WRITE;
/*!40000 ALTER TABLE `StudyType` DISABLE KEYS */;
/*!40000 ALTER TABLE `StudyType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Trait`
--

DROP TABLE IF EXISTS `Trait`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Trait` (
  `id` int(11) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trait`
--

LOCK TABLES `Trait` WRITE;
/*!40000 ALTER TABLE `Trait` DISABLE KEYS */;
/*!40000 ALTER TABLE `Trait` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TraitAlternativeAbbreviation`
--

DROP TABLE IF EXISTS `TraitAlternativeAbbreviation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TraitAlternativeAbbreviation` (
  `id` int(11) NOT NULL,
  `traitId` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `traitId` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `factor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `factor` (`factor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TreatmentFactor`
--

LOCK TABLES `TreatmentFactor` WRITE;
/*!40000 ALTER TABLE `TreatmentFactor` DISABLE KEYS */;
/*!40000 ALTER TABLE `TreatmentFactor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TreatmentModality`
--

DROP TABLE IF EXISTS `TreatmentModality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TreatmentModality` (
  `id` int(11) NOT NULL,
  `treatmentFactorId` int(11) NOT NULL,
  `modality` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `modality` (`modality`),
  KEY `TreatmentModality_fk0` (`treatmentFactorId`),
  CONSTRAINT `TreatmentModality_fk0` FOREIGN KEY (`treatmentFactorId`) REFERENCES `TreatmentFactor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TreatmentModality`
--

LOCK TABLES `TreatmentModality` WRITE;
/*!40000 ALTER TABLE `TreatmentModality` DISABLE KEYS */;
/*!40000 ALTER TABLE `TreatmentModality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Trial`
--

DROP TABLE IF EXISTS `Trial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Trial` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `programId` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `Trial_fk0` (`programId`),
  CONSTRAINT `Trial_fk0` FOREIGN KEY (`programId`) REFERENCES `Program` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trial`
--

LOCK TABLES `Trial` WRITE;
/*!40000 ALTER TABLE `Trial` DISABLE KEYS */;
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

-- Dump completed on 2017-07-10 16:49:01
