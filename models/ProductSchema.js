const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	productName: String,
	productLine: mongoose.Schema.Types.ObjectId,
	productVendor: String,
	productDescription: String,
	quantityInStock: Number,
	buyPrice: Number
});

module.exports = mongoose.model('product', productSchema);
