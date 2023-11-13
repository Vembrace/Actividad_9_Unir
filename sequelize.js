const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'blog',
  port: 3306,
  define: {
    // Set freezeTableName to true to use singular table names
    freezeTableName: true,
  },
});

module.exports = sequelize;