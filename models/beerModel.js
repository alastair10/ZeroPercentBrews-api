const mongoose = require('mongoose');
const User = require('../models/userModel')

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  image: { type: String, required: false },
  title: { type: String, required: true },
  brand: { type: String, required: true },
  abv: { type: Number, required: true },
  calories: { type: Number, required: true },
  type: { type: String, required: true },
  ingredients: { type: String, required: true },
  country: { type: String, required: true },
  volume: { type: Number, required: true },
  description: { type: String, required: true },
  comments: [
    new Schema(
      {
        user_id: {
          type: mongoose.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        body: { type: String, required: true },
      },
      { timestamps: true }
    ),
  ],
  rating: {
    overall: { type: Number, required: false },
    taste: { type: Number, required: false },
    realness: { type: Number, required: false },
    value: { type: Number, required: false },
  },
  upvotes: { type: Number, require: false },
  kegs: { type: Number, require: false },
  staffPicks: { type: Boolean, require: false },
});

// create the Beer model
module.exports = mongoose.model('Beer', beerSchema);
