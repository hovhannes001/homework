function customForEach(arr, callback){
    for(let elem of arr){
        callback(elem);
    }
}
let arr = [1,2,3,4,5]
customForEach(arr,(elem) => console.log(elem));