const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

const dirPath = path.join(__dirname, 'public');
app.use(express.static(dirPath));

app.get('/', (request, response) => {
    response.sendFile(path.join(dirPath, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});