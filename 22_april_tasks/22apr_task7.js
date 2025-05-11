let arr = [1,[2,[3,[4]], 5]];
function het_patatel(arr, new_arr = new Array){
    for(let elem of arr){
        if (typeof elem === "number"){
            new_arr.push(elem);
        }
        else if(Array.isArray(elem)){
            het_patatel(elem,new_arr);
        }
        // console.log(new_arr);
    }
    return new_arr;
    
}

console.log(het_patatel(arr));