const mongoose = require('mongoose');
const Schema = mongoose.Schema
const User = require('./userModel');

let UserDetails = new Schema({
    
    first_name: {
        type: String,
        required: true,
       // unique: 1
    },
    last_name: {
        type: String,
        required: true,
    },
    telephone_no: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    SSN_no: {
        type: String,
        required: true,
    },
   
    user : { type: Schema.Types.ObjectId, ref: 'User', unique: 1 },
    
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserDetails', UserDetails);