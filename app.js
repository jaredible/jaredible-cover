const express = require('express');
const path = require('path');
const process = require('process');

const app = express();
const server = require('http').Server(app);

const PORT = process.env.port || 1000;
const HOST = process.env.host || 'localhost';
const ENV = app.get('env');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Jared Diehl' });
});

server.listen(PORT, HOST, () => {
    console.log(`${ENV.charAt(0).toUpperCase() + ENV.substring(1)} app listening at http://${server.address().address}:${server.address().port}`);
});