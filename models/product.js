const Sequelize = require('sequelize')
const connection = require('../config/db')


const product = connection.define('product', {

     id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     name: {
        type: Sequelize.STRING,
        allowNull: false
     },
     price: {
        type: Sequelize.DECIMAL,
        allowNull: false
     },
     category: {
        type: Sequelize.STRING
     },
     
},{ timestamps: true})

module.exports = product