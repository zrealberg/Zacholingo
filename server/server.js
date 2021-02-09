const express = require('express');
const bodyParser = require('body-parser');
const translator = require('./translator');


const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// app.use('/', proxy(ATELIER_HOST, proxyOptions));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.get('/wtt', (req, res) => {
  // console.log('you hit the wtt route', req.query);
  translator(req.query);
  res.json('WTT!');
})

module.exports = app;