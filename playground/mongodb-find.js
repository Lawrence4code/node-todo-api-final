// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {'native_parser': true, 'poolSize': 1}, (err, db)=> {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find().toArray().then((doc) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(doc, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: "Lawrence The Developer"
    }).count().then((count) =>{
        console.log(`CountTodos : ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
})