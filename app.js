const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const beerRoutes = require('./routes/beers');

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api/beers', beerRoutes);

module.exports = app;
