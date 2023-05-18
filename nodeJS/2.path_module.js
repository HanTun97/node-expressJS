const path = require('path');

//returns the directories of a file path.
console.log(path.dirname('MyFolder/File/example1.js'));//

//Joins two or more parts of a path:
const name = 'joe';
console.log(path.join('web', 'users', name, 'notes.txt'));

const filePath1 = path.join('\\web\\users\\joe\\notes.txt');
console.log("filepath1: ", filePath1);

const filePath2 = path.join('/web/users/joe/notes.txt');
console.log("filepath2: ", filePath2);

const filePath = path.join('web', 'users', name, 'notes.txt');
console.log("filePath: ", filePath);

