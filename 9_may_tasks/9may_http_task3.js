const http = require('http');

const server = http.createServer((req,res) =>{
    if (req.url === "/submit"){
        if(req.method === "POST"){
            let body = "";
            req.on('data',(chunk) => body += chunk);
            req.on('end', ()=> {
                console.log(body)
                res.statusCode = 200;
                res.end("Recieved POST data");
            });
        }
        
    }
})
let port = 8082;
server.listen(port,()=> console.log(`Server is working on http://localhost:${port}/`));
