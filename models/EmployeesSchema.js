const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
	lastName: String,
	firstName: String,
	extersion: String,
	email: String,
	officeCode: mongoose.Schema.Types.ObjectId,
	jobTitle: String
});

module.exports = mongoose.model('employee', EmployeeSchema);
