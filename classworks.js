// function problem1(){
//     class Jsonreader{
//         constructor(url){
//             this.url = url;
//         }
//         async json() {
//             this.response = await fetch(this.url);
//             this.jsons = await this.response.json();
//         }
//         cmp(foo) {
//             return this.jsons.filter(foo);
//         }
//     }

//     let reader = new Jsonreader("https://jsonplaceholder.typicode.com/posts");
//     async function processJson() {
//         await reader.json();
//         let result = reader.cmp((elem) => {
//             return elem.userId > 5 && elem.userId < 7;
//         });
//         console.log(result);
//     }

//     processJson();
// }
// function problem2(){
    
// }

// problem1();

// const express = require('express');
// const app = express();
// const port = 3000;

// const database = {};

// app.get('/home/:name',(req,res) => {
//     if (req.params.name in database){
//         database[req.params.name] += 1;
//     }
//     else{
//         database[req.params.name] = 1;
//     }
    
//     res.send(`Hello, ${req.params.name}! You have visited ${database[req.params.name]} times.`);
// })


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// //problem 2

// const express = require('express');
// const app = express();
// const port = 8000;

// const database = {};

// function check_time(req, res, next) {
//     const name = req.params.name;

//     if (!database[name]) {
//         database[name] = {
//             count: 0,
//             request_time: Date.now()
//         };
//         return next();
//     }
//     const now = Date.now();
//     const timeSinceLastRequest = now - database[name].request_time;

//     if (timeSinceLastRequest < 10000) {
//         return res.status(402).send("Pereriv 10 seconds don't interrupt me");
//     }

//     database[name].request_time = now;
//     next();
// }
// setInterval(() => {
//     const now = Date.now();
//     const inactiveLimit = 5 * 60 * 1000; 

//     for (const name in database) {
//         if (now - database[name].request_time > inactiveLimit) {
//             console.log(`Deleting inactive user: ${name}`);
//             delete database[name];
//         }
//     }
// }, 60 * 1000);

// app.get('/:name', check_time, (req, res) => {
//     const name = req.params.name;
//     database[name].count += 1;

//     res.send(`Hello, ${name}! You have visited ${database[name].count} times.`);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

//problem3

// const express = require('express');
// const app = express();
// const port = 8000;
// const key = 'a9F3xZ7LqP2mV8bT';
// const blockedIPs = [];
// function check_security(req, res, next) {
//     if (!req.header('x-api-key')) {
//         res.status(402).send('You need to give me key');
//         return;
//     }
//     if (req.header('x-api-key') !== key) {
//         res.status(403).send('Blocked access attempt');
//         blockedIPs.push(req.ip);
//         return;
//     }
//     next();
// }
// function check_block(req,res,next){
//     const ip = req.ip;
//     if (blockedIPs.includes(ip)){
//         return res.status(403).send("Access denied: Your IP is blocked."); 
//     }
//     next();
// }
// const database = {}
// app.get('/:name', check_block,check_security, (req, res) => {
// if (req.params.name in database){
//         database[req.params.name] += 1;
//     }
//     else{
//         database[req.params.name] = 1;
//     }
    
//     res.send(`Hello, ${req.params.name}! You have visited ${database[req.params.name]} times.`);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const app = express();
// const port = 8000;

// function check_num(req, res, next) {
//     const { num1, num2 } = req.params;
//     if (isNaN(num1) || isNaN(num2)) {
//         return res.status(400).send('Both num1 and num2 must be numbers.');
//     }
//     next();
// }

// app.get('/:operation/:num1/:num2', check_num, (req, res) => {
//     const { operation, num1, num2 } = req.params;
//     const a = parseFloat(num1);
//     const b = parseFloat(num2);
//     let result;

//     switch (operation) {
//         case 'add':
//             result = a + b;
//             break;
//         case 'sub':
//             result = a - b;
//             break;
//         case 'mul':
//             result = a * b;
//             break;
//         case 'div':
//             if (b === 0) return res.status(400).send('Cannot divide by zero.');
//             result = a / b;
//             break;
//         default:
//             return res.status(400).send('Invalid operation.');
//     }

//     res.json({ operation,num1,num2,result });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const app = express();
// const port = 8000;

// function check_num(req, res, next) {
//     const { num1, num2 } = req.params;
//     if (isNaN(num1) || isNaN(num2)) {
//         return res.status(400).send('Both num1 and num2 must be numbers.');
//     }
//     next();
// }
// app.get('/add/:num1/:num2',check_num,(req,res)=>{
//     let {num1,num2} = req.params;
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     res.json({operation: 'add',num1,num2,result: num1 + num2});
// });
// app.get('/sub/:num1/:num2',check_num,(req,res)=>{
//     let {num1,num2} = req.params;
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     res.json({operation: 'sub',num1,num2,result: num1 - num2});
// });
// app.get('/nmul/:num1/:num2',check_num,(req,res)=>{
//     let {num1,num2} = req.params;
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     res.json({operation: 'mul',num1,num2,result: num1 * num2});
// })
// app.get('/div/:num1/:num2',check_num,(req,res)=>{
//     let {num1,num2} = req.params;
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     res.json({operation: 'div',num1,num2,result: num1 / num2});
// })


// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
const database = {}
app.get('/note',(req,res)=> {
    res.jon({database});
})
let id_generator = 123;
app.get('/note/:id',(req,res)=> {
    if(!database[req.params.id]){
        res.status(404).send("Not found object with this id");
        return;
    }
    return res.json(database[req.params.id]);
})
app.post('/notes',(req,res) => {
    database[id_generator++] = req.body;

})
app.put("/notes/:id",(req,res) => {
    if(!database[req.params.id]){
        res.status(404).send("Not found object with this id");
        return;
    }
    let {title,continent} = req.body;
    let {id} = req.params;
    database[id].title = title;
    database[id].continent = continent;

})
app.delete("/notes/:id",(req,res) => {
    if(!database[req.params.id]){
        res.status(404).send("Not found object with this id");
        return;
    }
    delete database[req.params.id];
})
 app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});