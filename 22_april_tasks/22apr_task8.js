function custom_zip(...arrays){
    let min = Math.min(...arrays.map(arr=>arr.length));
    let new_arrays = [],new_array = [];
    for(let elem of arrays){
        new_arrays.push(elem);
    }
    // console.log(new_arrays);
    for(let i = 0;i < min;i++){
        new_array[i] = [];
        for(let j = 0;j < new_arrays.length;j++){
            new_array[i].push(new_arrays[j][i]);    
        }
    }
    return new_array;
}
console.log(custom_zip([1,2], ['a','b','c'], [true,false]));