const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.statusCode = 200;
        res.end("Main page");
    }
    else if(req.url === "/about"){
        res.statusCode = 200;
        res.end("About page");
    }
    else{
        res.statusCode = 404;
        res.end("Error 404: File Not found");
    }
});

let port = 8081;

server.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}/`);
});