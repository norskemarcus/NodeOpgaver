// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const marcus = {
  name : "Marcus",
  age : 38
}

console.log(marcus);


// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {
  isAllowed : true
};

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 
// remove the property "description" and add a property called "about" that should say "Just a tribute." 

const thisSong = { 
  description: "The best song in the world." 
};

console.log("Before:", thisSong);

// Delete a property
delete thisSong.description;
console.log("After deleted:", thisSong);

// Add a new property
thisSong.about = ("Just a tribute");
console.log("After added a new property:", thisSong);

// --------------------------------------