const express = require('express');

const db = require('../data/index');


const app = express();
// setting up port
app.set('PORT', 3004);
// serving static files and setting middleware
app.use(express.static('public/'));
// sending seed data to client
app.get('/listinginfo', (request, response) => {
  db('get', (err, result) => {
    if (err) throw err;
    response.send(result).status(200).end();
  });
});


module.exports = app;
