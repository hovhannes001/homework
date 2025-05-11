let obj = {
    0: [1,2,3,4,5],
    1: [6,7,8,9,10]
}

function deepClone(object1){
    new_obj = {};
    for(let elem in object1){
        new_obj[elem] = [...object1[elem]]; // ... tuyl e talis shallow copy anel nested objectneri jamanka
    }
    return new_obj;
}

let clone = deepClone(obj);

clone['0'][2] = (111);

console.log(obj);
console.log(clone);
