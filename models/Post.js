const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Post = sequelize.define('Post', {
  titulo: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
  fecha_creacion: DataTypes.DATE,
  categoria: DataTypes.STRING,
  autor_id: DataTypes.INTEGER,
  createdAt: {//error oculto de sequelize
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP') // Valor predeterminado: fecha y hora actual
  },
  updatedAt: {//error oculto de sequelize
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP') // Valor predeterminado: fecha y hora actual
  }
});

module.exports = Post;