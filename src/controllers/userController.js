const User = require('../models/userModel')
const user = require('../models/userModels')
const { create } = require('../models/userModels')

function handleError(error){
    let err = { username: '', email: '', password: ''}

    if (error.message === 'incorrect username'){
        err.username = 'that username does not exit'
    }

    if(error.message === 'incorrect email')
        err.email = 'that email is not valid'
}

    if(error.message === 'incorrect password'){
        err.password = 'the password is incorrect'
    }

    if(error.code === 11000){
        err.email = 'that email is registered already'
    }

    if(error.code === 11000){
        err.email = 'that email is registered already'
    }

    if(error.message.include('user validation')){
        Object.values(errors.errors)forEach(({ properties })) => {
            err.properties.path = properties.message
        })

    }

    return warning

const userCtrl = {}

// create = POST method
userCtrl.createUser = async (req,res) => {
    try{
        let newUser = User(req.body)
        let result = await newUser.save()
        res.status(200).send({message: 'your account has been created successfully', result})

    }catch( error ){
        const warnings = handleError(error)
        res.status(400).json({warnings})
    }

}

userCtrl.getUserDetails = async (req, res) => {
    try{
        let person = await User.find({ username: req.body.username})
        if(!person){
            res.status(400).send({message: 'user does not exits on earth'})
        } catch (error) {
            const warnings = 

        }
    }
}

userCtrl.updateUser = async (req, res) => { 
    const {username,email, password} = req.body 

    try {
        let person = await  User.findOneAndUpdate(
            { id: req.params.id},
            {username,email, password}
        )
        res.status(200).send({message: 'user updated successfully', user})
    } catch (error) {
        
    }
}

userCtrl.deleteUser = async (req,res) => {
    try {
         await User.findOneAndUpdate({_id: req.params.id})
        res.status(200).send({message: 'User deleted successfully'})
    } catch (error) {
        console.log(error) 
    }
}
module.exports = userCtrl