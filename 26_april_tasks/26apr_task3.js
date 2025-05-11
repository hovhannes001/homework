let person = {
    firstname: "Hovhannes",
    lastname: "Baghdasaryan",
    age: 18,

    introduce: function(){
        return `Hi, I'm ${this.firstname} ${this.lastname} and I'm ${this.age} years old.`;
    },
    showthis: function(){
        console.log("enviroment 'this' is: ",this);
    }
}

console.log(person.introduce());
person.showthis();

let f = person.showthis;
f()