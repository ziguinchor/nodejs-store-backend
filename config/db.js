const Sequelize = require('sequelize')

const connection = new Sequelize('postgres','postgres','admin', {
    host:'localhost',
    dialect:'postgres'
})


module.exports = connection

