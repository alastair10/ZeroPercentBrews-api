require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const mongoDbURL = process.env.MONGO_URI || 'mongodb://localhost:27017/beerDB';
// connect to db
mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
