// npm install --save-dev jest --> ?
// npm install --save-dev supertest
// Run the tests from other terminal: npx jest
// module.exports = app; // Export the Express app from

const request = require('supertest'); // A library for making HTTP requests in tests
const app = require('./app.js'); // Import your Express app

/* 
PASS  ./api.test.js
  GET /mountains
    √ should return a list of mountains (66 ms)
  GET /mountains/:id
    √ should return a specific mountain by ID (8 ms)
    √ should return a 404 status for a non-existing mountain (7 ms)
  POST /mountains
    √ should create a new mountain (30 ms)
    √ should return a 400 status for invalid data (10 ms)
  DELETE /mountains/:id
    √ should delete an existing mountain (6 ms)
    √ should return a 404 status for deleting a non-existing mountain (5 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.717 s, estimated 2 s
Ran all test suites.. */

// GET /mountains
describe('GET /mountains', () => {
  it('should return a list of mountains', async () => {
    const response = await request(app).get('/mountains');
    expect(response.status).toBe(200);
    expect(response.body.data).toHaveLength(15);
  });
});

// GET /mountains/:id
describe('GET /mountains/:id', () => {
  it('should return a specific mountain by ID', async () => {
    const mountainId = 1;
    const response = await request(app).get(`/mountains/${mountainId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(mountainId);
  });

  it('should return a 404 status for a non-existing mountain', async () => {
    const nonExistingMountainId = 1000;
    const response = await request(app).get(`/mountains/${nonExistingMountainId}`);
    expect(response.status).toBe(404);
  });
});

// POST /mountains
describe('POST /mountains', () => {
  it('should create a new mountain', async () => {
    const newMountain = { name: 'Slættaratindur', height: 880 };
    const response = await request(app).post('/mountains').send(newMountain);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newMountain);
  });

  it('should return a 400 status for invalid data', async () => {
    const invalidMountain = { name: 'Invalid Mountain' }; // Missing height field
    const response = await request(app).post('/mountains').send(invalidMountain);

    expect(response.status).toBe(400);
  });
});

// DELETE /mountains/:id
describe('DELETE /mountains/:id', () => {
  it('should delete an existing mountain', async () => {
    const mountainIdToDelete = 1;
    const response = await request(app).delete(`/mountains/${mountainIdToDelete}`);
    expect(response.status).toBe(204);
  });

  it('should return a 404 status for deleting a non-existing mountain', async () => {
    const nonExistingMountainId = 1000;
    const response = await request(app).delete(`/mountains/${nonExistingMountainId}`);
    expect(response.status).toBe(404);
  });
});
