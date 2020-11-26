const faker = require('faker');
const fs = require('fs');
const { Parser, transforms: { unwind } } = require('json2csv');

module.exports.OrderGneratorForMysql = async () => {
	var i, j, k;
	var filePath = 3;
	for (k = filePath * 4 - 4; k < filePath * 4; k++) {
		var num = k;
		var start = num * 20;
		var end = start + 20;
		for (j = start; j < end; j++) {
			const order = [];
			for (i = 0; i < 50000; i++) {
				order.push({
					orderId: j * 50000 + i,
					orderDate: faker.date.past(2019),
					requiredDate: faker.date.past(2019),
					shippedDate: faker.date.past(2019),
					status: 'Shipped',
					customerId: faker.random.number(99999)
				});
			}

			const fields = [ 'orderId', 'orderDate', 'requiredDate', 'shippedDate', 'status', 'customerId' ];
			const json2csvParser = new Parser({ fields });
			const csv = json2csvParser.parse(order);
			fs.appendFileSync('OrderForMysql' + filePath + '.csv', csv);
		}
	}
};
