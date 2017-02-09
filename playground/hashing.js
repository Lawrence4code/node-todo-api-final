const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log('Coded: ', token);

var untoken = jwt.verify(token, '123abc');
console.log('Decoded: ', untoken);

var retoken = jwt.sign(untoken, '123abc');
console.log('Retoken: ', retoken);

//jwt.verify

// var message = 'I am user number 3';
// var hashT = SHA256(message);
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
// console.log(`hashT: ${hashT}`);

// console.log(typeof hash);
// console.log(typeof hashT);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'SomeSecret').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'SomeSecret').toString();

// console.log(token.hash);
// console.log(resultHash);