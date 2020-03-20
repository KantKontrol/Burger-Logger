DROP DATABASE IF EXISTS eatdaburger_db;

CREATE DATABASE eatdaburger_db;
USE eatdaburger_db;


CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN default false,
    primary key(id)
);

insert into burgers (burger_name) values ("Cheeseburger");
insert into burgers (burger_name) values ("Hamburger");
insert into burgers (burger_name) values ("Heart-A-Tack Burger");
