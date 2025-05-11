
const functions = [
    function declaredFunc() {
        return "declaredFunc";
    },
    
    function() {
      return "functionExpression";
    },
    
    () => {
        return "arrowFunc";
    }
];


console.log(functions[0]()); 
console.log(functions[1]()); 
console.log(functions[2]()); 
    