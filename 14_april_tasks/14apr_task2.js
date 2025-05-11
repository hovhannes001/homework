let prompt = require('prompt-sync')();

let age = 0;
age = Number(prompt("Enter your age: "));
if(age < 18) {
    console.log("You are minor");
}
else if(age > 65) {
console.log("Youre sinor citizen");
}
else{
    console.log("Youre major");
}