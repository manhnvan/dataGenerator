const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');

module.exports.EmployeeGenerator = async () => {
	let Employees = [];
	for (let i = 0; i < 1000; i++) {
		Employees.push({
            staffId: i, 
			lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            email: faker.internet.email(),
            officeCode: faker.random.number(9),
            jobTitle: faker.name.jobTitle()
		});
	}
	(async () => {
		const csv = new ObjectsToCsv(Employees);

		// Save to file:
		await csv.toDisk('./Employee.csv', { append: true });

		// Return the CSV file as string:
		console.log('success');
	})();
};