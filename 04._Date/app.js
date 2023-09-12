const express = require('express');

const app = express();

// Local Time String
console.log(Date());

// UTC
console.log('UTC', new Date());
//
// fra unix, epoch timestamp , 1970, seconds,
console.log(Date.now()); // 1694505469268

// Task: create a route that returns the date
app.get('/date', (req, res) => {
  res.send({ data: new Date() });
});

// task 2: create a route that returns the current month
app.get('/month', (req, res) => {
  const currentMonthName = new Date().toLocaleDateString('en-US', { month: 'long' }); // or short, en-US = default
  res.send({ data: currentMonthName });
});

// kunne også bruge et array over måneder: sebastian sin løsning
/* const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/month2', (req, res) => {
  res, send({ data: monthNames[new Date().getMonth()] });
});

// Daniel
app.get('/month', (req, res) => {
  const date = Date().split(' ');
  res.send({ data: { month: date[1] } });
}); */

// task3: create a route that returns the current day
app.get('/day', (req, res) => {
  const currentDayName = new Date().toLocaleDateString('default', { weekday: 'long' });
  res.send({ data: currentDayName });
});

// ---------------------------------------------------------------------------------------
// = Server, sender respons
app.get('/welcomeMessage', (req, res) => {
  const clientName = req.query.user;
  if (!clientName) {
    res.send({ data: 'Hello stranger' });
  } else {
    res.send({ data: `Welcome to my fancy website, ${clientName}` });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
