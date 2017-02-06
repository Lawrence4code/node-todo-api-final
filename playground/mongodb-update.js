// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {'native_parser': true, 'poolSize': 1}, (err, db)=> {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58978b0edbf2b8b2623f7ba2')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();

});