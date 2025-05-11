class Person{
    constructor1 = (name,surname) => {
        this.name = name;
        this.surname = surname;
    }
    describe(){
        return `hi ${this.name} ${this.surname}`
    }
}
let obj = new Person;
obj.constructor1("James","Williams");
console.log(obj.describe());

const Person2 = (name,surname) => { this.name = name; this.surname = surname ;console.log(this)};
let person = new Person2("Vlad","Valdikovich");


