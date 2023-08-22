// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const result1 = parseFloat(numberOne) + parseFloat(numberTwo);
//console.log(result1);


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let result2 = parseFloat(numberOne) + parseFloat(numberTwo);
// Use toFixed to get decimals
result2 = result2.toFixed(2);
//console.log(result2);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

//
// const numbers = [10, 45, 98];
const numbers = [one, two, three];
const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
//console.log(average.toFixed(5));

// Show in the console the avg. with 5 decimals
/* const avg = avg(one + two + three);
console.log(avg);
 */

// --------------------------------------
// Exercise 6 - Get the character by index
// Get me the character "c"

const letters = "abc";

const result3 = letters.charAt(2);
//console.log(result3);

const result4 = letters[2]; //bracket notation (dot notation)
//console.log(result4);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const modifiedFact = fact.replace('javascript', 'JavaScript');
//console.log(modifiedFact);

// --------------------------------------