const faker = require('faker');
const fs = require('fs');
const { Parser, transforms: { unwind } } = require('json2csv');

module.exports.OrderDetailGneratorForMysql = async () => {
	var i, j, k;
	var filePath = 10;
	for (k = filePath * 4 - 4; k < filePath * 4; k++) {
		var num = k;
		var start = num * 20;
		var end = start + 20;
		for (j = start; j < end; j++) {
			const order = [];
			for (i = 0; i < 50000; i++) {
				order.push({
					orderId: faker.random.number(80000000),
					productCode: faker.random.number(20000000),
					quantityOrdered: faker.random.number(100),
					priceEach: parseFloat(faker.commerce.price())
				});
			}

			const fields = [ 'orderId', 'productCode', 'quantityOrdered', 'priceEach' ];
			const json2csvParser = new Parser({ fields });
			const csv = json2csvParser.parse(order);
			fs.appendFileSync('OrderDetailForMysql' + filePath + '.csv', csv);
		}
	}
};
