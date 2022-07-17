-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 17 Lip 2022, 18:05
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `mybank`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `operation`
--

CREATE TABLE `operation` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `ovner_money` int(11) NOT NULL,
  `client_money` int(11) NOT NULL,
  `value` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `operation`
--

INSERT INTO `operation` (`id`, `date`, `ovner_money`, `client_money`, `value`) VALUES
(1, '2022-07-11', 1, 2, 6),
(2, '2022-07-11', 2, 1, 51),
(4, '2022-07-13', 1, 2, 10),
(6, '2022-07-13', 2, 1, 69),
(7, '2022-07-13', 2, 1, 100),
(8, '2022-07-13', 1, 2, 7),
(9, '2022-07-13', 1, 2, 10000),
(10, '2022-07-13', 1, 3, 10000);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_polish_ci NOT NULL,
  `sesion_id` text COLLATE utf8_polish_ci NOT NULL,
  `email` text COLLATE utf8_polish_ci NOT NULL,
  `password` text COLLATE utf8_polish_ci NOT NULL,
  `money` float NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `name`, `sesion_id`, `email`, `password`, `money`, `is_admin`) VALUES
(1, 'Adrian', '8bah7eo66130qbfjdngcthlhp7', 'adrian@gmail.com', 'zaq1@WSX', 2500, 1),
(2, 'Paweł', '', 'paweł@gmail.com', 'zaq1@WSX', 10112, 0),
(3, 'Andrzej', '', 'andrzej@gmail.com', 'zaq1@WSX', 11000, 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `operation`
--
ALTER TABLE `operation`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `operation`
--
ALTER TABLE `operation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
