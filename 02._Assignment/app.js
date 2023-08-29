const express = require("express");
const app = express();
// configure Express to serve static files (to use CSS styling)
app.use(express.static(__dirname));

const mountains = [
  { id: 1, name: "Mount Everest", height: 8848 },
  { id: 2, name: "K2", height: 8611 },
  { id: 3, name: "Kangchenjunga", height: 8586 },
  { id: 4, name: "Lhotse", height: 8516 },
  { id: 5, name: "Makalu", height: 8485 },
  { id: 6, name: "Cho Oyu", height: 8188 },
  { id: 7, name: "Dhaulagiri", height: 8167 },
  { id: 8, name: "Manaslu", height: 8163 },
  { id: 9, name: "Nanga Parbat", height: 8126 },
  { id: 10, name: "Annapurna", height: 8091 },
  { id: 11, name: "Gasherbrum I", height: 8080 },
  { id: 12, name: "Broad Peak", height: 8051 },
  { id: 13, name: "Gasherbrum II", height: 8035 },
  { id: 14, name: "Shishapangma", height: 8027 },
  { id: 15, name: "Gyachung Kang", height: 7952 },
];

// GET all mountains: /mountains
// req = request objects, res = response objects provided by Express to handle incoming request and send a response back to the client
// arrow function that defines the callback function to be executed when a request is made to the specified route
//----------------------------------------------------------------------------
/* 
app.get("/mountains", (req, res) => {
  res.send(mountains);
});
 */
//-----------------------------------------------------------------------------

// GET all mountains with styling
app.get("/mountains", (req, res) => {
  const mountainList = mountains.map((mountain) => `<li><a href="/mountains/${mountain.id}">${mountain.id}. ${mountain.name}: ${mountain.height} m</a></li>`);

  const mountainListHtml = `<ul>${mountainList.join("")}</ul>`;

  res.send(`
  <html>
  <head>
    <link rel="stylesheet" type="text/css" href="/styles.css">
  </head>
  <body>
  <div class="container">
    <div class="mountain-list">
      <h1>The Highest Mountains</h1>
      ${mountainListHtml}
    </div>
    </div>
  </body>
  </html>
`);
});

// GET mountain by id
/* app.get("/mountains/:id", (req, res) => {
  const mountainId = parseInt(req.params.id); // Convert id to an integer
  const mountain = mountains.find((mountain) => mountain.id === mountainId);

  if (mountain) {
    res.send(mountain);
  } else {
    res.status(404).send(`Mountain no. ${req.params.id} not found. I only have ${mountains.length} mountains in my database`);
  }
}); */

// GET mountain by id with styling
app.get("/mountains/:id", (req, res) => {
  const mountainId = parseInt(req.params.id); // Convert id to an integer
  const mountain = mountains.find((mountain) => mountain.id === mountainId);

  if (mountain) {
    res.send(`
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/styles.css">
    </head>
    <body>
      <div class="container">
        <div class="mountain-details">
          <h1>${mountain.name}</h1>
          <p>Id: ${mountain.id}</p>
          <p>Height: ${mountain.height} meters</p>
        </div>
      </div>
    </body>
    </html>
  `);
  } else {
    res.status(404).send(`Mountain no. ${req.params.id} not found. I only have ${mountains.length} mountains in my database`);
  }
});

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

app.listen(8080);
