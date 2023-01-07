const mongoose = require('mongoose');
const Beer = require('../models/beerModel');

// Get all beers
const getBeers = async (req, res) => {
  const allBeers = await Beer.find({});
  res.status(200).json(allBeers);
};

// Get single beer by ID
const getBeerById = async (req, res) => {
  const { id } = req.params;
  const beerItem = await Beer.findById(id);
  res.status(200).json(beerItem);
};

// Add review to single beer
const addReview = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id
  const { review, rating } = req.body;

  if (!review) {
    return res.status(400).json({ error: 'Review cannot be empty' });
  }

  const beer = await Beer.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { reviews: review }, rating: rating },
      { new: true }
        );

  res.status(200).json({ message: "OK", user_id: user_id, beer: beer });
};

module.exports = {
  getBeers,
  getBeerById,
  addReview
};
