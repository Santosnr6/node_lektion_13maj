
// Server med ES6-moduler
import express from 'express';
import add from './operations.js';
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    console.log(add(5, 6));
    res.send(`Summan är ${add(5, 6)}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})

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