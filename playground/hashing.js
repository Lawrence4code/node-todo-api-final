const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) =>{
        console.log(hash);
    });
});

var hashedPassword  ='$2a$10$aayoqquuL8LPLBvVmFqDVOt2f0aGLaNh9ZSmoNey6LVB0706eiFB2';
bcrypt.compare('123!', hashedPassword, (err, result) => {
    console.log(result);
})



// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log('Coded: ', token);

// var untoken = jwt.verify(token, '123abc');
// console.log('Decoded: ', untoken);

// var retoken = jwt.sign(untoken, '123abc');
// console.log('Retoken: ', retoken);

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