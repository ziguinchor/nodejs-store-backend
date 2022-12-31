const Sequelize = require('sequelize')
const connection = require('../config/db')


const user = connection.define('user', {

     id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     firstName: {
        type: Sequelize.STRING,
        allowNull: false
     },
     lastName: {
        type: Sequelize.STRING,
        allowNull: false
     },
     email: {
      type: Sequelize.STRING,
      allowNull: false
  },
     password: {
        type: Sequelize.STRING
     },
     
},{ timestamps: true})

module.exports = user