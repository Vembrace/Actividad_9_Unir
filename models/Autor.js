const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Autor = sequelize.define('Autor', {
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  imagen: DataTypes.STRING,
  createdAt: {//error oculto de sequelize
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP') // Valor predeterminado: fecha y hora actual
  },
  updatedAt: {//error oculto de sequelize
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP') // Valor predeterminado: fecha y hora actual
  }
});

module.exports = Autor;