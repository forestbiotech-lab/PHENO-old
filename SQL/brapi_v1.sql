-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 22, 2016 at 12:23 PM
-- Server version: 5.5.53-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `brapi_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `Investigation`
--

CREATE TABLE IF NOT EXISTS `Investigation` (
  `InvestigationID` int(11) NOT NULL AUTO_INCREMENT,
  `TitleOfInvestigation` text NOT NULL,
  `DescriptionOfInvestigation` text NOT NULL,
  `SubmissionDate` date NOT NULL,
  `PublicReleaseDate` date NOT NULL,
  `AssociatedPublications` varchar(40) NOT NULL,
  `DataSubmitterContact` varchar(50) NOT NULL,
  `DataSubmitterID` varchar(19) NOT NULL,
  `ReplicationHierarchy` varchar(10) NOT NULL,
  PRIMARY KEY (`InvestigationID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Study table connects to this table trough a foreign key to investiationID' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `Investigation`
--

INSERT INTO `Investigation` (`InvestigationID`, `TitleOfInvestigation`, `DescriptionOfInvestigation`, `SubmissionDate`, `PublicReleaseDate`, `AssociatedPublications`, `DataSubmitterContact`, `DataSubmitterID`, `ReplicationHierarchy`) VALUES
(1, 'A test dataset to be used in tests', 'A log text detailing how the dataset was created and it''s particular details', '2016-11-01', '2016-11-09', 'associated  pub', 'Rua do fundo no fim da rua', '2020-0022-xlE3-9999', 'none');

-- --------------------------------------------------------

--
-- Table structure for table `Study`
--

CREATE TABLE IF NOT EXISTS `Study` (
  `StudyID` int(11) NOT NULL AUTO_INCREMENT,
  `InvestigationID` int(11) NOT NULL,
  `GeneralMetaDataID` int(11) NOT NULL,
  `EnvironmentGrowthFacilityID` int(11) NOT NULL,
  `EnvironmentRootingConditions` int(11) NOT NULL,
  `EnvironmentNutrientID` int(11) NOT NULL,
  `TreatmentID` int(11) NOT NULL,
  `ExperimentalDesignID` int(11) NOT NULL,
  `ObservedVarsID` int(11) NOT NULL,
  PRIMARY KEY (`StudyID`),
  UNIQUE KEY `InvestigationID` (`InvestigationID`,`GeneralMetaDataID`,`EnvironmentGrowthFacilityID`,`EnvironmentRootingConditions`,`EnvironmentNutrientID`,`TreatmentID`,`ExperimentalDesignID`,`ObservedVarsID`),
  KEY `StudyID` (`StudyID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Study`
--
ALTER TABLE `Study`
  ADD CONSTRAINT `Study_ibfk_1` FOREIGN KEY (`InvestigationID`) REFERENCES `Investigation` (`InvestigationID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
