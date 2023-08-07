const Sequelize = require('sequelize');
require('dotenv').config()


const connection = new Sequelize(process.env.db, process.env.user, process.env.password, {
    'host': process.env.host,
    'dialect': 'mysql'
})






module.exports = { connection };