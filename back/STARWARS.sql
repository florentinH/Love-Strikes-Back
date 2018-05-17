-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 17 mai 2018 à 11:46
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `STARWARS`
--

-- --------------------------------------------------------

--
-- Structure de la table `Profile`
--

CREATE TABLE `Profile` (
  `Id` int(11) NOT NULL,
  `Pseudo` varchar(100) DEFAULT NULL,
  `Password` varchar(6) DEFAULT NULL,
  `Gender` enum('male','female','hermaphrodite') DEFAULT NULL,
  `Age` int(3) DEFAULT NULL,
  `Job` varchar(100) DEFAULT NULL,
  `Leitimov` enum('"La force sera avec toi, toujours." - Ben Kenobi','"Plutôt embrasser un wookie!" - Leia Organa','"Non, je suis ton père." - Dark Vador','"Il y en a toujours un pour manger l''autre" - Qui-Gon Jinn','"La peur est le chemin vers le côté obscur: la peur mène à la colère,  le colère mène à la haine, la haine mène à la souffrance." - Yoda','"Tu ne vends pas de bâtons de la mort, tu vas rentrer chez toi et penser à ton avenir." - Obi-Wan Kenobi','"Même si notre armement est assez puissant pour détruire une planète, il est bien peu de chose en comparaison de la Force" - Dark Vador','"C''est donc ainsi que s''achève la liberté, sous un tonnerre d''applaudissements." - Padmé Amidala','"Chewie, on est à la maison." - Han Solo') NOT NULL,
  `Description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Profile`
--
ALTER TABLE `Profile`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Profile`
--
ALTER TABLE `Profile`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
