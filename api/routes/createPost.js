const sequelize = require('../../sequelize');
const express = require('express');
const router = express.Router();

router.post('/createPost', async (req, res) => {
  try {
    const nuevoPost = req.body;
    const sql = 'INSERT INTO post (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)';
    await sequelize.query(sql, {
      replacements: [nuevoPost.titulo, nuevoPost.descripcion, nuevoPost.fecha_creacion, nuevoPost.categoria, nuevoPost.autor_id],
      type: sequelize.QueryTypes.INSERT,
    });

    res.status(201).send('Post creado exitosamente.');
  } catch (error) {
    console.error('Error al crear un nuevo post:', error);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;

//creacion de un Post
const requestExample = `
method: POST
url: http://localhost:3000/api/createPost
body en json: {
    "titulo": "Titulo del post",
    "descripcion": "Contenido del Nuevo Post",
    "fecha_creacion": "2023-10-30",
    "categoria": "Categoría del Nuevo Post",
    "autor_id": 1
}
`;