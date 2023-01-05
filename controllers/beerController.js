const mongoose = require('mongoose');
const Beer = require('../models/beerModel')

const getBeers = async (req, res) => {
  
  const allBeers = await Beer.find({});

  res.status(200).json(allBeers);
}

module.exports = {
  getBeers
}