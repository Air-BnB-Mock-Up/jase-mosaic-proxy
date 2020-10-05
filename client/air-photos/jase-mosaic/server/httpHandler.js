////////////////////////////////////////
// USE REFERENCE OF APP IN INDEX.JS ////
const express = require('express');
const app = express();
////////////////////////////////////////
// Dependencies ////////////////////////
const bodyParser = require('body-parser');
const path = require('path');
/////////////////////////////////////////
// Initializing /////////////////////////
const db = require('./db/dbIndex.js');
const { insert, getListing } = require('./db/dbHelper.js')
/////////////////////////////////////////

app.use(express.static(path.join(__dirname + '/../client/dist')));

/////////////////////////////////////////
// HTTP Handlers ///////////////////////
app.get('/mosaic/:locationID', (req, res) => {
  let id = req.params.locationID
  return getListing(id)
    .then((data) => {
      data = JSON.stringify(data);
      console.log('goodbye')
      res.send(data)
    })
    .catch((err) => {
      res.header(400)
      res.end()
    })
})
/////////////////////////////////////////
module.exports = app;