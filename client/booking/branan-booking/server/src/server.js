const express = require('express');
const path = require('path');
const db = require('./db');

const PORT = 1020;

const server = express();
server.use(express.json());
server.use('/', express.static('public'));

server.get('/book/:id', function(Q, S) {
  db.Book.findOne({placeID: Q.params.id})
    .then(r => S.json(r))
    .catch(why => {
      console.log(why);
      S.sendStatus(500);
    })
});

server.listen(PORT);