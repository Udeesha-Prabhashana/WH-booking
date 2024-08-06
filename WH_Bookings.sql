-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hotel_booking
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `hotel_id` int DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (28,13,NULL,10),(29,60,32,10),(30,61,35,28);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `capacity_of_rooms` int DEFAULT NULL,
  `city_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contact_no` varchar(45) DEFAULT NULL,
  `user_role` int DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (10,'Sadun','kasun12','pbkdf2:sha256:260000$SBnGjOClp2liyWUO$b20aee746328138612cb3662356b5d9c3fb76c58033c0baae93c31eb345e2c2d','udeeshaprabhashana12@gmial.com','0773423335',1),(25,'sameeraded','kasun111','pbkdf2:sha256:260000$43pD4oF1zQIHQCXH$0a791e856677fbee5e4b17bf227415c124f510f5af4672d1d368fa0fbdef57f5','saergtga12@gmail.com','0773234335',2),(28,'afia','Afia123','pbkdf2:sha256:260000$ph3nWaFk10RlDftn$9aadeaea4fa84327cfbe0797e940e0988330f8a36ed37d071f5401b762710233','afia@gmail.com','+34243553444',1);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `hotel_id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `cheapestPrice` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `distance` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (13,'Resort','Aberdeen','789 Test Ave','https://q-xx.bstatic.com/xdata/images/hotel/max1200/33034375.jpg?k=aeff7a5937e85053c61c9288ee6310c491dfe0c6675d2a889bd51a955d715f42&o=','Relaxing Resort Bath','Escape to a peaceful retreat surrounded by nature in Bath.',300,'',3,6),(17,'Hotel','Aberdeen','1 Bristol Street','https://th.bing.com/th/id/R.38b5ccd633bbb3e723b0387a748ebaa5?rik=cRtmsiKb3IIh6A&pid=ImgRaw&r=0','Bristol Bay Hotel','Explore the historic streets of Bristol.',170,'',1,9),(20,'Hotel','Nottingham','1 Glasgow Street','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHROkJipewtAhZfAUfBWB1_E3X3jSX2kyyQ&s','Glasgow Grand Hotel','Experience luxury in the heart of Glasgow.',250,'',1,9),(22,'Hotel','Manchester','1 Manchester Street','https://besthotelshome.com/wp-content/uploads/2020/07/Top-10-best-luxury-5-star-hotels-in-Lose-Angeles.jpg','Manchester Marvel Hotel','Experience the vibrant nightlife of Manchester.',210,'',1,9),(23,'Hotel','Nottingham','1 New Castle Street','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2802I3oHl2dzR1oFBAfCedpKParvxmO_W9rWSqGuu6LEHeeeHkCEhomDLgMvswq9IG4Y&usqp=CAU','New Castle Riverside Hotel','Enjoy riverside views in New Castle.',160,'',1,8),(24,'Hotel','Norwich','1 Norwich Street','https://th.bing.com/th/id/R.38b5ccd633bbb3e723b0387a748ebaa5?rik=cRtmsiKb3IIh6A&pid=ImgRaw&r=0','Norwich City Hotel','Discover the historic charm of Norwich.',140,'',1,9),(25,'Hotel','Nottingham','1 Nottingham Street','https://besthotelshome.com/wp-content/uploads/2020/07/Top-10-best-luxury-5-star-hotels-in-Lose-Angeles.jpg','Nottingham Park Hotel','Explore the green spaces of Nottingham.',180,'',1,9),(26,'Hotel','Oxford','1 Oxford Street','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5b06yBAWsM3yoqmaC6U5F7xCde7XIKIuaw&s','Oxford Riverside Hotel','Experience the academic atmosphere of Oxford.',220,'',1,9),(27,'Hotel','Plymouth','1 Plymouth Street','https://th.bing.com/th/id/R.38b5ccd633bbb3e723b0387a748ebaa5?rik=cRtmsiKb3IIh6A&pid=ImgRaw&r=0','Plymouth Bay Hotel','Enjoy coastal views in Plymouth.',190,'',2,8),(28,'Hotel','Swansea','1 Swansea Street','https://besthotelshome.com/wp-content/uploads/2020/07/Top-10-best-luxury-5-star-hotels-in-Lose-Angeles.jpg','Swansea Seaside Hotel','Relax by the seaside in Swansea.',170,'',1,9),(56,'Hotel microne','Bristol','white lane,Bristol','https://pix10.agoda.net/hotelImages/569/569020/569020_15061915190030043115.jpg?ca=4&ce=1&s=312x235&ar=16x9','Hotel microne','Best price, best hotel',400,NULL,NULL,NULL),(57,'Hotel','Bristol','white lane,Bristol','https://cf.bstatic.com/xdata/images/hotel/max1024x768/549040214.jpg?k=9505882911e9cc108629f4aea1d81d2fe83329f3b69842a9c7a65102f6543b08&o=&hp=1','Hotel candrone','Best price, best hotel',500,NULL,NULL,NULL),(58,'Hotel','Bristol','saidrole lane,Bristol','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2802I3oHl2dzR1oFBAfCedpKParvxmO_W9rWSqGuu6LEHeeeHkCEhomDLgMvswq9IG4Y&usqp=CAU','Hotel suprmshine','Best price, best hotel',500,NULL,NULL,NULL),(59,'Hotel','Cardiff','KN lane,Cardiff','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2802I3oHl2dzR1oFBAfCedpKParvxmO_W9rWSqGuu6LEHeeeHkCEhomDLgMvswq9IG4Y&usqp=CAU','Hotel KNW','Best price, best hotel',600,NULL,NULL,NULL),(61,NULL,'London','No 24, amuil strees,London','http://res.cloudinary.com/dromuhnud/image/upload/v1721152948/upload/jvxdywggphooiy0fcbth.jpg','SonyWS Hotel','Five-star Hotel',350,NULL,NULL,NULL);
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `price` int DEFAULT NULL,
  `Average_Rating` varchar(20) DEFAULT NULL,
  `availibility` varchar(20) DEFAULT NULL,
  `facilities` varchar(80) DEFAULT NULL,
  `hotel_id` int NOT NULL,
  `maxPeople` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `room_number` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`room_id`,`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,100,NULL,NULL,'King size bed,1 bathroom, balcony',1,1,' Standard room',NULL),(2,200,NULL,NULL,'King size bed,1 bathroom, balcony',1,2,'Double room',NULL),(3,400,NULL,NULL,'King size bed,1 bathroom, balcony',1,4,'Family room',NULL),(4,600,NULL,NULL,'Master sixe bed, 2 bathroom',2,4,'Family room',NULL),(5,100,NULL,NULL,'masterbed',2,4,'Room added ',NULL),(10,200,NULL,NULL,'Master sixe bed, 1 bathroom',11,2,'Double ',NULL),(11,500,NULL,NULL,'Master sixe bed, 1 bathroom',11,4,'Family room',NULL),(12,200,NULL,NULL,'King size bed,1 bathroom',11,2,'Double ',NULL),(13,300,NULL,NULL,'Master sixe bed, 1 bathroom',11,4,'Family room',NULL),(14,500,NULL,NULL,'Master sixe bed, 1 bathroom',17,4,'Family room',NULL),(27,1000,NULL,NULL,'King size bed, 1 washroom',52,2,'Double Room',NULL),(35,400,NULL,NULL,'King size 1 bed, 1 washroom,',61,2,'Duble room ','250'),(36,700,NULL,NULL,'King size 2 bed, 1 washroom,',61,4,'Standed room ','250');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_numbers`
--

DROP TABLE IF EXISTS `room_numbers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_numbers` (
  `room_numbers_id` int NOT NULL AUTO_INCREMENT,
  `room_id` int DEFAULT NULL,
  `room_number` int DEFAULT NULL,
  `unavailable_date` datetime DEFAULT NULL,
  PRIMARY KEY (`room_numbers_id`),
  KEY `room_no_fk_idx` (`room_id`),
  CONSTRAINT `room_no_fk` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_numbers`
