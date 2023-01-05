const mongoose = require('mongoose');
const Beer = require('../models/beerModel')

const getBeers = async (req, res) => {
  
  const allBeers = await Beer.find({});
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000' || 'https://zero-percent-brews-client.vercel.app/');
  res.status(200).json(allBeers);
}

const getBeerById = async (req, res) => {

  const { id } = req.params;

  const beerItem = await Beer.findById(id);
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000' || 'https://zero-percent-brews-client.vercel.app/');
  res.status(200).json(beerItem);
}

module.exports = {
  getBeers,
  getBeerById
}