const Sequelize = require('sequelize')
const connection = require('../config/db')



const order = connection.define('order', {

    id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    quantity: {
       type: Sequelize.DOUBLE,
       allowNull: false
    },
    status: {
       type: Sequelize.BOOLEAN,
       defaultValue: false
    },
    
},{ timestamps: true})

module.exports = order
