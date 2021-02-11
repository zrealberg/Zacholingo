const express = require('express');
const bodyParser = require('body-parser');
const translator = require('./translator');
const wordFetcher = require('./spanishWds')


const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// app.use('/', proxy(ATELIER_HOST, proxyOptions));
// app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.get('/wtt', (req, res) => {
  // console.log('you hit the wtt route', req.query);
  translator(req.query)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err)=>{
      console.error(err);
      res.sendStatus(500);
    })
})

app.get('/words', (req, res) => {
  // console.log('you hit the words route', req.query);
  const quant = parseInt(req.query.quant);
  const matchFirstLet = (req.query.firstLet === 'true');
  // console.log('does my param get translated truely', matchFirstLet);
  // console.log('wordfethcer result, s/b an arr', wordFetcher(quant, matchFirstLet));
  const altWords = wordFetcher(quant, matchFirstLet);
  res.send(altWords);
})

module.exports = app;