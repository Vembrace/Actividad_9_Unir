const sequelize = require('../../sequelize');
const express = require('express');
const router = express.Router();

// Definición de la ruta para recuperar todos los posts
router.get('/getAllPosts', async (req, res) => {
    try {
      const sql = `
        SELECT p.*, a.nombre AS autor_nombre, a.email AS autor_email, a.imagen AS autor_imagen
        FROM post AS p
        INNER JOIN autor AS a ON p.autor_id = a.id`;
      
      const todosLosPosts = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT,
      });
  
      res.json(todosLosPosts);
    } catch (error) {
      console.error('Error al recuperar todos los posts:', error);
      res.status(500).send('Error en el servidor');
    }
  });

module.exports = router;

const requestExample = `
method: GET
url: http://localhost:3000/api/getAllPosts
`;