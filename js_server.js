const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res) => {
    if(req.method === "POST" && req.url === "/submit"){
        let body = "";
        req.on('data',(elem) => {
            body += elem;
        });
        req.on('end',() => {
            fs.writeFileSync(path.resolve(__dirname,"index.txt"),body,"utf-8");
            res.statusCode =200;
            res.end("Post recieved");
        });
        res.end("Post request recieved");
    }
    else if(req.method === "GET" && req.url === "/"){
        let buffer = "";
        buffer = fs.readFileSync("./index.html");
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(buffer);
    }
    else{
        res.statusCode = 404;
        res.end("Error 404: File not found2");
    }
});

let port =8085;

server.listen(port,() => console.log(`server is listening on http://localhost:${port}/`));