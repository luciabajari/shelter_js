create schema shelter;


CREATE TABLE `shelter`.`owner` ( 
`id` INT NOT NULL AUTO_INCREMENT ,
`name` VARCHAR(255) NOT NULL , 
`phone_number` VARCHAR(25) NOT NULL ,
 `email` VARCHAR(255) NOT NULL , 
`address` VARCHAR(255) NOT NULL , 
`role` ENUM('ROLE_ADMIN','ROLE_UGYFEL','','') NOT NULL ,
`password` VARCHAR(255) NOT NULL ,
 PRIMARY KEY (`id`)) ENGINE = InnoDB;



CREATE TABLE `shelter`.`animal` 
( `id` INT NOT NULL AUTO_INCREMENT , 
`name` VARCHAR(255) NOT NULL , 
`age` INT NOT NULL , 
`animal_type` ENUM('CAT','DOG','','') NOT NULL , 
`breed` VARCHAR(255) NOT NULL , 
`create_date` DATE NOT NULL , 
`status` ENUM('ADOPTABLE','ADOPTED','HOTEL','HOSPITAL') NOT NULL , 
`description` VARCHAR(255) NOT NULL , 
`get_on_well_with_dogs` BOOLEAN NOT NULL , 
`get_on_well_with_cats` BOOLEAN NOT NULL , 
`get_on_well_with_kids` BOOLEAN NOT NULL , 
`owner_id` INT NOT NULL ,
 PRIMARY KEY (`id`)) ENGINE = InnoDB;
 
 ALTER TABLE `animal` CHANGE `owner_id` `owner_id` INT(11) NULL DEFAULT NULL;
 
CREATE TABLE `shelter`.`hotel` ( 
`id` INT NOT NULL AUTO_INCREMENT , 
`name` VARCHAR(255) NOT NULL , 
`phone_number` VARCHAR(25) NOT NULL , 
`email` VARCHAR(255) NOT NULL , 
`address` VARCHAR(255) NOT NULL , 
PRIMARY KEY (`id`)) ENGINE = InnoDB;
 
CREATE TABLE `shelter`.`hospital` ( 
`id` INT NOT NULL AUTO_INCREMENT , 
`name` VARCHAR(255) NOT NULL , 
`phone_number` VARCHAR(25) NOT NULL , 
`email` VARCHAR(255) NOT NULL , 
`address` VARCHAR(255) NOT NULL ,
 PRIMARY KEY (`id`)) ENGINE = InnoDB;
 
 
 CREATE TABLE `shelter`.`ANIMAL_HOSPITALS` 
 ( `animals_id` INT NOT NULL , 
 `hospitals_id` INT NOT NULL ) 
 ENGINE = InnoDB;
 
 
 
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(1, 'admin', '06305555555', 'email', 'address', 'ROLE_ADMIN', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(2, 'Bela', '06203333333', 'email2', 'address_bela', 'ROLE_ADMIN', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(3, 'Mari', '06200000000', 'email3', 'address_mari', 'ROLE_UGYFEL', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(4, 'Kati', '06704444444', 'email4', 'address_kati', 'ROLE_UGYFEL', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(5, 'Peti', '06204444444', 'email5', 'address_peti', 'ROLE_UGYFEL', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(6, 'Luca', '06307777777', 'email6', 'address_luca', 'ROLE_UGYFEL', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(7, 'Akos', '06700000000', 'email7', 'address_akos', 'ROLE_UGYFEL', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');
INSERT INTO owner (id, name, phone_number, email, address, role, password)
VALUES(8, 'Sara', '06708888888', 'email8', 'address_sara', 'ROLE_UGYFEL', '$2a$10$EhtdTQHe/qsCOzRk0MF09OkE6slGMKxESNGUwDrWejKV2AMur8W7C');

INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(1, 'Pamacs', 2, 2, 'Puli', '2018-10-12 10:10:12', 4, 'Leiras', 1, 0, 1, NULL);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(2, 'Buksi', 1, 2, 'Keverek', '2018-12-05 12:30:00', 1, 'Leiras', 0, 1, 1, 1);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(3,'Molly',5, 2, 'Bullmasztiff', '2018-11-30 10:20:34', 2, 'Leiras', 1, 1, 0, 2);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(4,'Cirmos',5, 1, 'Hazi macska', '2018-08-14 20:20:20', 3, 'Leiras', 1, 1, 1, NULL);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(5,'Tunder',5, 1, 'Perzsa', '2018-09-12 16:42:10', 4, 'Leiras', 1, 1, 0, NULL);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(6,'Max',5, 2, 'Golden retriever',  '2018-10-10 18:12:34', 1, 'Leiras', 0, 1, 1, 3);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(7,'Spike',5, 2, 'Pincser', '2018-07-23 15:53:34', 2, 'Leiras', 1, 0, 1, 4);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(8,'Bobi',5, 2, 'Labrador retriever', '2018-11-12 13:32:23', 3, 'Leiras', 1, 1, 1, 8);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(9,'Missy',5, 2, 'Keverek', '2018-05-10 10:20:10', 4, 'Leiras', 1, 1, 0, NULL);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(10,'Bogyo',5, 1, 'Angora', '2018-06-14 12:43:23', 1, 'Leiras', 0, 1, 1, 5);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(11,'Szaffy',5, 1, 'Brit rövidszoru', '2018-07-11 11:54:32', 2, 'Leiras', 1, 0, 1, 6);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(12,'Lucy',5, 1, 'Keverek', '2018-08-12 11:45:34', 3, 'Leiras', 1, 1, 0, 7);
INSERT INTO animal (id, name, age, animal_type, breed, create_date, status, description, GET_ON_WELL_WITH_DOGS, get_on_well_with_cats, get_on_well_with_kids, owner_id)
VALUES(13,'Cili',5, 1, 'Perzsa', '2018-09-11 20:11:24', 4, 'Leiras', 1, 1, 1, NULL);


INSERT INTO hospital (id,name,phone_number,email,address) VALUES (1,'Accident and emergency','203335681','accAndEm@gmail.com','Accident Address');
INSERT INTO hospital (id,name,phone_number,email,address) VALUES (2,'Cardiology','203311681','cardio88@gmail.com','Cardiology Address');
INSERT INTO hospital (id,name,phone_number,email,address) VALUES (3,'Ear nose and throat','203335681','earNoseThroat@gmail.com','EarNoseAndThroat Address');
INSERT INTO hospital (id,name,phone_number,email,address) VALUES (4,'Haematology','203335681','Haematology@gmail.com','Haematology Address');
INSERT INTO hospital (id,name,phone_number,email,address) VALUES (5,'General surgery','203335681','General@gmail.com','General Address');
INSERT INTO hospital (id,name,phone_number,email,address) VALUES (6,'Neurology','203335681','Neurology@gmail.com','Neurology Address');
INSERT INTO hospital (id,name,phone_number,email,address) VALUES (7,'Oncology','203335681','Oncology@gmail.com','Oncology Address');

INSERT INTO `hotel` (`id`, `name`, `phone_number`, `email`, `address`) VALUES (NULL, 'Shelter Hotel', '20-555-7816', 'shelterHotel13@shelter.com', '1117 Budapest, Pázmány Péter sétány 1/c.')
 