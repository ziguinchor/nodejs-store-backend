const express = require('express')
const router = express.Router()


const { createProduct, getAllProducts, showProduct, getProductsByCategory } = require('../controllers/productController')
const { requireSignin } = require('../midllewares/userAuth')




router.post('/create',[requireSignin],createProduct)
router.get('/all',getAllProducts)
router.get('/:id',showProduct)
router.get('/category',getProductsByCategory)


module.exports = router