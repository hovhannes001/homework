// "use strict"; error strict mode-um

let config = {};

Object.defineProperty(config,"SECRET_KEY",{
    value: "xyz123",
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(config);

config.SECRET_KEY = 23;

for(let elem in config){
    console.log(elem);
}

console.log(config.SECRET_KEY); 
