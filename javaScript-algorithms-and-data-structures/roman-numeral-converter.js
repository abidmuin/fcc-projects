/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

Convert the given number into a roman numeral.

Roman numerals	Arabic numerals

M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
	let result = "";
	let counter = 0;

	if (num > 999) {
		//	Integer division in JS => https://stackoverflow.com/a/4228528
		counter = ~~(num / 1000);
		while (counter--) {
			result += "M";
		}
		num %= 1000;
	}
	if (num > 899) {
		result += "CM";
		num %= 900;
	}
	if (num > 499) {
		result += "D";
		num %= 500;
	}
	if (num > 399) {
		result += "CD";
		num %= 400;
	}
	if (num > 99) {
		counter = ~~(num / 100);
		while (counter--) {
			result += "C";
		}
		num %= 100;
	}
	if (num > 89) {
		result += "XC";
		num %= 90;
	}
	if (num > 49) {
		result += "L";
		num %= 50;
	}
	if (num > 39) {
		result += "XL";
		num %= 40;
	}
	if (num > 9) {
		counter = ~~(num / 10);
		while (counter--) {
			result += "X";
		}
		num %= 10;
	}
	if (num > 8) {
		result += "IX";
		num %= 9;
	}
	if (num > 4) {
		result += "V";
		num %= 5;
	}
	if (num > 3) {
		result += "IV";
		num %= 4;
	}
	if (num > 0) {
		while (num--) {
			result += "I";
		}
	}

	return result;
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));