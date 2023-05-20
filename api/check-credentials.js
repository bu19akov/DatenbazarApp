// api/check-credentials.js
const connect = require('../mongo');

module.exports = async (req, res) => {
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
  } catch (err)  {
    console.error(`Error occurred while checking credentials: ${err}`);
    res.status(500).json({ error: 'An error occurred trying to check credentials' });
  }
};
