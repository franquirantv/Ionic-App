-- Volcando estructura de base de datos para practica2
CREATE DATABASE IF NOT EXISTS practica2 /*!40100 DEFAULT CHARACTER SET latin1 */;
USE practica2;

-- Volcando estructura para tabla practica2.clientes
CREATE TABLE IF NOT EXISTS clientes(
  id int(11) NOT NULL auto_increment,
  nombre varchar(45) default NULL,
  dni varchar(9) default NULL,
  direccion varchar(45) default NULL,
  poblacion varchar(45) default NULL,
  telefono int(9) default NULL,
  email varchar(45) default NULL,
  PRIMARY KEY  (id)
); 
-- Volcando estructura para tabla practica2.partes
CREATE TABLE IF NOT EXISTS partes(
  id int(11) NOT NULL auto_increment,
  fecha date default NULL,
  hora varchar(5) default '00:00',
  descripcion varchar(45) default NULL,
  incidencia_resuelta boolean default null,
  tiempo_dedicado_en_horas double default NULL,
  PRIMARY KEY  (id)
) ;

INSERT INTO practica2.partes VALUES ('3', '2021-12-12', '19:12', 'descripcion2', true, 0.5);
INSERT INTO practica2.clientes VALUES ('1', 'Fran', '74386110Q', 'Pere Joan Perpinyà', 'Elche', '622247656', 'fqv2@alu.ua.es');

