create database burgers_db;

use burgers_db;

CREATE TABLE `burgers`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NULL,
  `devoured` TINYINT NULL,
  PRIMARY KEY (`id`));

