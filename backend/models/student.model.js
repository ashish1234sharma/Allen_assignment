const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    
    branch: {
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    Fees:{
        type:String,
        required:true
    }
   

}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Student', studentSchema);