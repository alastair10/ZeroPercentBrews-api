const mongoose = require("mongoose");

const schema = mongoose.Schema;

const beerSchema = new Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  abv: { type: Number, required: true },
  calories: { type: Number, required: true },
  style: { type: String, required: true },
  ingredients: { type: String, required: true },
  country: { type: String, required: true },
  vol: { type: Number, required: true },
  overall: { type: Number, required: true },
  taste: { type: Number, required: true },
  realness: { type: Number, required: true },
  value: { type: Number, required: true },
  reviewCount: { type: Number, required: true },
});

// create the Beer model
module.exports = mongoose.model('Beer', beerSchema)