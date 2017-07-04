-- MySQL dump 10.13  Distrib 5.5.55, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: brapi_dan
-- ------------------------------------------------------
-- Server version	5.5.55-0ubuntu0.14.04.1

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
-- Table structure for table `Germplasm`
--

DROP TABLE IF EXISTS `Germplasm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Germplasm` (
  `id` int(11) NOT NULL,
  `speciesId` int(11) NOT NULL,
  `origin` int(50) NOT NULL,
  `defaultDisplayName` varchar(50) NOT NULL,
  `assessionNumber` varchar(20) NOT NULL,
  `germplasmPUI` varchar(100) NOT NULL,
  `pedigree` varchar(50) NOT NULL,
  `seedSource` varchar(100) NOT NULL,
  `biologicalStatusOfAccessionCode` varchar(50) NOT NULL,
  `acquisitionDate` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `defaultDisplayName` (`defaultDisplayName`),
  UNIQUE KEY `assessionNumber` (`assessionNumber`),
  UNIQUE KEY `germplasmPUI` (`germplasmPUI`),
  KEY `Germplasm_fk0` (`speciesId`),
  CONSTRAINT `Germplasm_fk0` FOREIGN KEY (`speciesId`) REFERENCES `Species` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Germplasm`
--

LOCK TABLES `Germplasm` WRITE;
/*!40000 ALTER TABLE `Germplasm` DISABLE KEYS */;
INSERT INTO `Germplasm` VALUES (2,0,0,'SHINCHIKU-IKU 103','IRGC10430','6cf44dde-2adc-463d-a849-4faf5a0db185','','IRRI','400','0000-00-00'),(3,0,0,'FR 13 A','IRGC117267','21ec0046-b7ce-47f4-91f2-dda6495ae65f','','IRRI','','2006-10-01'),(4,0,0,'IR 64-21','IRGC117268','376ba3c0-8ed0-468f-ba2d-311b2028adfd','','IRRI','','2006-10-01'),(5,0,0,'LI-JIANG-XIN-TUAN-HEI-GU','IRGC117269','15c1dfc3-807c-46f6-9da0-2d59a8e84e93','','IRRI','','2006-10-01'),(6,0,0,'MOROBEREKAN','IRGC117272','2297477c-2ae9-452b-9bb3-f3e4190fb435','','IRRI','','2006-10-01'),(7,0,0,'NIPPONBARE','IRGC117274','a99de2f0-2d15-4762-8685-e51a8c66b376','','IRRI','','2006-10-01'),(8,0,0,'SWARNA','IRGC117278','dea7e75b-b889-4fc7-8e26-9a4e33ba348e','','IRRI','','2006-10-01'),(9,0,0,'ASWINA','IRGC117281','9537e7a5-6c65-4345-826b-1a9931249022','','IRRI','500','2007-07-13'),(10,0,0,'ARC 7229','IRGC12331','47525c35-3849-4bd1-8b1f-99b605232c2b','','IRRI','','1970-07-30'),(11,0,0,'GOMPA 2','IRGC12894','29b2a6e9-46a2-4d93-a1f1-ca53ffb32b68','','IRRI','','1971-01-12'),(12,0,0,'LAC23','IRGC14957','5fb54915-51ed-40f6-8e71-b9e6121d66f6','','IRRI','400','1972-03-02'),(13,0,0,'63-104','IRGC15100','9bdca5c7-006e-42dc-bbb8-4e562df22ddb','','IRRI','','1972-05-19'),(14,0,0,'HASAWI','IRGC16817','a272b060-4c41-4e7d-961c-275122c04a64','','IRRI','','1972-09-19'),(15,0,0,'KERITING TINGGI','IRGC19972','2d106cd2-3889-4df8-9fc3-6f8b4fe8e4d0','','IRRI','300','1973-01-18'),(16,0,0,'NONA BOKRA','IRGC22710','ad902f8b-9c14-4a78-82c2-4ebffc7ca6c5','','IRRI','','1973-07-20'),(17,0,0,'BINULAWAN','IRGC26872','a6799508-2aa9-46ec-8c3c-272feb88505b','','IRRI','300','1975-01-07'),(18,0,0,'KHAO DAWK MALI 105','IRGC27748','27756e94-501e-41f4-8482-250c6f3527b7','','IRRI','300','1975-03-19'),(19,0,0,'CHAHORA 144','IRGC27869','a5a50ebd-87f9-4897-9af4-0e4c083afccf','','IRRI','300','1974-05-22'),(20,0,0,'P 660','IRGC28134','ff89ca02-6b91-4f39-8b8a-4910238f6354','','IRRI','','1974-05-22'),(21,0,0,'IR 29','IRGC30412','1c4376e3-e66c-4a6b-b990-2b80e27f9f34','','IRRI','500','1976-03-10'),(22,0,0,'NP125','IRGC32559','ee39008e-672e-4340-8d9c-1cacb9150be4','','IRRI','','1976-07-06'),(23,0,0,'BICO BRANCO','IRGC38994','830df449-b7f4-4a04-ab9f-05799532eba7','','IRRI','','1977-09-12'),(24,0,0,'CICIH BETON','IRGC43372','e7bc1d1c-f0a8-4f1b-8306-dc8ae019ebf7','','IRRI','300','1978-07-31'),(25,0,0,'','IRGC47017','ada39cf6-7114-4144-ab2f-bf30e06c4bcc','','IRRI','300','1978-04-19'),(26,0,0,'CANELA DE FERRO','IRGC50448','c45d2f06-958a-44f5-861c-d87635d960c9','','IRRI','500','1979-07-18'),(27,0,0,'SINNA SITHIRA KALI','IRGC51064','5ca1a2e8-0702-42dd-8d3f-b7eaf620ea27','','IRRI','300','1979-02-26'),(28,0,0,'PA-TOU-HUNG','IRGC51400','1942bc1a-95a3-470a-b7de-0768ab849e9a','','IRRI','500','1979-05-21'),(29,0,0,'SONA CHUR','IRGC53931','be4e9cdc-5800-4457-a6c8-40563c027dd9','','IRRI','','1980-09-18'),(30,0,0,'SINTANE DIOFOR','IRGC5418','5abfcd9d-c3c3-40d2-b28d-a6b73b7b6cb3','','IRRI','300','1962-04-12'),(31,0,0,'PANKHARI 203','IRGC5999','675c7e6e-428f-44d6-9c39-5541c7293f45','','IRRI','400','1963-06-04'),(32,0,0,'CHITRAJ(DA 23)','IRGC6208','b742901c-f981-465b-b275-c9cbb0318e24','','IRRI','400','1963-06-04'),(33,0,0,'JHONA 349','IRGC6307','abd0051b-f9ad-4bf8-8dd6-90194708ff76','','IRRI','400','1963-06-04'),(34,0,0,'CO 18','IRGC6331','9162a476-5808-44d2-855e-cde1b232adf5','','IRRI','400','1963-06-04'),(35,0,0,'IR 58','IRGC63492','cd93a3a3-a4b6-40a5-965d-e192dca42eb1','','IRRI','500','1984-01-06'),(36,0,0,'ISSAMO','IRGC63494','d4c83b3b-b806-497d-afbb-f81ff76f3244','','IRRI','','1983-01-27'),(37,0,0,'SI ADULO','IRGC66640','91887efb-7f4c-4122-bf0a-9e54cea02466','','IRRI','300','1984-04-09'),(38,0,0,'DINOLORES','IRGC67431','14944f89-e81d-4a48-9579-de19d554920c','','IRRI','300','1986-01-21'),(39,0,0,'GUMPANGAR','IRGC71524','7798e57d-76ca-4f2b-9b07-bb952486eb1b','','IRRI','300','1985-02-04'),(40,0,0,'TAK SIAH','IRGC73126','e32803a6-5d33-46b6-a1b3-ceb0639d6a27','','IRRI','300','1985-11-05'),(41,0,0,'URYEE BOOTA','IRGC74719','1dcba894-fb5f-489c-bf8a-a4db148936de','','IRRI','300','1986-01-21'),(42,0,0,'MTU9','IRGC7919','ec2ed821-3f73-4d18-ada1-da5c458a6239','','IRRI','','1963-04-06'),(43,0,0,'MALAGKIT PIRURUTONG','IRGC8182','01ac39ce-130b-4425-9017-9fbcdf8ab096','','IRRI','','1962-03-23'),(44,0,0,'KUN-MIN-TSIEH-HUNAN','IRGC8195','7d81b521-7d9e-4702-ac79-f840e87ddec9','','IRRI','500','1962-03-23'),(45,0,0,'KARASUKARA-SURANKASU','IRGC8196','8683da4d-68b5-47aa-affa-67ee30a7c32d','','IRRI','','1962-03-23'),(46,0,0,'DAVAO','IRGC8244','c985c305-f639-437c-909d-4b6eae05666f','','IRRI','','1962-03-23'),(47,0,0,'MACAN BINUNDOK','IRGC8245','f3d8fd4b-1b39-444a-b675-50b751f7ee0b','','IRRI','','1962-03-23'),(48,0,0,'NABESHI','IRGC8269','0f05bab8-9de5-452d-a70d-63bbb1ca75d1','','IRRI','','1962-03-23'),(49,0,0,'DHOLA AMAN(LOWLAND AMAN)','IRGC8341','221c6fda-4837-49cc-b908-5d930623ffdb','','IRRI','500','1963-06-17'),(50,0,0,'RATHUWEE','IRGC8952','b844cb44-c4f6-4a10-a951-a5c8a91ad21c','','IRRI','300','1963-07-15'),(51,0,0,'JC148','IRGC9069','acdc55c8-c657-44b2-a3eb-6c68f32e1875','','IRRI','400','1962-03-23'),(52,0,0,'JC149','IRGC9070','2a4425d4-dfa1-4d27-b292-f915f7b2fb97','','IRRI','400','1962-03-23'),(53,0,0,'JC93','IRGC9175','e017d6cd-74af-4d4a-80b9-c957b2b4cb4e','','IRRI','','1962-03-23'),(54,0,0,'JC91','IRGC9177','55cc6621-ae39-4ab8-8e47-b228c5f4d9cc','','IRRI','400','1962-03-23'),(55,0,0,'AMARELO','IRGC9389','3991d648-3e0c-4529-b695-6e27a3e9dc41','','IRRI','','0000-00-00'),(56,0,0,'TADUKAN','IRGC9804','56e5993f-3949-4a1a-b83e-adba21c38fd6','','IRRI','400','0000-00-00');
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
/*!40000 ALTER TABLE `Institution` ENABLE KEYS */;
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-04 22:16:36
