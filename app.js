const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const beerRoutes = require('./routes/beers');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if ('OPTIONS' == req.method) {
  res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/api/beers', beerRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
