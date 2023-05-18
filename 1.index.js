let sum = require('./add');
let path = require('node:path');
let EventEmitter = require('node:events');

console.log("Hello world");
console.log(sum(1, 2));

console.log(__filename);
console.log(__dirname);

console.log(path.join("myFolder", 'myfile.js'));

