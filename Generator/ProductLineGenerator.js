const ProductLine = require('../models/ProductLineSchema');
const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');

const productLineList = [];

module.exports.productLineGenerator = () => {
	for (let i = 0; i < 10000; i++) {
		productLineList.push({
			productLineId: i,
			description: faker.lorem.sentences(),
			image: faker.image.imageUrl()
		});
	}

	(async () => {
		const csv = new ObjectsToCsv(productLineList);

		// Save to file:
		await csv.toDisk('./productLineList.csv');

		// Return the CSV file as string:
		console.log('success');
	})();
};
