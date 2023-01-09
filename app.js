const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const beerRoutes = require('./routes/beers');
const userRoutes = require('./routes/user');
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api/beers', beerRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
