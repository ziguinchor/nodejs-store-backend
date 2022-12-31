const Product = require('../models/product')
const Order = require('../models/order')


// creer un produit

exports.createProduct = (req, res) => {
 
    let { name, price, category } = req.body
    
    Product.create({
        name: name,
        price: price,
        category: category
    })
    .then(product => {

        res.status(200).json({ error: false, product })

    })
    .catch(err => res.status(400).json({error: true, message: err }))
    
}

// recuperation la liste des produits

exports.getAllProducts = (req, res) => {

    Product.findAll()
           .then(products => {
              res.status(200).json({ error: false, products })  
           })
           .catch(err => res.status(400).json({error: true, message: err }))
}


// recuperer un produit avec id qui passe par URL

exports.showProduct = (req, res) => {

    Product.findByPk(req.params.id)
           .then(product => {
               res.status(200).json({ error: false, product })
           })
           .catch(err => res.status(404).json({error: true, message: err })) 
}



// recupere les produit par category
exports.getProductsByCategory = (req, res) => {

    Product.findAll({
        where: {
            category: req.body
        }
    })  
           .then(products => {
                res.status(200).json({ error: false, products })  
             })
           .catch(err => res.status(400).json({error: true, message: err }))
}

