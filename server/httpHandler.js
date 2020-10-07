///////////////////////////////////////////
// DEPENDENCIES ///////////////////////////
const path = require('path');
const express = require('express');
const app = express();
///////////////////////////////////////////
// HELPERS ////////////////////////////////
const cors = require('../cors.json');
const { template } = require('./template.js')
///////////////////////////////////////////
app.get('/template/:locationID', (req, res) => {
  console.log(req.params.locationID)
  locationID = req.params.locationID;
    res.header(cors)
    res.send(template);
})
module.exports.app = app;
