const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const Post = require('./models/Post');
const Autor = require('./models/Autor');

const app = express();
const port = 3000;

const createAutor = require('./api/routes/createAutor');
const createPost = require('./api/routes/createPost');
const getPostsFromAutor = require('./api/routes/getPostsFromAutor');
const getAllPosts = require('./api/routes/getAllPosts');
const getAllAutores = require('./api/routes/getAllAutores');

app.use(bodyParser.json());

app.use('/api', createAutor);
app.use('/api', createPost);
app.use('/api', getPostsFromAutor);
app.use('/api', getAllPosts);
app.use('/api', getAllAutores)

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el server !(');
});

// Otras rutas para actualizar y eliminar posts, y rutas para autores

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Sincroniza la base de datos y crea las tablas si no existen

    app.listen(port, () => {
      console.log(`Servidor Express en ejecución en el puerto ${port}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();