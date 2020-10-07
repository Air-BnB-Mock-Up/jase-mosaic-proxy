const path = require('path');
const cors = require('../cors.json');
const express = require('express');
const app = express();
const { template } = require('./template.js')
app.use(express.static(path.join(__dirname, '/../dist')));


var locationID;
app.get('/template/:locationID', (req, res) => {
  console.log(req.params.locationID)
  locationID = req.params.locationID;
    res.header(cors)
    res.send(template);
})



module.exports.app = app;
module.exports.locationID = locationID;