--

LOCK TABLES `room_numbers` WRITE;
/*!40000 ALTER TABLE `room_numbers` DISABLE KEYS */;
INSERT INTO `room_numbers` VALUES (1,1,101,'2024-05-04 18:30:00'),(2,1,102,'2023-08-10 18:30:00'),(3,2,201,'2023-08-11 18:30:00'),(4,2,202,'2024-05-02 18:30:00'),(5,3,301,'2024-02-02 18:30:00'),(6,3,302,NULL),(7,1,101,'2024-05-03 00:00:00'),(8,1,101,'2024-05-04 00:00:00'),(9,1,101,'2024-05-05 00:00:00'),(10,1,101,'2024-05-06 00:00:00'),(11,1,101,'2024-05-04 00:00:00'),(12,1,101,'2024-05-05 00:00:00'),(13,1,101,'2024-05-06 00:00:00'),(14,2,201,'2024-05-04 00:00:00'),(15,2,201,'2024-05-05 00:00:00'),(16,2,201,'2024-05-06 00:00:00'),(17,1,101,'2024-05-03 00:00:00'),(101,27,NULL,NULL),(109,35,250,NULL),(110,36,250,NULL),(111,35,250,'2024-07-16 00:00:00'),(112,35,250,'2024-07-17 00:00:00');
/*!40000 ALTER TABLE `room_numbers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'hotel_booking'
--

--
-- Dumping routines for database 'hotel_booking'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-17  0:08:09
