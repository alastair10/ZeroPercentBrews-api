require('dotenv').config();
const mongoose = require('mongoose');
const Beer = require("../models/beerModel");
const beerData = require("./seed_beerData");

mongoose.set('strictQuery', false);
const mongoDbURL = process.env.MONGO_URI;

mongoose
  .connect(mongoDbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Connected at ${mongoDbURL}`));

const seedDB = async () => {
  await Beer.deleteMany({});
  await Beer.insertMany(beerData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
