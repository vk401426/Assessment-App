-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: urjafied
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `test_questions`
--

DROP TABLE IF EXISTS `test_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `questions` json DEFAULT NULL,
  `jobid` varchar(50) DEFAULT NULL,
  `jobname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_questions`
--

LOCK TABLES `test_questions` WRITE;
/*!40000 ALTER TABLE `test_questions` DISABLE KEYS */;
INSERT INTO `test_questions` VALUES (1,'{\"options\": {\"A\": \"h\", \"B\": \"b\", \"C\": \"kfa\", \"D\": \"kfla\"}, \"que_txt\": \"hell\", \"crct_opt\": \"B\"}',NULL,NULL),(2,'{\"options\": {\"A\": \"jflsak\", \"B\": \"klfsdkal\", \"C\": \"kfjlsas\", \"D\": \"jlfkal\"}, \"que_txt\": \"flksajl\", \"crct_opt\": \"C\"}','dflsakfd','klfsak'),(3,'{\"options\": {\"A\": \"gr\", \"B\": \"fkjlj\", \"C\": \"ji\", \"D\": \"fkjlas\"}, \"que_txt\": \"hello\", \"crct_opt\": \"B\"}','python','python'),(4,'{\"options\": {\"A\": \"kfjla\", \"B\": \"lfjka\", \"C\": \"fkjjals\", \"D\": \"fkla\"}, \"que_txt\": \"ji malik\", \"crct_opt\": \"D\"}','python','python'),(5,'{\"options\": {\"A\": \"List\", \"B\": \"Tuple\", \"C\": \"Set\", \"D\": \"Dictionary\"}, \"que_txt\": \"Which of the following is mutable?\", \"crct_opt\": \"A\"}','python','python'),(6,'{\"options\": {\"A\": \"len()\", \"B\": \"size()\", \"C\": \"count()\", \"D\": \"length()\"}, \"que_txt\": \"Which function is used to find the length of a list?\", \"crct_opt\": \"A\"}','python','python'),(7,'{\"options\": {\"A\": \"1\", \"B\": \"2\", \"C\": \"3\", \"D\": \"None\"}, \"que_txt\": \"What is the output of the following code: print(type([]))?\", \"crct_opt\": \"A\"}','python','python'),(8,'{\"options\": {\"A\": \"list()\", \"B\": \"dict()\", \"C\": \"set()\", \"D\": \"tuple()\"}, \"que_txt\": \"Which of the following is not a built-in data type in Python?\", \"crct_opt\": \"B\"}','python','python'),(9,'{\"options\": {\"A\": \"break\", \"B\": \"continue\", \"C\": \"pass\", \"D\": \"exit\"}, \"que_txt\": \"Which statement is used to exit a loop in Python?\", \"crct_opt\": \"A\"}','python','python'),(10,'{\"options\": {\"A\": \"class\", \"B\": \"def\", \"C\": \"method\", \"D\": \"function\"}, \"que_txt\": \"What keyword is used to define a function in Python?\", \"crct_opt\": \"B\"}','python','python'),(11,'{\"options\": {\"A\": \"True\", \"B\": \"1\", \"C\": \"Both A and B\", \"D\": \"Neither A nor B\"}, \"que_txt\": \"What does the boolean value true represent in Python?\", \"crct_opt\": \"C\"}','python','python'),(12,'{\"options\": {\"A\": \"0\", \"B\": \"1\", \"C\": \"2\", \"D\": \"3\"}, \"que_txt\": \"What is the index of the first element in a Python list?\", \"crct_opt\": \"B\"}','python','python'),(13,'{\"options\": {\"A\": \"for\", \"B\": \"while\", \"C\": \"do-while\", \"D\": \"foreach\"}, \"que_txt\": \"Which loop can be used to iterate over a list in Python?\", \"crct_opt\": \"A\"}','python','python'),(14,'{\"options\": {\"A\": \"import\", \"B\": \"include\", \"C\": \"require\", \"D\": \"load\"}, \"que_txt\": \"Which keyword is used to include external modules in Python?\", \"crct_opt\": \"A\"}','python','python'),(15,'{\"options\": {\"A\": \"float\", \"B\": \"int\", \"C\": \"char\", \"D\": \"string\"}, \"que_txt\": \"Which of the following is a built-in data type in C++?\", \"crct_opt\": \"B\"}','cpp','cpp'),(16,'{\"options\": {\"A\": \"std::cout\", \"B\": \"printf\", \"C\": \"cin\", \"D\": \"write\"}, \"que_txt\": \"Which of the following is used to output data in C++?\", \"crct_opt\": \"A\"}','cpp','cpp'),(17,'{\"options\": {\"A\": \"new\", \"B\": \"malloc\", \"C\": \"calloc\", \"D\": \"alloc\"}, \"que_txt\": \"Which operator is used to allocate memory in C++?\", \"crct_opt\": \"A\"}','cpp','cpp'),(18,'{\"options\": {\"A\": \"class\", \"B\": \"struct\", \"C\": \"union\", \"D\": \"All of the above\"}, \"que_txt\": \"Which of the following can be used to create user-defined data types in C++?\", \"crct_opt\": \"D\"}','cpp','cpp'),(19,'{\"options\": {\"A\": \"for\", \"B\": \"foreach\", \"C\": \"loop\", \"D\": \"iterate\"}, \"que_txt\": \"What is the correct syntax for a for loop in C++?\", \"crct_opt\": \"A\"}','cpp','cpp'),(20,'{\"options\": {\"A\": \"0\", \"B\": \"1\", \"C\": \"2\", \"D\": \"3\"}, \"que_txt\": \"What is the value of the expression: 3 + 4 * 5 in C++?\", \"crct_opt\": \"B\"}','cpp','cpp'),(21,'{\"options\": {\"A\": \"string\", \"B\": \"std::string\", \"C\": \"str\", \"D\": \"char\"}, \"que_txt\": \"What data type is used to represent a sequence of characters in C++?\", \"crct_opt\": \"B\"}','cpp','cpp'),(22,'{\"options\": {\"A\": \"Exception\", \"B\": \"Try\", \"C\": \"Catch\", \"D\": \"Throw\"}, \"que_txt\": \"Which keyword is used to handle exceptions in C++?\", \"crct_opt\": \"B\"}','cpp','cpp'),(23,'{\"options\": {\"A\": \"class MyClass {}\", \"B\": \"MyClass: class {}\", \"C\": \"class: MyClass {}\", \"D\": \"MyClass class {}\"}, \"que_txt\": \"What is the correct syntax to define a class in C++?\", \"crct_opt\": \"A\"}','cpp','cpp'),(24,'{\"options\": {\"A\": \"0\", \"B\": \"1\", \"C\": \"2\", \"D\": \"Undefined\"}, \"que_txt\": \"What is the index of the first element in a C++ array?\", \"crct_opt\": \"A\"}','cpp','cpp'),(25,'{\"options\": {\"A\": \"int\", \"B\": \"Integer\", \"C\": \"string\", \"D\": \"String\"}, \"que_txt\": \"Which of the following is a wrapper class in Java?\", \"crct_opt\": \"B\"}','java','java'),(26,'{\"options\": {\"A\": \"public\", \"B\": \"private\", \"C\": \"protected\", \"D\": \"All of the above\"}, \"que_txt\": \"Which access modifier allows access to the class members from any other class?\", \"crct_opt\": \"A\"}','java','java'),(27,'{\"options\": {\"A\": \"abstract\", \"B\": \"final\", \"C\": \"static\", \"D\": \"volatile\"}, \"que_txt\": \"Which keyword is used to declare a method that cannot be overridden?\", \"crct_opt\": \"B\"}','java','java'),(28,'{\"options\": {\"A\": \"String\", \"B\": \"string\", \"C\": \"Str\", \"D\": \"None\"}, \"que_txt\": \"What is the correct way to declare a string in Java?\", \"crct_opt\": \"A\"}','java','java'),(29,'{\"options\": {\"A\": \"void main(String[] args)\", \"B\": \"void Main(String[] args)\", \"C\": \"public static void main(String args)\", \"D\": \"public static void main(String[] args)\"}, \"que_txt\": \"What is the correct signature for the main method in Java?\", \"crct_opt\": \"D\"}','java','java'),(30,'{\"options\": {\"A\": \"Yes\", \"B\": \"No\", \"C\": \"Only for objects\", \"D\": \"Only for primitive types\"}, \"que_txt\": \"Can a Java constructor have a return type?\", \"crct_opt\": \"B\"}','java','java'),(31,'{\"options\": {\"A\": \"Exception\", \"B\": \"Try\", \"C\": \"Catch\", \"D\": \"Throw\"}, \"que_txt\": \"Which keyword is used to handle exceptions in Java?\", \"crct_opt\": \"B\"}','java','java'),(32,'{\"options\": {\"A\": \"public\", \"B\": \"private\", \"C\": \"protected\", \"D\": \"All of the above\"}, \"que_txt\": \"Which access modifier restricts access to the same package?\", \"crct_opt\": \"C\"}','java','java'),(33,'{\"options\": {\"A\": \"1\", \"B\": \"0\", \"C\": \"Undefined\", \"D\": \"Error\"}, \"que_txt\": \"What will be the output of the following code: System.out.println(5 / 2);?\", \"crct_opt\": \"B\"}','java','java'),(34,'{\"options\": {\"A\": \"This\", \"B\": \"Super\", \"C\": \"Parent\", \"D\": \"Base\"}, \"que_txt\": \"Which keyword is used to refer to the current class instance in Java?\", \"crct_opt\": \"A\"}','java','java'),(35,'{\"options\": {\"A\": \"sf\", \"B\": \"fs\", \"C\": \"fs\", \"D\": \"fs\"}, \"que_txt\": \"fsd\", \"crct_opt\": \"D\"}','sfd','fsd'),(36,'{\"options\": {\"A\": \"fsd\", \"B\": \"fds\", \"C\": \"sfd\", \"D\": \"sdf\"}, \"que_txt\": \"fsd\", \"crct_opt\": \"A\"}','sfd','fsd'),(37,'{\"options\": {\"A\": \"\", \"B\": \"\", \"C\": \"\", \"D\": \"\"}, \"que_txt\": \"\", \"crct_opt\": \"\"}','sfd','fsd');
/*!40000 ALTER TABLE `test_questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-28  4:19:45
