const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        milenght: [5, 'minimum Username lenght is 5'],
        maxleght: [16, 'maximum Username lenght is 16'],
        unique: true,
        required: [true, 'please enter a Username'],
        lowercase: true
    
    },
    
    
    email: {
        type: String,
        unique: true,
        required: [true, 'the email field is required'],
        lowercase: true
    },
    
    password: {
        type: String,
        milenght: 8,
        required: true
    },
    
    password: {
        type: String,
        minlenght: 8,
        required: [true, 'you must enter a password']
    }

})






const user = mongoose.model('user', userSchema)

module.exports = user
