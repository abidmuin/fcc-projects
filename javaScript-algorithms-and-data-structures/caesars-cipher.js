/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
	let result = "";

	for (const strKey in str) {
		const nonAlphabeticRegex = /[^a-zA-Z]/;
		if (str[strKey].match(nonAlphabeticRegex)) {
			result += str[strKey];
			continue;
		}

		let currentCode = str.charCodeAt(strKey);
		const cipherSteps = 13;

		if ((currentCode - cipherSteps) < 65) {
			currentCode += cipherSteps;
		} else {
			currentCode -= cipherSteps;
		}

		result += String.fromCharCode(currentCode);
	}

	return result;
}

rot13("SERR PBQR PNZC");