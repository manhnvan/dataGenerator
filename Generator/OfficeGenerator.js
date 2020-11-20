const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');

module.exports.OfficeGenerator = async () => {
	let OfficeInfo = [];
	for (let i = 0; i < 10; i++) {
		OfficeInfo.push({
            officeId: i, 
			city: faker.address.city(),
			phone: faker.phone.phoneNumber(),
			address: faker.address.streetAddress(),
			postalCode: faker.address.zipCode()
		});
	}
	(async () => {
		const csv = new ObjectsToCsv(OfficeInfo);

		// Save to file:
		await csv.toDisk('./Office.csv', { append: true });

		// Return the CSV file as string:
		console.log('success');
	})();
};
