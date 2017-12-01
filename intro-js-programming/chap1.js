/*
You Don't Know JS by Kyle Simpson
Chapter 1: Into Programming
Challenges
*/

const phone = 129.99
const accessories = 21.00;
const spending_limit = 175;

var bank_balance = 560.90;
var total = 0;

function calculate_tax() {
	total += (total * 0.08);
	return total;
}

function format_amout() {
	return total.toFixed(2);
}

while (total < spending_limit) {
	// can buy a phone
	total = total + phone;
	console.log(1, total);

	// check if can afford accessory
	if (total < spending_limit) {
		total = total + accessories;
		console.log(2, total);
	}
}

total = calculate_tax(total);

total = format_amout(total);

console.log("You spent $" + total + " and you have $" + (bank_balance - total) + " left.");


