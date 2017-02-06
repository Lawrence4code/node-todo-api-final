// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {'native_parser': true, 'poolSize': 1}, (err, db)=> {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo.', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     _id: 123,
    //     name: 'Lawrence The Developer',
    //     age: 29,
    //     location: 'Earth'
    // }, (err, result) =>{
    //     if (err) {
    //         return console.log('Unable to insert User into database', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.close();
});