const express = require('express');
const app = express();
app.use(express.static('public')); // Serve static files from the 'public' folder

// Hele = route
// husk __direname + / før filnavnet, ellers mangler det en trailing stash!
// serve html express with express, man sender html til klienten
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// create a route for the page "secondPage.html"
app.get('/second', (req, res) => {
  res.sendFile(__dirname + '/public/secondPage.html');
});

// = Server, sender respons
/* app.get('/welcomeMessage', (req, res) => {
  const clientName = req.query.user;
  if (!clientName) {
    res.send({ data: 'Hello stranger' });
  } else {
    res.send({ data: `Welcome to my fancy website, ${clientName}` });
  }
});
 */
/* 
app.get('/time', (req, res) => {
  const clientName = req.query.user;
  if (!clientName) {
    res.send({ data: 'Hello stranger' });
  } else {
    res.send({ data: `Welcome to my fancy website, ${clientName}` });
  }
});
 */
const PORT = 8080;
app.listen(8080, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
