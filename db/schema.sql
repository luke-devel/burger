create database burgers_db;

use burgers_db;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NULL,
  `devoured` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));

