CREATE DATABASE mercado;

USE mercado;

CREATE TABLE produtos
(
	referencia VARCHAR(50) PRIMARY KEY,
	descricao VARCHAR(50) UNIQUE,
	estoque	INT NOT NULL DEFAULT 0
);

INSERT INTO produtos VALUES ('001','Feijão', 10);
INSERT INTO produtos VALUES ('002','Arroz', 5);
INSERT INTO produtos VALUES ('003','Farinha', 15);

SELECT * FROM produtos;

CREATE TABLE itens_venda
(
	venda INT,
	produto	VARCHAR(3),
	quantidade INT
);
drop table itens_venda;

DELIMITER $

CREATE TRIGGER tgr_itens_venda_insert AFTER INSERT
ON itens_venda
FOR EACH ROW
BEGIN
	UPDATE produtos SET estoque = estoque - NEW.quantidade
WHERE referencia = NEW.produto;
END$

CREATE TRIGGER Tgr_itens_venda_delete AFTER DELETE
ON itens_venda
FOR EACH ROW
BEGIN
	UPDATE produtos SET estoque = estoque + OLD.quantidade
WHERE referencia = OLD.produto;
END$

DELIMITER ;

INSERT INTO itens_venda VALUES (1, '001',3);
INSERT INTO itens_venda VALUES (1, '002',1);
INSERT INTO itens_venda VALUES (1, '003',5);

SELECT * FROM itens_venda;

DELETE FROM itens_venda WHERE venda = 1 AND produto = '001';

SELECT * FROM produtos;
