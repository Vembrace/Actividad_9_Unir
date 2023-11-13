--USE mydb;
CREATE TABLE IF NOT EXISTS autor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  imagen VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS post (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  fecha_creacion DATE,
  categoria VARCHAR(100),
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES autors(id)
);