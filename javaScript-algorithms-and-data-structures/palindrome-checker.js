/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/


function palindrome(str) {
	// step-1: remove all non-alphanumeric characters
	// step-2: convert whole string to uppercase / lowercase
	// step-3: check for palindrome

	const non_alphanumeric_regex = /[\W_]+/gi;

	//remove all non-alphanumeric characters
	str = str.replace(non_alphanumeric_regex, '');

	// convert whole string to uppercase / lowercase
	str = str.toLowerCase();

	// check for palindrome
	const stringLength = str.length - 1;

	for (let i = 0; i < stringLength / 2; i++) {
		if (str[i] !== str[stringLength - i]) {
			return false;
		}
	}

	return true;
}

palindrome("eye");