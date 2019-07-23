const mongoose = require('mongoose');
let schema = mongoose.Schema;
const uuid = require('uuid');

let purchaseInfo = new schema({
    purchaseId: {
        type: String,
        required: true,
        unique: true
    },
    productId: {
        type: String,
        required: true,
        // unique: true
    },
    purchaseDate : {    
        type: Date, 
        default: Date.now 
    },
    userId: {
        type: Date, 
        default: Date.now
    },
    Rating: {
        type: Number,
        required: true,
        default: 0,
        max:5
    }
});

module.exports = mongoose.model('purchaseInfo', purchaseInfo);