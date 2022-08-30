require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MDB;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let test = {firstName: "test", lastName: "test", email: "test@email.com", attendFirst: true, attendFuture: true}

function insert(obj) {
    client.connect(async err => {
        const collection = client.db("club").collection("signup");
        console.log("Connected");
        // perform actions on the collection object
        const result = await collection.insertOne(obj);
        console.log(
            `A document was inserted with the _id: ${result.insertedId}`,
        );
        client.close();
    });
}

module.exports = {insert};