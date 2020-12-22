const mongoose = require('mongoose');
const Schema = mongoose.Schema

let User = new Schema({
    
    user_name: {
        type: String,
        required: true,
        unique: 1
    },
    user_password: {
        type: String,
        required: true,
    },
    user_role: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    userDetails : { type: Schema.Types.ObjectId, ref: 'UserDetails', unique: 1 },
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);