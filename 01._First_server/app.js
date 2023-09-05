// main fil, eller mainApp.js
// import af express
const express = require('express');

//console.log(express); // = hele biblioteket

// instantierer funktionen
const app = express();

// Alt i en linje: (vi plejer ikke at benytte dette!)
//const app = require('express')();

app.use(express.json());

// port, tomcat default server, udviklingsporten for http,
// 80 http
// 443 https
// 8080 http developer port
// 9090 https developer port

const otherData = 123;

app.get('/', (req, res) => {
  res.send({ data: 'This is the first request handler', otherData: otherData });
});

// create a dog endpoint that returns woof
app.get('/dog', (req, res) => {
  res.send({ sound: 'woof' });
});

// get dog by id - obs bruge semikolon :id i stedet for {id} som pathvariabel i spring
app.get('/dog/:id/:someOtherValue', (req, res) => {
  console.log(req.params);
  console.log(req.params.someOtherValue);
  res.send({ dog: 'Voff voff' });
});

// /cat?name=Napster&age=2.5
app.get('/cat', (req, res) => {
  console.log(req.query);
  res.send({ data: req.query });
});

// task: Define a route with the endpoint
/* 
let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
  if (balance < 0) {
    res.send({ message: "You can't withdraw. No more money left." });
  } else if (req.params.withdrawalAmount <= balance) {
    res.send({ message: `You have withdrawn ${req.params.withdrawalAmount}` });
  } else if (req.params.withdrawalAmount > balance) {
    res.send({ message: "You can't withdraw. You don't have that much money" });
  }
}); */

// Man burde ikke kunne skrive bogstaver i browser
let balance = 100;
app.get('/wallet/:withdrawalAmount', (req, res) => {
  const withdrawalAmount = req.params.withdrawalAmount;
  balance -= withdrawalAmount;

  if (balance < 0) {
    balance += withdrawalAmount;
    res.send({ message: "You can't withdraw. No more money left." });
  } else if (req.params.withdrawalAmount <= balance) {
    res.send({ message: `You have withdrawn ${req.params.withdrawalAmount}` });
  } else if (req.params.withdrawalAmount > balance) {
    res.send({ message: "You can't withdraw. You don't have that much money" });
  }
});

app.post('/giveMeTheBody', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// body-parser ligger i node_modules, skal ikke installeres

// skal være i bunden
app.listen(8080); // hang in the terminal, check http://localhost:8080/
