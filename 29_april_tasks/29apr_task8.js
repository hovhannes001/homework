function custommap(arr,callback){
    let new_elem = [];
    let index = 0;
    for(let elem of arr){
        new_elem[index++] = callback(elem);
    }
    return new_elem;
}
let arr = [1,2,3,4,5]
console.log(custommap(arr,(elem) => elem * 2));