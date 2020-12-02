const mongoose = require ('mongoose');




const authorSchema = new mongoose.Schema({
    authorname: {type: String, minlength:8 },
    title: {type: String},
    pages: {type: Number},
    likes: {type: Number},
    isbn:  {type: Number},
})