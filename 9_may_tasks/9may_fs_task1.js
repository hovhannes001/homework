const fs = require('fs');
const input = require('prompt-sync')();
if(!(fs.existsSync("./index.txt"))){
    fs.writeFileSync("./index.txt","Hello World");
    console.log("This is a newly created file.");
    return;
}
let body = fs.readFileSync("./index.txt",{encoding: 'utf-8'});

console.log(body);

fs.appendFileSync("./index.txt","\n" + input("Enter text to add to file: "));