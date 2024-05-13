const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

const dirPath = path.join(__dirname, 'public');

server.on('request', (request, response) => {
    if(request.url === "/") {
        console.log('Nu är vi på base-url');
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Internal Server Error');
            } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
            }
        });
    }
})



server.listen(8000, () => {
    console.log(`Server is running on port 8000...`);
})