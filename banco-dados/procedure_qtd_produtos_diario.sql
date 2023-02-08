DELIMITER //
CREATE PROCEDURE qtd_diaria_produtos_comprados ()
BEGIN
	SELECT * FROM quantidade_produtos_comprados;
END//
DELIMITER //