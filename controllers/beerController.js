const mongoose = require('mongoose');

const getBeers = async (req, res) => {
  
  const allBeers = await Workout.find({});

  res.status(200).json(allBeers);
}

module.exports = {
  getBeers
}