const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
	checkNumber: String,
	paymentDate: Date,
	amount: Number
});

module.exports = mongoose.model('payment', PaymentSchema);
