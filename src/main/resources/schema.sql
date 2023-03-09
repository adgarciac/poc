create table pais(
    id varchar(2),
    nombre varchar(50),
    primary key (id)
);

create table personas(
    id int,
    nombres varchar(50),
    apellidos varchar(50),
    pais varchar(50),
    primary key (id)
);

