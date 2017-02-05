// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {'native_parser': true, 'poolSize': 1}, (err, db)=> {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

// Delete Many

// db.collection('Todos').deleteMany({text: 'Failure' }).then((result) =>{
//      console.log(result);
// });

// Delete One
//     db.collection('Todos').deleteOne({text: 'Failure'}).then((result) =>{
//         console.log(result);
//     });

// FindOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('58978bb55e3c74b2cbeb41e9')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

// // Challenge
//     db.collection('Users').deleteMany({location: 'Earth'}).then((result) =>{
//         console.log(JSON.stringify(result, undefined, 2));
//     })

    // db.close();
})