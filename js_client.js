const http = require('http');
const input = require('prompt-sync')();
function get_request(){
    const options = {
        hostname: 'localhost',
        port: 8085,
        path: '/',
        method: "GET",
        headers: {
            'Content-type': 'text/plain'
        }
    }

    const req = http.request(options, (res) => {
        let body = "";
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            console.log(body);
        });
    });

    req.on('error',(err) => {
        console.log("Error: ", err.message);
    });

    req.end();
}

function post_request(){
    const options = {
        hostname: 'localhost',
        port: 8085,
        method: "POST",
        path: '/submit',
        headers: {
            'Content-type': 'text/plain'
        }
    }

        const req = http.request(options, (res) => {
        
        let body = "";
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            console.log(body);
        });
    });

    req.end(input("Enter some text: "));

    req.on('error',(err) => {
        console.log("Error: ", err.message);
    });

}

get_request();
post_request();