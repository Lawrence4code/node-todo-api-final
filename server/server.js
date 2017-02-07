require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({todos});
    }, (error) =>{
        res.status(400).send(error);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //res.send(req.params);
    
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
        console.log(id)
    };

    Todo.findById(id).then((todo)=> {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(401).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
        console.log('Id is not valid.');
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
            console.log('Todo not found!');
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
        console.log('Some other error!')
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
        console.log('Id is not valid.');
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    });

});

app.listen(port, () => {
    console.log(`Started up on port ${port}`);
});

module.exports = {app};