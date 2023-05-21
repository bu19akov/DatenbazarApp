const connect = require('../../mongo');

module.exports = async (req, res) => {
  try {
    const client = await connect();
    const db = client.db('DatabazarApp');
    const users = db.collection('Credentials');

    const user = await users.findOne({ username: req.query.username });
    
    if (user) {
      res.json({ unique: false });
    } else {
      res.json({ unique: true });
    }
  } catch (err) {
    console.error(`Error occurred while checking username: ${err}`);
    res.status(500).json({ error: 'An error occurred trying to check username' });
  }
};
