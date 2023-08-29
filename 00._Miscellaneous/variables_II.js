// strict mode, toppen af fil eller funktioner, kompilerer det i strict mode = højere krav til koden, kræver fx === ?
// ikke bruge keyword som arguments, public (reserved word)
//"use strict";

// total global variabel, kan virke i andre filer! = global scope, deklarerer ikke med const eller let
whatIsThis = "NEVER EVER do this!";
//console.log(whatIsThis);

// Never use var! also global scope. Kan godt ses i legacy systemer

// global scope
function antoherScope() {
  // function scope
}

{
  // block scope
}

// callstack, variabel, memory stack, execution callstack?
{
  //console.log("Hello I am in a block scope");
}

// Svaret er false, fordi den er var! Hvis man skifter ud med let, kan man se at den ikke er highligted
// Obs man kan deklarere 2 gange var. Den andre overskriver den første
// scope er samme js fil
{
  var someVariabel = true;
  {
    var someVariabel = false;
  }
  console.log(someVariabel);
}

{
  let someVariabel2 = true;
  {
    let someVariabel2 = false;
  }
  console.log(someVariabel2);
}

// 1000 milliseconds = 1 sec
// typisk kodeintervju
// Fordi det går 1 sec og det er en var, så når den op til 6 --> løsningen er at gøre det om til en let!
for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    //console.log(i);
  }, 1000);
}

// løsning
for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 1000);
}

// const = man kan ikke redeklarere const (man skal initialisere en const). JA man kan ændre værdier i en const
const konstant = 10;
// konstant = 11;

// Man kan godt ændre værdien (søg mutual, immutable)
const isThisConstant = [];
isThisConstant.push(1, 2, 3);
//console.log(isThisConstant);

const anotherConstant = {};
anotherConstant.valueChange = true;
//console.log(anotherConstant);

// let, man behøver ikke initialisere den
// eksisterer i det samme scope som const, man kan redeklarere og deklarere uden at initialisere
