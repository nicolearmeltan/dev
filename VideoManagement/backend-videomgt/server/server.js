'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../configs/dbConfig');
const routes = require('../routes/videoRoutes');
const app = express();
const CONFIG = require('../configs/config.json');
const cors = require('cors');

db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(routes);

app.listen(CONFIG.configs.APP_PORT, () => {
  console.log('Server running on port: ' + CONFIG.configs.APP_PORT);
})