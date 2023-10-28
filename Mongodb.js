const { MongoClient } = require("mongodb"); //Import the MongoClient from the mongodb package:
//This line imports the MongoClient class from the mongodb package. The MongoClient is used to connect to a MongoDB server

const url = "mongodb://127.0.0.1:27017"; //This line sets the URL for the MongoDB server

const dataBaseName = "Youtube"; //This line defines the name of the MongoDB database that you want to connect to
const client = new MongoClient(url, { useUnifiedTopology: true }); //Here, a new MongoClient instance is created. The url is passed as the connection URL,

async function dbconnect() {
  let result = await client.connect(); //Using await, this line establishes a connection to the MongoDB server defined by the url.

  //This section first accesses the database with the name specified in dataBaseName (in this case, 'Youtube'). Then, it returns the products collection from that database.
  let db = result.db(dataBaseName);
  return db.collection("products");
}
module.exports = dbconnect;



//so This function is assumed to be responsible for connecting to a MongoDB server and returning a collection that you can use to perform database operations.