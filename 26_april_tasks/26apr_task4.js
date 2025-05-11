class Animal{
    constructor(type,name){
        this.type = type;
        this.name = name;
    }
    describe(){
        return `This is a ${this.type} named ${this.name}.`;
    }

}

let cat = new Animal("cat","barcik");
let dog = new Animal("dog","Jeko");

console.log(cat.describe());
console.log(dog.describe());