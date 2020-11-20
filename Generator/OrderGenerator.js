const faker = require('faker');
const fs = require('fs');
const { Parser, transforms: { unwind }  } = require('json2csv')

module.exports.OrderGnerator = async () => {
	var i, j, k;
	var filePath = 25
	for (k = filePath * 2 - 2; k < filePath * 2; k++) {
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
					customerId: faker.random.number(99999),
					orderDetail: {
						productCode: faker.random.number(20000000),
						quantityOrdered: faker.random.number(100),
						priceEach: faker.commerce.price()
					}
				});
			}

			const fields = [
				'orderId',
				'orderDate',
				'requiredDate',
				'shippedDate',
				'status',
				'customerId',
                'orderDetail.productCode',
                'orderDetail.quantityOrdered',
                'orderDetail.priceEach'
			];
			const transforms = [ unwind({ paths: [ 'orderDetail' ] }) ];
			const json2csvParser = new Parser({ fields, transforms });
			const csv = json2csvParser.parse(order);
			fs.appendFileSync('Order' + filePath + '.csv', csv);

			// converter.json2csv(
			// 	order,
			// 	(err, csv) => {
			// 		if (err) {
			// 			throw err;
			// 		}

			// 		// print CSV string

			// 		// write CSV to a file
			// 		fs.appendFileSync('Order' + filePath + '.csv', csv);
			// 	},
			// 	{ expandArrayObjects: true }
			// );
		}
	}
};
