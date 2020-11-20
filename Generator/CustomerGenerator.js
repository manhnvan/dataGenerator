const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');

module.exports.CustomerGenerator = async () => {
	let Customers = [];
	for (let i = 0; i < 100000; i++) {
		Customers.push({
            customerId: i,
            contactFirstName: faker.name.firstName(),
            contactLastName: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode(),
            saleRepEmployeeNumber: faker.random.number(999),
		});
	}
	(async () => {
		const csv = new ObjectsToCsv(Customers);

		// Save to file:
		await csv.toDisk('./Customer.csv', { append: true });

		// Return the CSV file as string:
		console.log('success');
	})();
};