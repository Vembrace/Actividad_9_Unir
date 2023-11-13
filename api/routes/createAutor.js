const sequelize = require('../../sequelize');
const express = require('express');
const router = express.Router();

// Definición de la ruta para crear autores
router.post('/createAutor', async (req, res) => {
    const nuevoAutor = req.body; // Datos del nuevo autor enviados en el cuerpo de la solicitud
    const sql = 'INSERT INTO autor (nombre, email, imagen) VALUES (?, ?, ?)';
    sequelize.query(sql, {
      replacements: [nuevoAutor.nombre, nuevoAutor.email, nuevoAutor.imagen],
      type: sequelize.QueryTypes.INSERT,
    })
    .then(([results]) => {
      res.status(201).json({ id: results });
    })
    .catch((error) => {
      console.error('Error al crear un nuevo autor:', error);
      res.status(500).send('Error en el servidor');
    });    
  });

module.exports = router;

//creacion de un Autor
const requestExample = `
method: POST
url: http://localhost:3000/api/createAutor
body en json:{
    "nombre": "Nombre del Autor",
    "email": "correo@ejemplo.com",
    "imagen": "URL de la imagen del autor"
}
`;