const mongoose = require('mongoose');

const CustomerShema = mongoose.Schema({
	customerName: String,
	contactFirstName: String,
	contactLastName: String,
	phone: String,
	address: String,
	city: String,
	zipCode: String,
	saleRepEmployeeNumber: mongoose.Schema.Types.ObjectId,
	payment: [ mongoose.Schema.Types.ObjectId ],
	orders: [ mongoose.Schema.Types.ObjectId ]
});

module.exports = mongoose.model('customers', CustomerShema);
