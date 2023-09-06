// entry point: lave en package.json,

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
  { id: 7, name: 'Dhaulagiri', height: 8167 },
  { id: 8, name: 'Manaslu', height: 8163 },
  { id: 9, name: 'Nanga Parbat', height: 8126 },
  { id: 10, name: 'Annapurna', height: 8091 },
  { id: 11, name: 'Gasherbrum I', height: 8080 },
  { id: 12, name: 'Broad Peak', height: 8051 },
  { id: 13, name: 'Gasherbrum II', height: 8035 },
  { id: 14, name: 'Shishapangma', height: 8027 },
  { id: 15, name: 'Gyachung Kang', height: 7952 },
];

// Reusable functions

// Function to find a mountain by ID
const findMountainById = id => {
  return mountains.find(mountain => mountain.id === id);
};

// Function to validate mountain data, obs data = mountain

const validateMountainData = data => {
  // If any of these fields are missing, it returns an object with valid set to false and an error message.
  if (!data || !data.name || !data.height) {
    return { valid: false, error: 'Mountain data must contain name and height fields.' };
  }
  // use the some method to check if any other mountain already has the same name
  if (mountains.some(mountain => mountain.name === data.name)) {
    return { valid: false, error: 'A mountain with the same name already exists.' };
  }
  const height = parseInt(data.height);
  //  If the height is not a positive number or exceeds the height of Mount Everest (8848 meters), it returns an object with valid set to false and an error message.
  if (isNaN(height) || height <= 0 || height > 8848) {
    return { valid: false, error: 'Invalid height. Height must be a positive number less than or equal to 8848.' };
  }
  // If all checks pass, it returns an object with valid set to true.
  return { valid: true };
};

// GET all mountains: /mountains
app.get('/mountains', (req, res) => {
  res.send({ data: mountains });
});

// ---------------------------------------------------------------------------------------

// GET mountain by id
app.get('/mountains/:id', (req, res) => {
  // Convert id to an integer, evt. Number(req.params.id)
  const mountainId = parseInt(req.params.id);

  const mountain = findMountainById(mountainId);

  if (mountain) {
    res.send(mountain);
  } else {
    res.status(404).send(`Mountain no. ${req.params.id} not found. I only have ${mountains.length} mountains in my database`);
  }
});

// ---------------------------------------------------------------------------------------

// Get a new ID for a new mountain (NB! Reuses IDs if you delete the highest ID!)
// Map with ternary operator
function getNextMountainId() {
  // laver en ny liste med kun id´ene fra mountains
  let numbers = mountains.map(mountain => mountain.id);

  // Finder den højeste værdi af numbers
  // spread operator "unpacks" the elements from the list as individual arguments to Math.max().
  // Math.max() compare each ID individually and find the maximum value among them.
  let highestID = Math.max(...numbers); // spread operator

  return highestID + 1;
}

// ---------------------------------------------------------------------------------------

// POST route to create a new mountain
// lave client request i Postman, Express er server
app.post('/mountains', (req, res) => {
  try {
    const newMountain = req.body;

    // Ensure that the request body contains the necessary data (name and height)
    // Checks if the name already exists
    const validation = validateMountainData(newMountain);

    if (!validation.valid) {
      // If the data = not valid --> 400 status response with the corresponding error message.
      res.status(400).json({ error: validation.error });
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

// ---------------------------------------------------------------------------------------
// PATCH = partial updates to an existing resource. Remember PATCH as "Patchwork":

app.patch('/mountains/:id', (req, res) => {
  try {
    const mountainId = parseInt(req.params.id);
    const updatedAttributes = req.body;
    const mountainToUpdate = findMountainById(mountainId);

    if (!mountainToUpdate) {
      res.status(404).json({ error: `Mountain with ID ${mountainId} not found.` });
      return;
    }

    const validation = validateMountainData(mountainToUpdate);
    // const validation = validateMountainData({ ...mountainToUpdate, ...updatedAttributes });

    if (!validation.valid) {
      res.status(400).json({ error: validation.error });
      return;
    }

    // Update the mountain's attributes
    Object.assign(mountainToUpdate, updatedAttributes);

    res.status(200).json(mountainToUpdate);
  } catch (error) {
    console.error('Error updating the mountain:', error);
    res.status(500).json({ error: 'Failed to update the mountain.' });
  }
});

// ---------------------------------------------------------------------------------------

// PUT = expected to send the entire resource, and it will completely replace the existing resource with the new one
// Remember PUT as "Replace"
app.put('/mountains/:id', (req, res) => {
  try {
    const mountainId = parseInt(req.params.id);

    // Find the mountain index with the given ID
    const mountainToUpdate = findMountainById(mountainId);

    if (!mountainToUpdate) {
      res.status(404).json({ error: `Mountain with ID ${mountainId} not found.` });
      return;
    }

    const validation = validateMountainData(mountainToUpdate);
    //  const validation = validateMountainData({ ...mountainToUpdate, ...req.body });

    if (!validation.valid) {
      res.status(400).json({ error: validation.error });
      return;
    }
    // Replace the mountain with new data from the request body
    mountains[mountainToUpdate.id - 1] = { ...req.body, id: mountainId };

    res.status(200).json(mountains[mountainToUpdate.id - 1]);
  } catch (error) {
    console.error('Error updating the mountain:', error);
    res.status(500).json({ error: 'Failed to update the mountain.' });
  }
});

// DELETE
app.delete('/mountains/:id', (req, res) => {
  try {
    const mountainId = parseInt(req.params.id);
    const mountainToDelete = findMountainById(mountainId);

    if (!mountainToDelete) {
      res.status(404).json({ error: `Mountain with ID ${mountainId} not found.` });
      return;
    }
    // Remove an element from the mountains array at a specific index
    // 1 = This argument specifies how many elements to remove from the array starting at the mountainToDelete.
    mountains.splice(mountainToDelete, 1);

    //res.status(204).json({ message: `Mountain with ID ${mountainId} has been successfully deleted.` });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting the mountain:', error);
    res.status(500).json({ error: 'Failed to delete the mountain.' });
  }
});

// ---------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------

const PORT = 8080;
app.listen(PORT, error => {
  if (error) {
    console.log('Error starting the server', error);
    return;
  }
  console.log('Server is running on port', 8080);
});
