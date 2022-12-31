const express = require('express')
const router = express.Router()



const { createOrder, currentOrder, statusOrdre } = require('../controllers/orderController')
const { requireSignin } = require('../midllewares/userAuth')


router.post('/create/:id',[requireSignin],createOrder)
router.get('/current',[requireSignin],currentOrder)
router.patch('/complete/:id',[requireSignin],statusOrdre)










module.exports = router