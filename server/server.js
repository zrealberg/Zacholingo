const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();
// const proxy = require('express-http-proxy');
// const API_TOKEN = process.env.API_TOKEN || require('./config')['API_TOKEN'];

// const ATELIER_HOST = 'https://app-hrsei-api.herokuapp.com';

// const proxyOptions = {
//   proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
//     proxyReqOpts.headers['Authorization'] = API_TOKEN;
//     return proxyReqOpts;
//   }
// };

app.use(express.static(path.join(__dirname, '../public')));
// app.use('/', proxy(ATELIER_HOST, proxyOptions));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('Hello World');
});

module.exports = app;