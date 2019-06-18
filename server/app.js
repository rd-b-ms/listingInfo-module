require('newrelic');
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../data/index');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// setting up port
app.set('PORT', 3004);
// serving static files and setting middleware
app.use(express.static('./public'));
// sending seed data to client
app.get('/listinginfo/:id', (req, res) => {
  const listingId = req.params.id;
  console.log('listingid', listingId);
  db('get', (err, result) => {
    if (err) {
      res.status(500);
    } else {
      res.send(result).status(200).end();
    }
  }, listingId);
});
app.put('/listinginfo/:id', (req, res) => {
  db('put', (err) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).end();
    }
  }, req.body);
});
app.delete('/listinginfo/:id', (req, res) => {
  db('delete', (err) => {
    if (err) res.status(500);
    res.status(200).end();
  }, req.body);
});
app.post('/listinginfo', (req, res) => {
  console.log(req);
  db('post', (err, result) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200);
    }
  });
});
// app.get('/listings', (req, res) => {
//   res.send(__dirname, './public/index.html');
// });


module.exports = app;
