function customfilter(arr,callback){
    let new_elem = [];
    let index = 0;
    for(let elem of arr){
        if (callback(elem)){
            new_elem[index++] = elem;
        }
    }
    return new_elem;
}
let arr = [1,2,3,4,5]
console.log(customfilter(arr,(elem) => elem % 2 == 1? true:false));