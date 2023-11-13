const sequelize = require('../../sequelize');
const express = require('express');
const router = express.Router();

// Definición de la ruta para recuperar todos los autores
router.get('/getAllAutores', async (req, res) => {
    try {
      const sql = 'SELECT * FROM autor';
      const todosLosAutores = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT,
      });
  
      res.json(todosLosAutores);
    } catch (error) {
      console.error('Error al recuperar todos los autores:', error);
      res.status(500).send('Error en el servidor');
    }
  });

module.exports = router;

const requestExample = `
method: GET
url: http://localhost:3000/api/getAllAutores
`;