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
	const valueMapping = {
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 4,
		"I": 1
	}

	let result = "";
	const romansNumeral = Object.keys(valueMapping);

	for (const index in romansNumeral) {
		const val = valueMapping[romansNumeral[index]];

		while (num >= val) {
			num -= val;
			result += romansNumeral[index];
		}
	}

	return result;
}

convertToRoman(36);