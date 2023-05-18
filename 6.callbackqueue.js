const process = require('process')
let http = require("http");
let fs = require('fs');
// console.log('start');

// // fs.writeFile('mynewfile.txt', 'Hello world!', function (err) {
// //     if (err) throw err;
// //     console.log('Saved!');
// // });


// fs.readFile('mynewfile.txt', function (err, data) {
//     console.log("reading file");
// });

// setImmediate(function () { console.log('immediate') });

// process.nextTick(function () {
//     console.log('nextTick');
// });

// setTimeout(function () { console.log('timeout') }, 0);
// console.log('end');


// const fs = require("fs");
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));

// for (let i = 0; i < 2000000000; i++) { }

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
// });




// setTimeout(() => { console.log('timeout'); }, 0);
// setImmediate(() => { console.log('immediate'); });
// process.nextTick(() => console.log('nexttick'));


console.log('start');
process.nextTick(() => console.log("this is process.nextTick 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
process.nextTick(() => console.log("this is process.nextTick 2"));
setImmediate(() => console.log("this is setImmediate"));
setTimeout(() => console.log("this is setTimeout 2"), 0);
process.nextTick(() => console.log("this is process.nextTick 3"));
let promise = new Promise((resolve, reject) => {
    console.log('It is executor');
    resolve("ok");
})
promise.then((result) => console.log("this is promise => " + result));
console.log('end');

