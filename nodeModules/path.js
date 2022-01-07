const path = require('path');

// extname() -> gets extension from the path of the file.
let ext = path.extname('/Users/mac/Documents/DEV/nodeJsModules/f1.txt');
console.log('Extension ->',ext);

// basename() -> gets the actual name (baseName) of the file from the path of the file.
let basename = path.basename('/Users/mac/Documents/DEV/nodeJsModules/f1.txt');
console.log('BaseName ->',basename);

console.log(__dirname); // gets the path of the current directory
console.log(__filename); // gets the path of the current file