let prompt = require("prompt-sync")();

let str = "banan";
let str2 = "nanba";
let letters = new Map();
for (let letter of str) {
    if (letters.has(letter)) {
        letters.set(letter, letters.get(letter) + 1); 
    } else {
        letters.set(letter, 1); 
    }
}

for (let letter2 of str2) {
    if (letters.has(letter2)) {
        letters.set(letter2, letters.get(letter2) - 1); 
    } else {
        letters.set(letter2, 1); 
    }
}
for(let i of letters.values()){
    if (i) {
        console.log("words are not anagram");
        return;
    }
}
console.log("words are anagram");


class Calculator{
    input(num1,operand,num2){
        this.num1 = num1;
        this.operand = operand;
        this.num2 = num2;
    }

    do_calculate(){
        this.result = null;
        eval(`this.result = ${this.num1} ${this.operand} ${this.num2}`);

    }
    print_result(){
        console.log(`The result is: ${this.result}`);
    }
    do_all(num1,operand,num2){
        this.input(num1,operand,num2);
        this.do_calculate();
        this.print_result();
    }
}

let calc = new Calculator;

calc.do_all(prompt("Enter firs number: "),prompt("Enter operand: "),prompt("Enter second number: "));
