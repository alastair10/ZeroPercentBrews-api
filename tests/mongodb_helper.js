const mongoose = require('mongoose');

/* Connect to the test database before each test */
beforeEach(() => {
  mongoose.set('strictQuery', false);
  const mongoDbURL = 'mongodb://localhost:27017/beerDB_test';
  mongoose
    .connect(mongoDbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB Connected at ${mongoDbURL}`));
});

afterEach(() => {
  mongoose.connection.close();
});
