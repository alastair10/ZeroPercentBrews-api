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
  const beerItem = await Beer.findById(id).populate({ path: 'comments.user_id', select: 'username _id' });
  res.status(200).json(beerItem);
};

// Add comment to single beer
const addComment = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ error: 'Comment cannot be empty' });
  }

  const beer = await Beer.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { comments: comment } },
      { new: true }
        );

  res.status(200).json({ message: "OK", user_id: user_id, beer: beer });
};

// Update kegs (votes)
const updateKegVotes = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;
  const { kegs } = req.body;

  if (!kegs) {
    return res.status(400).json({ error: 'Kegs cannot be empty' });
  }

  const beer = await Beer.findByIdAndUpdate(
    { _id: id },
    { $set: { kegs: kegs } },
    { new: true }
      );
  
  res.status(200).json({ message: "OK", user_id: user_id, beer: beer });

};

// Get top lowest calorie beers
const getLowCalBeers = async (req, res) => {
  const lowCalBeers = await Beer.find({}).sort('calories').limit(12);
  res.status(200).json(lowCalBeers);
};

// Get top most liked beers
const getMostLikedBeers = async (req, res) => {
  const mostLikedBeers = await Beer.find({}).sort('-kegs').limit(12);
  res.status(200).json(mostLikedBeers);
};

// Get beers by type
const getBeersByType = async (req, res) => {
  const { type } = req.params;
  const beersByType = await Beer.find({ type: type });
  res.status(200).json(beersByType);
};

// Get beers default listing
const getBeersDefault = async (req, res) => {
  const defaultBeers = await Beer.find({ homepage: true});
  res.status(200).json(defaultBeers);
}

module.exports = {
  getBeers,
  getBeerById,
  addComment,
  updateKegVotes,
  getLowCalBeers,
  getMostLikedBeers,
  getBeersByType,
  getBeersDefault
};
