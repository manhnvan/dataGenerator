const { productLineGenerator } = require('./Generator/ProductLineGenerator');
const { ProductGenerator } = require('./Generator/ProductGenerator');
const { OfficeGenerator } = require('./Generator/OfficeGenerator');
const { EmployeeGenerator } = require('./Generator/EmployeeGenerator');
const { CustomerGenerator } = require('./Generator/CustomerGenerator');
const { OrderGnerator } = require('./Generator/OrderGenerator');
const {PaymentGenerator} = require('./Generator/PaymentGenerator')
const {OrderGneratorForMysql} = require('./Generator/OrderForMysql')
const {OrderDetailGneratorForMysql} = require('./Generator/OrderDetailGenForMysql')

// productLineGenerator()
// ProductGenerator();
// OfficeGenerator();
// EmployeeGenerator();
// CustomerGenerator()
// OrderGnerator();
// PaymentGenerator()
// OrderGneratorForMysql();
OrderDetailGneratorForMysql()
