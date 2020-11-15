const mongoose = require('mongoose');

const productLineSchema = mongoose.Schema({
	description: String,
	image: String
});

module.exports = mongoose.model('product-line', productLineSchema);
