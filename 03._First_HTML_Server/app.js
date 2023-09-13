const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.static('public')); // Serve static files from the 'public' folder

app.get('/timezones', (req, res) => {
  res.send({ message: 'timeZones' });
  /* try {
    const timeZones = fs.readFileSync('timeZone.json');
    console.log('Success', timeZones);
    res.send(JSON.parse(timeZones)); // hvis ikke parser, kommer det et byte array
  } catch (error) {
    console.log('Cannot read from file', error);
    res.status('500').send({ message: 'Cannot read from file' });
  } */
});

// Hele = route
// husk __direname + / før filnavnet, ellers mangler det en trailing stash!
// serve html express with express, man sender html til klienten
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css');
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

const PORT = 8080;
app.listen(8080, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
