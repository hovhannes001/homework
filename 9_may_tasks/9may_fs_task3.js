let fs = require('fs');
let body = fs.readdirSync(__dirname,{encoding: 'utf-8'});
if (!body.includes("test-directory")){
    fs.mkdirSync("test-directory");
}    
fs.writeFileSync("test-directory/test.txt","");
body = fs.readdirSync("test-directory",{encoding: 'utf-8'});
console.log(body);