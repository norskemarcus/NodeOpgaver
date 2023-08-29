// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console
console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

const marcus = {
  name: "Marcus",
  age: 38,
};

const tommy = {
  name: "Tommy",
  age: 35,
};

const sebastian = {
  name: "Sebastian",
  age: 37,
};

// What a lonely array. Add at least 3 friend objects to it.
friends.push(marcus, tommy, sebastian);
console.log("Friends:", friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value.
// You want to programmatically find where the number 1729 is in the array.

const significantMathNumbers = [0, 2.718, 3.14159, 1729];
console.log(significantMathNumbers.indexOf(1729, 0));

// --------------------------------------
// Exercise 4 - Inserting elements
const diet = ["tomato", "cucumber", "rocket"];
console.log("Before splice", diet);

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

const start = diet.indexOf("cucumber") + 1;

// 0 = I don't want to remove any elements.
let deleteCount = 0;

diet.splice(start, deleteCount, "hamburger, soda, pizza");
console.log("After splice", diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.

diet.pop();
console.log("After pop:", diet);

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.

// JSON.stringify turns an object into a string.
// JSON.parse turns a string into an object.
// Combining them can turn an object into a string, and then reverse the process to create a brand new data structure.
// This one safely copies deeply nested objects/arrays!

const dinnerTray = JSON.parse(JSON.stringify(diet));
console.log("DinnerTray", dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
// the loop starts from index i = 1  (which corresponds to "b") and iterates by increments of 2

for (let i = 1; i < lettersExpanded.length; i += 2) {
  console.log(lettersExpanded[i]);
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 6 || numbers[i] < 0) {
    console.log(numbers[i]);
  } else {
    discardedNumbers.push(numbers[i]);
  }
}
console.log("Discarded numbers:", discardedNumbers);

// --------------------------------------
