const Sequelize = require('sequelize')
const sequelize = require('../database')

const user = sequelize.define('User', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  age: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

module.exports = user