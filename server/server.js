const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// app.use('/', proxy(ATELIER_HOST, proxyOptions));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('Hello World');
});

module.exports = app;