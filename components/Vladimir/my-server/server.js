const express = require('express');
const connect = require('../../../mongo');

const app = express();

// Enable parsing of JSON bodies sent in POST requests
app.use(express.json());

// Endpoint for creating a user
app.post('/users', async (req, res) => {
  try {
    const client = await connect();
    const db = client.db('DatabazarApp');
    const users = db.collection('Credentials');
    await users.createIndex({username: 1}, {unique: true});

    const result = await users.insertOne(req.body);
    res.json({ id: result.insertedId });
  } catch (err) {
    console.error(`Error occurred while creating user: ${err}`);
    res.status(500).json({ error: 'An error occurred trying to create user' });
  }
});

// Endpoint for checking if username is unique
app.get('/check-username/:username', async (req, res) => {
  try {
    const client = await connect();
    const db = client.db('DatabazarApp');
    const users = db.collection('Credentials');

    const user = await users.findOne({ username: req.params.username });
    
    if (user) {
      res.json({ unique: false });
    } else {
      res.json({ unique: true });
    }
  } catch (err) {
    console.error(`Error occurred while checking username: ${err}`);
    res.status(500).json({ error: 'An error occurred trying to check username' });
  }
});

// Endpoint for checking if credentials are correct for login
app.post('/check-credentials', async (req, res) => {
  try {
    const client = await connect();
    const db = client.db('DatabazarApp');
    const users = db.collection('Credentials');

    const user = await users.findOne({ username: req.body.username, password: req.body.password }); // find a user with the provided username and password
    
    if (user) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (err) {
    console.error(`Error occurred while checking credentials: ${err}`);
    res.status(500).json({ error: 'An error occurred trying to check credentials' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
