const expressJWT = require('express-jwt')
require('dotenv').config()


exports.requireSignin = expressJWT({
    secret: process.env.JWT,
    algorithms: ["HS256"],
    userProperty: 'auth'
})


