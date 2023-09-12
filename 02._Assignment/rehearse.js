//-->  OBS: Her har jeg øvet på forskellige måder at finde highestID

// Almindelig for loop
function getNextMountainWithForLoop() {
  let highestID = -1;

  for (let i = 0; i < mountains.length; i++) {
    const mountain = mountains[i];

    if (mountain.id > highestID) {
      highestID = mountain.id;
    }
  }
  return highestID + 1;
}

// For loop med "of"
function getNextMountainIdWithOf() {
  let highestID = -1;

  for (const mountain of mountains) {
    if (mountain.id > highestID) {
      highestID = mountain.id;
    }
  }
  return highestID + 1;
}

// forEach med en arrow function
function getNextMountainIdWithForEach() {
  let highestID = -1;

  mountains.forEach(mountain => {
    if (mountain.id > highestID) {
      highestID = mountain.id;
    }
  });
  return highestID + 1;
}

// Reduce med if-sætning, highestID = accumulator, begynder på -1
function getNextMountainIdWithReduce() {
  const max = mountains.reduce((highestID, mountain) => {
    if (mountain.id > highestID) {
      return mountain.id;
    } else {
      return highestID;
    }
  }, -1);

  return max + 1;
}

// Reduce with ternary opreator
function getNextMountainIdWithReduceAndTernary() {
  return mountains.reduce((highestID, mountain) => (mountain.id > highestID ? mountain.id : highestID), -1) + 1;
  // finding the maximum (highest) ID value currently present in the existing mountains list and then incrementing it by one to create a new, unique ID.
  // OBS denne giver ikke en unik ID hvis man slætter den højeste ID!!
}

// Map with ternary operator
function getNextMountainId() {
  // laver en ny liste med kun id´ene fra mountains
  let numbers = mountains.map(mountain => mountain.id);

  // Finder den højeste værdi af numbers
  // ... = spread operator, which "unpacks" the elements from the list as individual arguments to Math.max().
  // Math.max() compare each ID individually and find the maximum value among them.
  let highestID = Math.max(...numbers); // spread operator

  return highestID + 1;
}

// : The map function is used to transform each element of an array and create a new array with the transformed values. It takes a callback function as an argument, which is applied to each element in the original array.

// Exercise 1: map
//Given an array of numbers, use map to square each number and create a new array with the squared values.

const numbers = [1, 2, 3, 4];
squareValues = numbers.map(number => number * number);
console.log(squareValues);

// Use this 'strings' array to create a new array containing the lengths of each string.
const fruits = ['apple', 'banana', 'cherry', 'date']; // Lenght of string [ 5, 6, 6, 4 ]
const lengthOfString = fruits.map(fruit => fruit.length);
console.log('Lenght of string', lengthOfString);

// filter: The filter function is used to create a new array containing only the elements that meet a specific condition. It also takes a callback function as an argument, which should return true for elements that should be included in the new array.

// Exercise 2: filter
// Given an array of names, use filter to create a new array containing only names that start with the letter 'A'.

names = ['Andersine', 'Anders', 'Rip', 'Dolly'];
namesWithA = names.filter(names => names[0] === 'A');
console.log(namesWithA);

// eller
namesWithAFirst = names.filter(names => names.startsWith('A'));
console.log(namesWithAFirst);

// Use this 'products' array to filter out products that are out of stock.
const products = [
  { name: 'TV', inStock: true },
  { name: 'Støvsuger', inStock: false },
  { name: 'Kaffemaskine', inStock: true },
];

outOfStock = products.filter(product => product.inStock === false);
console.log('Out of stock', outOfStock);

// Use this 'numbers' array to check if all numbers are even.
const numbersEven = [2, 4, 6, 8, 10];
console.log(
  'Even numbers:',
  numbersEven.filter(number => number % 2 == 0),
);

//find: The find function is used to find the first element in an array that satisfies a specified condition. It returns the first matching element or undefined if no match is found. Like the others, it takes a callback function.

// Excercise 3: find
// Given an array of objects representing people, use find to find the FIRST person with a specific age.

listOfPeople = [
  { name: 'Marcus', age: 38 },
  { name: 'Hjalte', age: 5 },
  { name: 'Anni', age: 74 },
];
const kid = listOfPeople.find(person => person.age < 10);
console.log('Find kid under 10', kid);

// Can I use find to find ALL persons with a age over 10? NO
// Then you should use FILTER instead!
const adults = listOfPeople.filter(person => person.age >= 10);
console.log(adults);

// Make this a function
function filterByAge(list, age) {
  human = list.filter(person => person.age >= age);
  return human;
}

console.log('Function with filter', filterByAge(listOfPeople, 10));

// Sort: The sort function is used to arrange the elements of an array in a specific order, either ascending or descending. It can optionally take a comparison function to define the sorting criteria.

// Exercise 4
// Given an array of numbers, use sort to arrange them in ascending order.

const numbers2 = [100, 20, 30, 4];

sortedNumbers = numbers2.sort((a, b) => a - b); // ascending order
console.log(sortedNumbers);

sortedNumbers2 = numbers2.sort(); // descending order = default
console.log(sortedNumbers2);

sortedNumbers3 = numbers2.sort((a, b) => b - a); // descending order
console.log(sortedNumbers3);

// Reduce

const numbersList = [1, 3, 7, 2, 9, -5];
// Use this 'numbers' array to find the sum of all positive numbers.
const positiveNumbers = numbersList.reduce((sum, number) => {
  if (number > 0) {
    return sum + number;
  }
  return sum;
}, 0);

console.log('Only positive numbers:', positiveNumbers);

// Use this 'words' array to find the word with the longest length.
const words = ['apple', 'banana', 'cherry', 'date'];
