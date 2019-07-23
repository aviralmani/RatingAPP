const mongoose = require('mongoose');
let schema = mongoose.Schema;

let userInfo = new schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('userInfo', userInfo);