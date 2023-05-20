const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vovabulgakov00:7IJ0B4VfEE1XVNMn@cluster0.aiux5xb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect() {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully pinged your request.");
  return client;
}

module.exports = connect;
