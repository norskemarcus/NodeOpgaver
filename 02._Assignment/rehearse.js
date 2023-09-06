const express = require('express'); // import express

const app = express(); // creates an express application

// body-parser ligger i node_modules, bruge for at parse json
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static('public'));

const mountains = [
  { id: 1, name: 'Mount Everest', height: 8848 },
  { id: 2, name: 'K2', height: 8611 },
  { id: 3, name: 'Kangchenjunga', height: 8586 },
  { id: 4, name: 'Lhotse', height: 8516 },
  { id: 5, name: 'Makalu', height: 8485 },
  { id: 6, name: 'Cho Oyu', height: 8188 },
  { id: 8, name: 'Manaslu', height: 8163 },
  { id: 9, name: 'Nanga Parbat', height: 8126 },
  { id: 10, name: 'Annapurna', height: 8091 },
  { id: 11, name: 'Gasherbrum I', height: 8080 },
  { id: 12, name: 'Broad Peak', height: 8051 },
  { id: 13, name: 'Gasherbrum II', height: 8035 },
  { id: 14, name: 'Shishapangma', height: 8027 },
  { id: 15, name: 'Gyachung Kang', height: 7952 },
  { id: 7, name: 'Dhaulagiri', height: 8167 },
];

// GET all mountains: /mountains
app.get('/mountains', (req, res) => {
  res.send({ data: mountains });
});

// GET mountain by id
app.get('/mountains/:id', (req, res) => {
  // Convert id to an integer, evt. Number(req.params.id)
  const mountainId = parseInt(req.params.id);

  const mountain = mountains.find(mountain => mountain.id === mountainId);

  if (mountain) {
    res.send(mountain);
  } else {
    res.status(404).send(`Mountain no. ${req.params.id} not found. I only have ${mountains.length} mountains in my database`);
  }
});

//-->  OBS: Her har jeg øvet på forskellige måder at finde highestID

// Almindelig for loop
function getNextMountainWithForLoop() {
  let highestID = -1;

  for (let i = 0; i < mountains.length; i++) {
    const mountain = mountains[i];

    if (mountain.id > highestID) {
      highestID = mountain.id;
    }
  }
  return highestID + 1;
}

// For loop med "of"
function getNextMountainIdWithOf() {
  let highestID = -1;

  for (const mountain of mountains) {
    if (mountain.id > highestID) {
      highestID = mountain.id;
    }
  }
  return highestID + 1;
}

// forEach med en arrow function
function getNextMountainIdWithForEach() {
  let highestID = -1;

  mountains.forEach(mountain => {
    if (mountain.id > highestID) {
      highestID = mountain.id;
    }
  });
  return highestID + 1;
}

// Reduce med if-sætning, highestID = accumulator, begynder på -1
function getNextMountainIdWithReduce() {
  const max = mountains.reduce((highestID, mountain) => {
    if (mountain.id > highestID) {
      return mountain.id;
    } else {
      return highestID;
    }
  }, -1);

  return max + 1;
}

// Reduce with ternary opreator
function getNextMountainIdWithReduceAndTernary() {
  return mountains.reduce((highestID, mountain) => (mountain.id > highestID ? mountain.id : highestID), -1) + 1;
  // finding the maximum (highest) ID value currently present in the existing mountains list and then incrementing it by one to create a new, unique ID.
  // OBS denne giver ikke en unik ID hvis man slætter den højeste ID!!
}

// Map with ternary operator
function getNextMountainId() {
  // laver en ny liste med kun id´ene fra mountains
  let numbers = mountains.map(mountain => mountain.id);

  // Finder den højeste værdi af numbers
  // ... = spread operator, which "unpacks" the elements from the list as individual arguments to Math.max().
  // Math.max() compare each ID individually and find the maximum value among them.
  let highestID = Math.max(...numbers); // spread operator

  return highestID + 1;
}

// POST route to create a new mountain
// lave client request i Postman, Express er server
app.post('/mountains', (req, res) => {
  try {
    const newMountain = req.body;

    // Ensure that the request body contains the necessary data (name and height)
    if (!newMountain || !newMountain.name || !newMountain.height) {
      res.status(400).json({ error: 'Bad request. A mountain should have a name and a height.' });
      return;
    }

    // Check if a mountain with the same name already exists
    const existingMountain = mountains.find(mountain => mountain.name === newMountain.name);

    if (existingMountain) {
      res.status(400).json({
        error: 'A mountain with the same name already exists.',
      });
      return;
    }

    // Give the new mountain an auto-increment ID
    newMountain.id = getNextMountainId();

    // Add the new mountain to your in-memory data store
    mountains.push(newMountain);

    // Return the newly created mountain
    res.status(201).json(newMountain);
  } catch (error) {
    console.error('Error creating a new mountain:', error);
    res.status(500).json({ error: 'Failed to create the mountain.' });
  }
});

// PATCH

// PUT

// Error handling for routes other than /mountains
app.use((req, res) => {
  res.status(404).send(`
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
      <div class="message-container">
        <p>Ain't no mountain high enough to handle that route!<br>
        Check your spelling in the browser or try this route:<br><a href="http://localhost:8080/mountains">localhost:8080/mountains</a></p>
      </div>
    </body>
    </html>
  `);
});

// empty string = falsy
// string + callback

const PORT = 8080;
app.listen(PORT, error => {
  if (error) {
    console.log('Error starting the server', error);
    return;
  }
  console.log('Server is running on port', 8080);
});

// undefined hvis det ikke er en error

//
