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
  
  const reviewData = req.body;

  const beer = await Beer.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { reviews: reviewData } },
      { new: true }
        );

  const token = await TokenGenerator.jsonwebtoken(req.user_id);
  res.status(202).json({ message: "OK", token: token, beer: beer });
};

module.exports = {
  getBeers,
  getBeerById,
  addReview
};
