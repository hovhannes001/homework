let http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.end("Hello valod");
})

let port = 8080;

server.listen(port,()=>console.log(`Server is working on http://localhost:${port}/`));
