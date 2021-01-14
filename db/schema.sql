### Schema

DROP DATABASE IF EXISTS b5055f8dmsq78w83;
CREATE DATABASE b5055f8dmsq78w83;
USE b5055f8dmsq78w83;

CREATE TABLE burgers ( 
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAT TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);