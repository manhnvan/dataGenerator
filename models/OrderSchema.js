const mongoose = require('mongoose');

const orderDetail = mongoose.Schema({
	productCode: String,
	quantityOrdered: Number,
	priceEach: Number
});

const orderSchema = mongoose.Schema({
	orderDate: Date,
	requiredDate: Date,
	shippedDate: Date,
	status: String,
	comment: String,
	customerId: mongoose.Schema.Types.ObjectId,
	orderDetail: [ orderDetail ]
});

module.exports = mongoose.model('order', orderSchema);
