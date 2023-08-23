// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log('My first name is', firstName, 'and my last name is', lastName);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2
// OBS hvis det er en bogstav midt inde i, dropper den resten af tallet efter.
console.log(number + parseInt(year));

// Hvis man plusser på en bogstav får man "Nan" = Not a number
const result2 = Number(year) + number;

// pluss foran en string, samme som at skrive Number foran
const result3 = +year + number;
console.log(result3);
// --------------------------------------