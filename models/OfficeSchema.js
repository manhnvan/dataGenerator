const mongoose = require('mongoose')

const officeSchema = mongoose.Schema({
    city: String,
    phone: String,
    address: String,
    postalCode: String,
    territory: String
})

module.exports = mongoose.model('office', officeSchema);