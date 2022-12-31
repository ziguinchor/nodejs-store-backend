const Order = require('../models/order')
const Product = require('../models/product')



// creer une ordre 

exports.createOrder = (req, res) => {

     let { quantity } = req.body

     const product = Product.findByPk(req.params.id)

     Order.create({
       
        quantity: quantity,
        userId: req.auth.id,
        productId: product.id
     })
     .then(order => res.status(200).json({ error: false, order }))
     .catch(err => res.status(400).json({error: true, message: err }))
     
}


// current ordre methode

exports.currentOrder = (req, res) => {

        Order.findAll({
        where: {
            userId: req.auth.id
        }
    })
     .then(order => res.status(200).json({ error: false, order }))
     .catch(err => res.status(400).json({error: true, message: err }))
}


// status of order (active or complete)

exports.statusOrdre = (req, res) => {

     Order.update({
        status: true
     }, {
        where: {
            id: req.params.id
        }
     })
    .then(order => res.status(200).json({ error: false, order }))
    .catch(err => res.status(400).json({ error: true, message: err }))
}

         
