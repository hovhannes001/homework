let fs = require('fs');
let input = require('prompt-sync')();

let filename = input("Enter filename: ")
let stats = fs.statSync(filename);


if (fs.existsSync(filename)) {
    console.log("File size in bytes:", stats.size);
    console.log("Creation date:", stats.birthtime);
    console.log("Last modified date:", stats.mtime);
} else {
    console.log("The file does not exist.");
}