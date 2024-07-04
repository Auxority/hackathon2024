const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/data/input.csv', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'input.csv'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
