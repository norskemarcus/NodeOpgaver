// hoisting, "bobbler op" - callstack, kan godt deklarere funktionen nedenunder!

console.log(getRandomInt());

function getRandomInt(min, max) {
  // return Math.floor(Math.random() * (max + 1 - min) + min);
}
// hvis man bruger floor skal man have et ekstra tal, fordi den bliver rundet ned
//console.log(Math.floor(Math.random() * 10 + 1));

// anonym funktion, uden navn
const whatIsThis = function (min, max) {
  // return Math.floor(Math.random() * (max + 1 - min) + min);
};

// arrow function, hvis man ikke ønsker return skal curly brackets væk, one line
const getRandomIntArrowFunction = (min, max) => {
  //return Math.floor(Math.random() * (max + 1 - min) + min);
};

// En callback-funktion er en funktion i JavaScript, der defineres separat og derefter overføres som en reference til en anden funktion som et argument.

function genericActionPerformer(genericAction, name) {
  return genericAction(name);
}

// arrow function!
const jump = (name) => `${name} is jumping`;

// Lasse is jumping, jump bliver brugt som en callback funktion!
console.log(genericActionPerformer(jump, "Lasse"));

const run = (name2) => `${name2} is running`;

// "Jonathan is running"
console.log(genericActionPerformer(run, "Jonathan"));

// define run in a different way
function run2(name) {
  return `${name} is running`;
}

console.log(genericActionPerformer(run2, "Jonathan"));

// Desired result is "Daniel is sleeping"
// Create a sleep callback and get the desired result, in a single statement
console.log(genericActionPerformer((name) => `${name} is sleeping`, "Daniel"));
