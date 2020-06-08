-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  ven. 15 mai 2020 à 10:56
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `carcare`
--

-- --------------------------------------------------------

--
-- Structure de la table `car_client`
--

DROP TABLE IF EXISTS `car_client`;
CREATE TABLE IF NOT EXISTS `car_client` (
  `id_car_client` bigint(20) NOT NULL AUTO_INCREMENT,
  `cycle_assurance` varchar(255) NOT NULL,
  `km_par_jour` int(11) NOT NULL,
  `matricule` varchar(255) NOT NULL,
  `id_client_individu` bigint(20) NOT NULL,
  `id_marque` bigint(20) NOT NULL,
  `id_modele` bigint(20) NOT NULL,
  `id_client_individuel` bigint(20) NOT NULL,
  PRIMARY KEY (`id_car_client`),
  KEY `FK5xmkmj5qjexwnck0yi2d5g6xq` (`id_client_individu`),
  KEY `FK12o028se9miaomyk82a1k1j76` (`id_client_individuel`),
  KEY `FK444qbu6qfrc0hihmm6tlwq5ie` (`id_marque`),
  KEY `FKahamene8xw47v67gg9xenv037` (`id_modele`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `centre_assurance`
--

DROP TABLE IF EXISTS `centre_assurance`;
CREATE TABLE IF NOT EXISTS `centre_assurance` (
  `id_centre_assurance` bigint(20) NOT NULL,
  `horaire_centre_assurance` varchar(255) NOT NULL,
  `local_centre_assurance` varchar(255) NOT NULL,
  `name_centre_assurance` varchar(255) NOT NULL,
  `numero_tel_centre_assurance` varchar(255) NOT NULL,
  `lat_centre_assurance` varchar(255) NOT NULL,
  `long_centre_assurance` varchar(255) NOT NULL,
  PRIMARY KEY (`id_centre_assurance`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `centre_assurance`
--

INSERT INTO `centre_assurance` (`id_centre_assurance`, `horaire_centre_assurance`, `local_centre_assurance`, `name_centre_assurance`, `numero_tel_centre_assurance`, `lat_centre_assurance`, `long_centre_assurance`) VALUES
(11, '8:00 - 18:00 (Samedi 8:30 - 12:30) (Dimanche Fermé)', 'Rue du Lac D\'Annecy, Tunis', 'Centre d\'Expertise ASTREE', '71 960 364', '', ''),
(12, '8:30 - 17:30 (Samedi 8:30 - 14:00) (Dimanche Fermé)', 'Tunis', 'Centre d\'Expertise Automobile GAT Assurances', '31 107 137', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `centre_vidange`
--

DROP TABLE IF EXISTS `centre_vidange`;
CREATE TABLE IF NOT EXISTS `centre_vidange` (
  `id_centre_vidange` bigint(20) NOT NULL AUTO_INCREMENT,
  `horaire_centre_vidange` varchar(255) NOT NULL,
  `local_centre_vidange` varchar(255) NOT NULL,
  `name_centre_vidange` varchar(255) NOT NULL,
  `numero_tel_centre_vidange` varchar(255) NOT NULL,
  `lat_centre_vidange` varchar(255) NOT NULL,
  `long_centre_vidange` varchar(255) NOT NULL,
  PRIMARY KEY (`id_centre_vidange`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `centre_vidange`
--

INSERT INTO `centre_vidange` (`id_centre_vidange`, `horaire_centre_vidange`, `local_centre_vidange`, `name_centre_vidange`, `numero_tel_centre_vidange`, `lat_centre_vidange`, `long_centre_vidange`) VALUES
(2, '8:00 - 22:30', '38 Avenue de l\'Indépendence, le Bardo', 'Allo Vidange', '70 028 900', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `centre_visite`
--

DROP TABLE IF EXISTS `centre_visite`;
CREATE TABLE IF NOT EXISTS `centre_visite` (
  `id_centre_visite` bigint(20) NOT NULL,
  `horiare_centre_visite` varchar(255) NOT NULL,
  `local_centre_visite` varchar(255) NOT NULL,
  `name_centre_visite` varchar(255) NOT NULL,
  `numero_tel_centre_visite` varchar(255) NOT NULL,
  `lat_centre_visite` varchar(255) NOT NULL,
  `long_centre_visite` varchar(255) NOT NULL,
  PRIMARY KEY (`id_centre_visite`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `centre_visite`
--

INSERT INTO `centre_visite` (`id_centre_visite`, `horiare_centre_visite`, `local_centre_visite`, `name_centre_visite`, `numero_tel_centre_visite`, `lat_centre_visite`, `long_centre_visite`) VALUES
(40, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:00 Le Vendredi de7:30 a', 'Nouvelle Tataouine', 'Tataouine', '75 870', '', ''),
(49, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:30 Le Vendredi et le Samedi ', 'Route Gabs -Kbili 4280', 'Kbili', '75490508', '', ''),
(43, 'de 8:00 a 15:00 du Lundi au Jeudi de8:00 a 14:00 Le Vendredi et le Samedi', 'Avenu Farhat Hachad', 'Menzel Tmime', '72 300 578', '', ''),
(45, 'de 8:00 a 15:00 du Lundi au Jeudi de8:00 a', 'cit Hrouch - Le', 'Le Kef', '78 224 466', '', ''),
(47, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:30 Le Vendredi et le Samedi ', 'Route Makthar - Siliana 6100', 'Siliana', '78 872 621', '', ''),
(38, 'de 7:00 a 14:00 du Lundi au Jeudi de7:00 a 13:00 Le Vendredi et le Samedi', 'Route Tabarka - Bja', 'Beja', '78 455 277', '', ''),
(32, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:30 Le Vendredi et le Samedi ', 'Cit El Khadhra - Kasserine', 'Kasserine', '77 471 645', '', ''),
(34, 'de 8:00 a 15:00 du Lundi au Jeudi de8:00 a', 'Route Sousse - Menzel Hayet km 3', 'Menzel Hayet', '73 410 444', '', ''),
(36, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:30 Le Vendredi et le Samedi ', 'Route Gabs - Lela - Gafsa', 'Gafsa', '76 214 558', '', ''),
(28, 'de7:30 a 14:30 du Lundi au Jeudi', 'Route Ain Draham', 'Jendouba', '78 605 495', '', ''),
(30, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:30 Le Vendredi et le Samedi ', 'Rue Ouled Haffouz - Sidi Bouzid 9100', 'Sidi Bouzid', '76 632 381', '', ''),
(25, 'de7:30 a 14:10', 'Route Ben Guerdane', 'Medenine', '75 652 473', '', ''),
(26, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:30 Le Vendredi et le Samedi', 'Zone Industrielle - Zaghouan 1100', 'Zaghouan', '72 680 084', '', ''),
(23, 'de8:00 a', 'Rue Ali Belhouen - Mahdia', 'Mahdia', '73 692 262', '', ''),
(21, 'de 8:00 a 15:00 ', 'Essouani - Houmet Essouk 4180', 'Djerba', 'Pas Disponible', '', ''),
(19, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:30 Le Vendredi et le Samedi', 'Route Tunis- Bou Chemma - Gabs 6031', 'Gabes', '75 351 590', '', ''),
(16, 'de7:30 a 14:10', 'Zone Industrielle - Bir Kassaa', 'Bir El Kassaa', '981', '', ''),
(17, 'de 8:00 a 15:00 du Lundi au Jeudi de8:00 a', 'Zone Industrielle - route El Baten', 'Kairouan', '77 303 133', '', ''),
(14, 'de7:30 a 14:30', 'Route Parc A - Cit des Jardins - Sekma - Bizerte 7071', 'Bizerte', '72 534 160', '', ''),
(10, 'de7:00 a', 'Rue Mongi Bali - Nabeul 8000', 'Nabeul', '72 223 151', '', ''),
(11, 'de7:30 a 14:30 du Lundi au Jeudi de7:30 a 13:00 Le Vendredi de7:30 a', 'Route Khniss - Monastir', 'Monastir', '73 350 015', '', ''),
(9, 'de7:00 a 13:40', 'Sidi Hassine Sijoumi - route El Fahs', 'Sijoumi Vehicules lourds', '974', '', ''),
(8, 'de 7:00 a 13:40', 'Route Tunis km 12 - cit El Ons - Sfax 3021', 'Sakiet Ezzit', '74 862 152', '', ''),
(6, 'de 8:00 a 15:00 du Lundi au Jeudi de8:00 a', 'Route Monastir - Zone Industrielle Sidi Abdel Hamid 4000', 'Sousse', '73 320 750', '', ''),
(4, 'de7:00 a 13:40', 'Rue Okba Ibn Nafaa - Sfax 3019', 'Sfax', '74 497 866', '', ''),
(5, 'de7:30 a 14:10', 'Rue la monnaie - Zone Iindustrielle Ben Arous 2013', 'Ben Arous', '71 380 664', '', ''),
(2, 'de7:30 a 14:20 sauf Vendredi de 7:30 a 13:20', 'Cit El Bokri - Cebbalat Ben Ammar', 'Ariana', '71 537 310', '', ''),
(1, 'de7:00 a 13:40', 'Sidi Hassine Sijoumi - route El Fahs', '', '974', '', ''),
(51, 'de7:30 a 14:10', 'Route El Hamma - Tozeur 2200', 'Tozeur', '76 452 125', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `client_assurance`
--

DROP TABLE IF EXISTS `client_assurance`;
CREATE TABLE IF NOT EXISTS `client_assurance` (
  `id_client_assurance` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_client_assurance` datetime NOT NULL,
  `name_client_assurance` varchar(255) NOT NULL,
  `id_car_client` bigint(20) NOT NULL,
  `id_centre_assurance` bigint(20) NOT NULL,
  PRIMARY KEY (`id_client_assurance`),
  KEY `FKj0u51nk776pc49t17hbgsfcag` (`id_car_client`),
  KEY `FK3l736nm4peap2u37tnb83wgr7` (`id_centre_assurance`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client_individu`
--

DROP TABLE IF EXISTS `client_individu`;
CREATE TABLE IF NOT EXISTS `client_individu` (
  `id_client_individu` bigint(20) NOT NULL AUTO_INCREMENT,
  `email_client_individu` varchar(255) NOT NULL,
  `first_name_client_individu` varchar(255) NOT NULL,
  `last_name_client_individu` varchar(255) NOT NULL,
  `mdp_client` varchar(255) NOT NULL,
  `region_client` varchar(255) NOT NULL,
  PRIMARY KEY (`id_client_individu`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `client_individu`
--

INSERT INTO `client_individu` (`id_client_individu`, `email_client_individu`, `first_name_client_individu`, `last_name_client_individu`, `mdp_client`, `region_client`) VALUES
(1, 'medaziz.fitouri@gmail.com', 'Abd Aziz', 'Fitouri', 'MotDePasse', 'Ben Arous');

-- --------------------------------------------------------

--
-- Structure de la table `client_pneumatique`
--

DROP TABLE IF EXISTS `client_pneumatique`;
CREATE TABLE IF NOT EXISTS `client_pneumatique` (
  `id_client_pneumatique` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_client_pneumatique` datetime NOT NULL,
  `date_fin_client_pneumatique` datetime DEFAULT NULL,
  `id_station_pneumatique` bigint(20) NOT NULL,
  `name_client_pneumatique` varchar(255) DEFAULT NULL,
  `id_car_client` bigint(20) NOT NULL,
  `check_equilibre` bit(1) NOT NULL,
  `check_parallelisme` bit(1) NOT NULL,
  PRIMARY KEY (`id_client_pneumatique`),
  KEY `FK25k4y3l1bx2vs4ysbcu9r2y6e` (`id_car_client`),
  KEY `FKe63nwq6u8tnb5tkvgvq6otakq` (`id_station_pneumatique`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client_vidange`
--

DROP TABLE IF EXISTS `client_vidange`;
CREATE TABLE IF NOT EXISTS `client_vidange` (
  `id_client_vidange` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_client_vidange` datetime NOT NULL,
  `name_client_vidange` varchar(255) NOT NULL,
  `id_car_client` bigint(20) NOT NULL,
  `id_centre_vidange` bigint(20) NOT NULL,
  `check_filtre_air` bit(1) NOT NULL,
  `check_filtre_essence` bit(1) NOT NULL,
  `check_filtre_huile` bit(1) NOT NULL,
  PRIMARY KEY (`id_client_vidange`),
  KEY `FK86971ab19pggahe84k93ayble` (`id_car_client`),
  KEY `FK700pyv22utpwkpm9gikbnp2ks` (`id_centre_vidange`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client_vignette`
--

DROP TABLE IF EXISTS `client_vignette`;
CREATE TABLE IF NOT EXISTS `client_vignette` (
  `id_client_vignette` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_client_vignette` datetime NOT NULL,
  `name_client_vignette` varchar(255) NOT NULL,
  `id_car_client` bigint(20) NOT NULL,
  PRIMARY KEY (`id_client_vignette`),
  KEY `FK65pmyysvx0lit7s0pvcdou6ux` (`id_car_client`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client_visite`
--

DROP TABLE IF EXISTS `client_visite`;
CREATE TABLE IF NOT EXISTS `client_visite` (
  `id_client_visite` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_client_visite` datetime NOT NULL,
  `name_client_visite` varchar(255) NOT NULL,
  `id_car_client` bigint(20) NOT NULL,
  `id_centre_visite` bigint(20) NOT NULL,
  PRIMARY KEY (`id_client_visite`),
  KEY `FK7a1ilgoapmg8edvvrf2jwalvg` (`id_car_client`),
  KEY `FKe1timhie86tsb25thvipxew0k` (`id_centre_visite`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(32);

-- --------------------------------------------------------

--
-- Structure de la table `marque`
--

DROP TABLE IF EXISTS `marque`;
CREATE TABLE IF NOT EXISTS `marque` (
  `id_marque` bigint(20) NOT NULL AUTO_INCREMENT,
  `name_marque` varchar(255) NOT NULL,
  `pays_origine` varchar(255) NOT NULL,
  PRIMARY KEY (`id_marque`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `marque`
--

INSERT INTO `marque` (`id_marque`, `name_marque`, `pays_origine`) VALUES
(1, 'BMW', 'Allemagne'),
(2, 'Renault', 'France'),
(3, 'Ford', 'Etats-Unis'),
(4, 'Audi', 'Allemagne'),
(5, 'Wallys', 'Tunisie'),
(6, 'Mercedes-Benz', 'Allemagne'),
(7, 'Opel', 'Allemagne'),
(8, 'Porsche', 'Allemagne'),
(9, 'Smart', 'Allemagne'),
(10, 'Volkswagen', 'Allemagne'),
(11, 'Buick', 'Etats-Unis'),
(12, 'Cadillac', 'Etats-Unis'),
(13, 'Chevrolet', 'Etats-Unis'),
(14, 'Chrysler', 'Etats-Unis'),
(15, 'Dodge', 'Etats-Unis'),
(16, 'Jeep', 'Etats-Unis'),
(17, 'Lincoln', 'Etats-Unis'),
(19, 'Pontiac', 'Etats-Unis'),
(21, 'Saturn', 'Etats-Unis'),
(22, 'Bugatti', 'France'),
(23, 'Citroën', 'France'),
(24, 'DS', 'France'),
(25, 'Peugeot', 'France'),
(26, 'Alfa Romeo', 'Italie'),
(27, 'Ferrari', 'Italie'),
(28, 'Fiat', 'Italie'),
(29, 'Lamborghini', 'Italie'),
(30, 'Lancia', 'Italie'),
(31, 'Maserati', 'Italie'),
(32, 'Acura', 'Japon'),
(33, 'Dihatsu', 'Japon'),
(34, 'Datsun', 'Japon'),
(35, 'Honda', 'Japon'),
(36, 'Infiniti', 'Japon'),
(68, 'New12', 'New'),
(38, 'Lexus', 'Japon'),
(39, 'Mazda', 'Japon'),
(40, 'Mitsubishi', 'Japon'),
(41, 'Nissan', 'Japon'),
(42, 'Subaru', 'Japon'),
(43, 'Toyota', 'Japon'),
(44, 'Austin', 'Royaume-Uni'),
(45, 'Hillman', 'Royaume-Uni'),
(46, 'Humber', 'Royaume-Uni'),
(47, 'Jaguar', 'Royaume-Uni'),
(48, 'Land Rover', 'Royaume-Uni'),
(69, 'Nouvelle Marque', 'Autre Pays'),
(67, 'New1', 'New1'),
(51, 'Mini', 'Royaume-Uni'),
(65, 'New', 'New'),
(53, 'Rover', 'Royaume-Uni');

-- --------------------------------------------------------

--
-- Structure de la table `modele`
--

DROP TABLE IF EXISTS `modele`;
CREATE TABLE IF NOT EXISTS `modele` (
  `id_modele` bigint(20) NOT NULL AUTO_INCREMENT,
  `name_modele` varchar(255) NOT NULL,
  `year_modele` int(11) NOT NULL,
  `id_marque` bigint(20) NOT NULL,
  PRIMARY KEY (`id_modele`),
  KEY `FK2578opdt1uhd56s3ne0rvf4a1` (`id_marque`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `modele`
--

INSERT INTO `modele` (`id_modele`, `name_modele`, `year_modele`, `id_marque`) VALUES
(3, 'BMW', 2013, 1),
(4, 'Série 3 Compact E46', 2001, 1),
(5, 'Série 1 E87', 2004, 1),
(6, 'Série 1 F20', 2011, 1),
(7, 'Série 1 F52', 2016, 1),
(8, 'Série 3 E36', 1990, 1),
(9, 'Série 3 E46', 1998, 1),
(10, 'Série 3 E90', 2005, 1),
(11, 'Série 3 F30-F35', 2011, 1),
(12, 'Série 3 GT F34', 2013, 1),
(13, 'Série 4 Gran Coupe', 2014, 1),
(14, 'Série 5 E60', 2003, 1),
(15, 'Série 5 F10-F18', 2010, 1),
(16, 'Série 5 G30-G38', 2016, 1),
(17, 'Série 5 GT F07', 2009, 1),
(18, 'Série 6 GT', 2017, 1),
(19, 'Série 6 Gran Coupe', 2012, 1),
(25, '206', 2000, 25);

-- --------------------------------------------------------

--
-- Structure de la table `station_pneumatique`
--

DROP TABLE IF EXISTS `station_pneumatique`;
CREATE TABLE IF NOT EXISTS `station_pneumatique` (
  `id_station_pneumatique` bigint(20) NOT NULL,
  `horiare_station_pneumatique` varchar(255) NOT NULL,
  `local_station_pneumatique` varchar(255) NOT NULL,
  `name_station_pneumatique` varchar(255) NOT NULL,
  `numero_tel_station_pneumatique` varchar(255) NOT NULL,
  `lat_station_pneumatique` varchar(255) NOT NULL,
  `long_station_pneumatique` varchar(255) NOT NULL,
  PRIMARY KEY (`id_station_pneumatique`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `station_pneumatique`
--

INSERT INTO `station_pneumatique` (`id_station_pneumatique`, `horiare_station_pneumatique`, `local_station_pneumatique`, `name_station_pneumatique`, `numero_tel_station_pneumatique`, `lat_station_pneumatique`, `long_station_pneumatique`) VALUES
(1, '8:00 - 20:00', '6, Avenue Ali Belahouane, Ariana', 'SSB Pneumatique Ariana', '98 351 610', '', ''),
(3, '8:30 - 19:30', '108, Avenue Ibn Khaldoun, Riadh El Andalous, Ariana', 'APS (Autos Pneus Services)', '24 481 473', '', ''),
(5, '8:00 - 17:00', '162, rue 9007, Jbel Jloudn Tunis', 'FIX N GO', '98 780 401', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
