const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  abv: { type: Number, required: true },
  calories: { type: Number, required: true },
  type: { type: String, required: true },
  ingredients: { type: String, required: true },
  country: { type: String, required: true },
  volume: { type: Number, required: true },
  overall: { type: Number, required: false },
  taste: { type: Number, required: false },
  realness: { type: Number, required: false },
  value: { type: Number, required: false },
  reviewCount: { type: Number, required: false },
});

// create the Beer model
module.exports = mongoose.model("Beer", beerSchema);
