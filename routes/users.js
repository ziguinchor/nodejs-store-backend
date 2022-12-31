const express = require('express')
const router = express.Router()


const { createUser, getAllUsers, showUser, login, signout } = require('../controllers/userController')
const { requireSignin } = require('../midllewares/userAuth')



router.post('/create',createUser)
router.get('/all',[requireSignin],getAllUsers)
router.get('/:id',[requireSignin],showUser)
router.post('/login',login)
router.get('/signout',signout)




module.exports = router