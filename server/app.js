const express = require('express');

const bodyParser = require('body-parser');
const db = require('../data/index');

const app = express();

app.use(bodyParser.json());

// setting up port
app.set('PORT', 3004);
// serving static files and setting middleware
app.use(express.static('./public'));
// sending seed data to client
app.get('/listinginfo', (request, response) => {
  db('get', (err, result) => {
    if (err) throw err;
    response.send(result).status(200).end();
  });
});
app.put('/listinginfo', (req, res) => {
  db('put', (err, result) => {
    if (err) throw err;
    res.status(200).end();
  }, req.body);
});


module.exports = app;