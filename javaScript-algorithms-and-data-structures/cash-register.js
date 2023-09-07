/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
	const currencyUnits = [
		["PENNY", 1],
		["NICKEL", 5],
		["DIME", 10],
		["QUARTER", 25],
		["ONE", 100],
		["FIVE", 500],
		["TEN", 1000],
		["TWENTY", 2000],
		["ONE HUNDRED", 10000]
	];

	let totalCashInDrawer = 0;
	
	for (const [unit, amount] of cid) {
		totalCashInDrawer += amount * 100; // Convert to cents
	}

	let changeDue = (cash - price) * 100; // Convert to cents
	let changeArr = [];

	if (changeDue > totalCashInDrawer) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	} else if (changeDue === totalCashInDrawer) {
		return { status: "CLOSED", change: cid };
	} else {
		for (let i = currencyUnits.length - 1; i >= 0; i--) {
			const [unit, value] = currencyUnits[i];
			const availableAmount = cid[i][1] * 100; // Convert to cents
			const maxToUse = Math.floor(availableAmount / value) * value;

			if (changeDue >= value) {
				let usedAmount = 0;
				while (changeDue >= value && usedAmount < maxToUse) {
					changeDue -= value;
					usedAmount += value;
				}

				changeArr.push([unit, usedAmount / 100]); // Convert back to dollars
				cid[i][1] -= usedAmount / 100; // Update available amount in drawer
			}
		}
	}

	if (changeDue > 0) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}

	return { status: "OPEN", change: changeArr };
}

const result = checkCashRegister(19.5, 20, [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100]
]);

console.log(result);
