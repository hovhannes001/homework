let count = 5;
function printtimer(){
    console.log(count--);
}
let interval = setInterval(printtimer,1000);


setTimeout(() => {
    clearInterval(interval);
    console.log("Times up!");
}, 7000);