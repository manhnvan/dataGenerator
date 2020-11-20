const faker = require('faker');
const fs = require('fs');
const { Parser, transforms: { unwind } } = require('json2csv');

module.exports.PaymentGenerator = async () => {
	var i, j, k;
    var filePath = 16;
	for (k = filePath * 2 - 2; k < filePath * 2; k++) {
		var num = k;
		var start = num * 20;
		var end = start + 20;
		for (j = start; j < end; j++) {
			const order = [];
			for (i = 0; i < 50000; i++) {
				order.push({
					customerId: faker.random.number(99999),
					checkNumber: faker.finance.creditCardNumber(),
					paymentDate: faker.date.past(),
					amount: faker.commerce.price()
				});
			}

			const fields = [ 'customerId', 'checkNumber', 'paymentDate', 'amount' ];
			const transforms = [ unwind({ paths: [ 'orderDetail' ] }) ];
			const json2csvParser = new Parser({ fields, transforms });
			const csv = json2csvParser.parse(order);
			fs.appendFileSync('Payment' + filePath + '.csv', csv);
		}
	}
};
