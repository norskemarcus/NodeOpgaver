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
