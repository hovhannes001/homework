let arr = ['a','b','c','d','e'];

function slicing_by_size(arr,size){
    let start = 0;
    let end = start + size;
    let new_arr = new Array();
    let index = 0;
    for(let i = 0; i < Math.ceil(arr.length / size); i++){
        new_arr[i] = arr.slice(start,end);
        start = end;
        end += size;
    }
    console.log(new_arr);
}

slicing_by_size(arr,2);