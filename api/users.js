// api/users.js
const connect = require('../mongo');

module.exports = async (req, res) => {
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
};
