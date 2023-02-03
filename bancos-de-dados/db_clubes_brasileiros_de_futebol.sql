CREATE DATABASE clubes_brasileiros_de_futebol;

USE clubes_brasileiros_de_futebol;

CREATE TABLE estados (
	id_estado INT AUTO_INCREMENT PRIMARY KEY,
    nome_estado VARCHAR(50) NOT NULL
);

CREATE TABLE clubes (
	id_clube INT AUTO_INCREMENT PRIMARY KEY,
    nome_clube VARCHAR(50) NOT NULL,
	estados_id INT,
    CONSTRAINT FOREIGN KEY (estados_id)
		REFERENCES estados (id_estado)
);

INSERT INTO estados (nome_estado)
VALUES ('São Paulo'), ('Rio de Janeiro'), ('Minas Gerais'), ('Pará'), ('Rondônia');

INSERT INTO clubes (nome_clube, estados_id) 
VALUES ('Corinthians', 1), ('Paysandú', 4), ('Remo', 4), ('Santos', 1), ('Cruzeiro', 3), ('Flamengo', 2), ('Ríver-PI', null); 

SELECT * FROM estados;
SELECT * FROM clubes;

SELECT nome_clube, nome_estado FROM clubes
INNER JOIN estados
ON estados.id_estado = clubes.estados_id;

SELECT nome_clube, nome_estado FROM clubes
INNER JOIN estados
ON estados.id_estado = clubes.estados_id;

SELECT nome_clube, nome_estado FROM clubes
LEFT JOIN estados
ON estados.id_estado = clubes.estados_id;

SELECT nome_clube, nome_estado FROM clubes
RIGHT JOIN estados
ON estados.id_estado = clubes.estados_id;

SELECT nome_clube, nome_estado FROM clubes
LEFT JOIN estados
ON estados.id_estado = clubes.estados_id
UNION
SELECT nome_clube, nome_estado FROM clubes
RIGHT JOIN estados
ON estados.id_estado = clubes.estados_id;