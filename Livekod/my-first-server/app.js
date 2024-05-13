
// Här importerar vi de core-moduler som vi behöver, detta görs med CommonJS-sättet
const http = require('http');
const fs = require('fs');
const path = require('path');

// Här skapar vi upp vår http-server, detta motsvarar const app = express() när vi använder express istället
const server = http.createServer();

// Här ligger vi och lyssnar på anrop mot vår server
server.on('request', (request, response) => {
    // Om anropet görs mot base-url:en så hamnar vi här
    if(request.url === "/") {
        console.log('Nu är vi på base-url');
        // Detta behöver ni inte lära er, utan det är mest en demonstration för hur man kan göra för att skicka tillbaks html-filer
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                // Vill man bara skicka tillbaks någon text så kör man reponse.write(), följt av response.end()
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end('Internal Server Error');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }
})

// Här definierar vi vilken port det är vår server körs på
server.listen(8000, () => {
    console.log(`Server is running on port 8000...`);
})