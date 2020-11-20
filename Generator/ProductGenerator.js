const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');

module.exports.ProductGenerator = async () => {
	var i, j, k;
	for (k = 19; k < 20; k++) {
		var num = k;
		var start = num * 20;
		var end = start + 20;
		var filePath = num + 1;
		for (j = start; j < end; j++) {
			const productList = [];
			for (i = 0; i < 50000; i++) {
				productList.push({
					productId: j * 50000 + i,
					productName: faker.commerce.productName(),
					productLine: Math.floor(Math.random() * 10000),
					productVendor: faker.company.companyName(),
					productDescription: faker.commerce.productDescription(),
					quantityInStock: faker.random.number(10000),
					buyPrice: faker.commerce.price(10000, 100000000)
				});
			}
			(async () => {
				const csv = new ObjectsToCsv(productList);
				delete productList;

				// Save to file:
				await csv.toDisk('./ProductList' + filePath + '.csv', { append: true });

				// Return the CSV file as string:
				console.log('success');
			})();
		}
	}
};
