const express = require('express');
const app = express();

// endpoint

console.log(__dirname);

// Hele = route
// husk __direname + / før filnavnet, ellers mangler det en trailing stash!
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

// create a route for the page "secondPage.html"

app.get('/second', (req, res) => {
  res.sendFile(__dirname + '/public/secondPage.html');
});

const PORT = 8080;
app.listen(8080, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
