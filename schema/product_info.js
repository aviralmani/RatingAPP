const mongoose = require('mongoose');
let schema = mongoose.Schema;

let productInfoSchema = new schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true
    },
    }
);
const ProductInfo = mongoose.model('productInfo', productInfoSchema);
module.exports = ProductInfo