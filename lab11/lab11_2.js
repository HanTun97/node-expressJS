const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    if(request.url == "/"){
        fs.readFile('./pdf/test.pdf', (error, data) => {
            if (error) {
                response.writeHead(400,{'Content-type':'text/html'});
                response.end("File Not Found!");
            }else{
                response.writeHead(200, {'Content-type':'application/pdf'});
                response.end(data);
            }
        })
    }else{
        response.writeHead(404);
        response.end("404 Not Found!");
    }
})

server.listen(8000, '127.0.0.1', () => console.log('Server Running...'));

