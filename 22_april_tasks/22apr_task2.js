let arr = ["u1","u2","u3"];

let obj = {
    [arr[0]]: {
        score: 0
    },
    [arr[1]]: {
        score: 0
    },
    [arr[2]]: {
        score: 0
    }

}

obj["u2"].score += 10;

console.log(obj);

let newId = "u4";

obj[newId] = {
    score: 0
}

console.log(obj);