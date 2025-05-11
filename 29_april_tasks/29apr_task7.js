const person = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet();

const person2 = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person2.greet();


//arrow function@ this@ handisanume Global.this@ ev chi hamapatasxanecnum mer namei het