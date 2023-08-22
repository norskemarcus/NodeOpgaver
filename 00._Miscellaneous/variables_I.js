// Use const whenehver possible
const scheduledBreakTime = "09:27";
let consoleLogCounter = 0;

// let can be changed

// Use comma in console log, undgå type coercion!
console.log("Let's take a break at:", scheduledBreakTime);
consoleLogCounter++;

// The 3 ways to make strings

console.log ("This is the first way");
console.log ('This is the second way');

// backtexkts, multi line litteral?
console.log(`This is the ${1+2} way: I can write both ´´´and "" "" ${scheduledBreakTime} 

with som air between`);

consoleLogCounter += 3;

console.log(consoleLogCounter);






