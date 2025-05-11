let person = {
    firstname: "Hovhannes",
    lastname: "Baghdasaryan",
    age: 18,

    introduce: function(){
        return `Hi, I'm ${this.firstname} ${this.lastname} and I'm ${this.age} years old.`;
    }
    
}

console.log(person.introduce());