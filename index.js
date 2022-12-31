const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connection = require('./config/db')



// middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())


// Models
const User = require('./models/user')
const Product = require('./models/product')
const Order = require('./models/order') 

// routes
const products = require('./routes/products')
app.use('/api/products',products)

const users = require('./routes/users')
app.use('/api/users',users)

const orders = require('./routes/orders')
app.use('/api/orders',orders)


Product.hasOne(Order, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Order.belongsTo(Product)

User.hasMany(Order, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Order.belongsTo(User)


// connection database postgre
connection.sync()
          .then(() => console.log('database connected ...'))
          .catch(err => console.log(err))






// port
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server started to port ${port} ...`))