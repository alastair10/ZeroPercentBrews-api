require("dotenv").config();

const express = require("express");
const beerRoutes = require("./routes/beers");

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/beers', beerRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
