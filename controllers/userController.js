const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



// methode pour creer un user

exports.createUser = async (req, res) => {

     let { firstName, lastName, email, password } = req.body
     
     User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: await bcrypt.hash(password,10)
     })
     .then(user => {
        res.status(200).json({ error: false, user })
     })
     .catch(err => res.status(400).json({error: true, message: err }))
}


// recuperer la liste d'utilisateurs

exports.getAllUsers = (req, res) => {

    User.findAll()
        .then(users => res.status(200).json({ error: false, users }))
        .catch(err => res.status(400).json({error: true, message: err }))
}


// recuperer user par id 
exports.showUser = (req, res) => {

    User.findByPk(req.params.id)
        .then(user => res.status(200).json({ error: false, user }))
        .catch(err => res.status(400).json({error: true, message: err }))
}


// methode pour faire l'authentification 

exports.login = async (req, res) => {

    const { email, password } = req.body

       User.findOne({email})
           .then(user => {

            if(!user) {
                return res.status(400).json({
                    error: 'User not found with this email, Please SignUp!'
                })
            }
           
            const passwordSucess =  bcrypt.compare(password,user.password)

            if(!passwordSucess) {
                return res.status(401).json({
                    error: 'Email and Password dont Match !'
                })
            }
            
            const token = jwt.sign({id: user.id}, process.env.JWT);

            res.cookie('token', token, {expire: new Date() + 8062000})
    
            const { id, firstName, lastName } = user;
    
            return res.json({
                token, user: { id, firstName, lastName }
            })

           })
           .catch(err =>  res.status(400).json({error: true, message: err }))

      }

// methode pour deconnecter votre compte

exports.signout = (req, res) => {

    res.clearCookie('token');

    res.json({
        message: "User Signout"
    })

}
