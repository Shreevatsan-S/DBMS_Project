// const { MongoClient } = require('mongodb');

// // Replace the connection string with your own MongoDB Atlas connection string
// const uri = "mongodb+srv://hrenukunta66:hitesh66@cluster0.pfx1ved.mongodb.net/?retryWrites=true&w=majority";
// // const uri = "mongodb+srv://hrenukunta66:hitesh66@cluster0.pfx1ved.mongodb.net";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Connect to the MongoDB Atlas cluster
// async function run() {
//   try {
//     await client.connect();
//     console.log('Connected to the database');

//     // Run your MongoDB shell command here
//     const database = client.db('courierDB');
//     // Replace the string with your own MongoDB shell command
//     const commandResult = await database.command({ "db.collection.find()": 1 });
//     console.log('Command executed:', commandResult);

//   } finally {
//     // Close the connection to the MongoDB Atlas cluster
//     await client.close();
//   }
// }

// run().catch(console.dir);

const { MongoClient } = require('mongodb');

// Replace the connection string with your own MongoDB Atlas connection string
const uri = "mongodb+srv://hrenukunta66:hitesh66@cluster0.pfx1ved.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB Atlas cluster
async function run() {
  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db('courierDB');
    const collection = database.collection('places'); // Specify your collection name here

    // Replace the string with your own MongoDB shell command
    // const mongoShellCommand = 'db.collection.find()'; // Replace with your own MongoDB shell command

    // Parsing the collection name from the shell command
    // const collectionName = mongoShellCommand.split('.')[1];
    // const collection = database.collection(collectionName);

    // Execute the MongoDB shell command on the specified collection
    // Example: find all documents in the collection
    const query = {}; // you can replace this with your own query
    const documents = await collection.find(query).toArray();
    console.log('Documents in the collection:', documents);

  } finally {
    // Close the connection to the MongoDB Atlas cluster
    await client.close();
  }
}

run().catch(console.dir);


// const { MongoClient } = require('mongodb');

// // Connection URI
// const uri = "mongodb+srv://hrenukunta66:hitesh66@cluster0.pfx1ved.mongodb.net/?retryWrites=true&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Get a reference to the database
//     const database = client.db('courierDB');

//     // Define the command string
//     const commandString = 'db.orders.find()';

//     // Execute the command using eval
//     const result = await database.command({ eval: commandString });


//     // Show the result
//     console.log(result);
//   } finally {
//     // Close the connection
//     await client.close();
//   }
// }

// run().catch(console.dir);


// const { MongoClient } = require('mongodb-runner');

// // Connection URI
// const uri = "mongodb+srv://hrenukunta66:hitesh66@cluster0.pfx1ved.mongodb.net/?retryWrites=true&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Get a reference to the database
//     const database = client.db('courierDB');

//     // Define the command string
//     const commandString = 'db.orders.find()';

//     // Execute the command using eval
//     const result = await database.execute(commandString);

//     // Show the result
//     console.log(result);
//   } finally {
//     // Close the connection
//     await client.close();
//   }
// }

// run().catch(console.dir);

