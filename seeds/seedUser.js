require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/userModel');
const userData = require('./userData');

mongoose.set('strictQuery', false);
const mongoDbURL = process.env.MONGO_URI;

mongoose
  .connect(mongoDbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Connected at ${mongoDbURL}`));

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
