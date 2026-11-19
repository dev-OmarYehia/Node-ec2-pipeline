const exprees = require('express');

const app = exprees();

app.get('/', (req, res) => {
    res.send('Hello World');
}