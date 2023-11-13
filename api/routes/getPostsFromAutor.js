const sequelize = require('../../sequelize');
const express = require('express');
const router = express.Router();

// Definición de la ruta para recuperar los posts de un autor en concreto con SQL puro
// retorna tanto los datos del post relacionado con el autor, asi como los datos del autor
router.get('/autor/:autor_id/posts', async (req, res) => {
    try {
        const autorId = req.params.autor_id; // Captura el ID del autor de la URL
        const sql = `SELECT p.*, a.nombre AS autor_nombre, a.email AS autor_email, a.imagen AS autor_imagen
                     FROM post AS p
                     INNER JOIN autor AS a ON p.autor_id = a.id
                     WHERE p.autor_id = ?`;
        const postsDelAutor = await sequelize.query(sql, {
            replacements: [autorId],
            type: sequelize.QueryTypes.SELECT,
        });
        res.json(postsDelAutor);
    } catch (error) {
        console.error('Error al recuperar los posts del autor:', error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router

//recuperacion de todos los Posts de un Autor, en este caso ej: 1
const requestExample = `
method: GET
url: http://localhost:3000/api/autor/1/posts
`;