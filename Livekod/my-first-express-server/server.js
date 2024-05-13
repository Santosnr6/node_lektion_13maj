// ES6-sättet att importera moduler
import express from 'express';

// Skapar upp vår server
const app = express();

const PORT = 8000;

// GET-anrop mot base-url:en
app.get("/", (request, response) => {
    //Här definierar vi vad som skall skickas tillbaks till klienten
    response.send('HomePage');
});

// GET-anrop mot /about
app.get("/about", (request, response) => {
    response.send("AboutPage");
});

// GET-anrop mot /people/ med params
app.get("/people/:id", (request, response) => {
    const id = request.params.id;
    response.send(`People #${id}`);
});

// GET-anrop mot /hello/ med query parametrar
app.get("/hello/", (request, response) => {
    const name = request.query.hund;
    response.send(`Hello ${name}`);
});


// app.post()
// app.put()
// app.delete()

// Här startas vår server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});


// Server med ES6-moduler
// import express from 'express';
// import add from './operations.js';
// const app = express();

// const PORT = 8000;

// app.get("/", (req, res) => {
//     console.log(add(5, 6));
//     res.send(`Summan är ${add(5, 6)}`);
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}...`);
// })

// Server med CommonJS-moduler
// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 8000;

// const dirPath = path.join(__dirname, 'public');
// app.use(express.static(dirPath));

// app.get('/', (request, response) => {
//     response.sendFile(path.join(dirPath, 'index.html'));
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}...`);
// });