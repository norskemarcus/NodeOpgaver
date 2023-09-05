// loop metoder
// forEach, map, filter, find, sort, reduce (helst ikke bruge forEach!)

// map laver en ny liste, forEach looper iterer elementer

// funktionel programmering, mange nested funktioner, en sekvens af funktioner med ett argument, currying. partial application. Haskell Curry
// side effect, undgå: skaber problemer. code smell: ting man skal undgå. Martin Fowler
// undgå variabler udenfor funktioner!

const trolls = [
  { name: 'anonymous', trollLevel: 8 },
  { name: 'krollebolle', trollLevel: 22 },
  { name: 'krølleline', trollLevel: 26 },
];

// Add 5 troll levels to all the trolls
// returnerer et objekt med et ekstra set paranteser
const upgradedTrolls = trolls.map(troll => ({
  ...troll,
  trollLevel: troll.trollLevel + 5,
}));

console.log(upgradedTrolls);

// trolls.map((element, index, array) => console.log())
// default er at benytte map!
// OBS sideeffect: trolls kan blive påvirket fra et andet sted!

// Ikke genbruge trolls, det første arrayet, pga side effects! kun når det er objekter og ikke bare tal
const upgradedTrolls2 = trolls.map(troll => {
  return (troll.trollLevel += 5);
});

console.log(upgradedTrolls2);

// task 2: Create a list of trolls where the troll level is an odd number, strict equal ===

const oddNumberedTrolls = upgradedTrolls.filter(troll => troll.trollLevel % 2 === 1);

console.log(oddNumberedTrolls);
