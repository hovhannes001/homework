const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/home"){
        res.statusCode = 200;
        body = fs.readFileSync("index.html");
        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.end(body);
    }
    else{
        res.statusCode = 404;
        res.end("Error 404: File not found");
    }
})
let port = 8084;
server.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}/`);
});