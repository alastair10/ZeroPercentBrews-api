const mongoose = require('mongoose');
const Beer = require('../models/beerModel')



const getBeers = async (req, res) => {
  const allowedOrigins = ['http://localhost:3000', 'https://zero-percent-brews-client.vercel.app/'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  
  const allBeers = await Beer.find({});
  res.status(200).json(allBeers);
}

const getBeerById = async (req, res) => {
  const allowedOrigins = ['http://localhost:3000', 'https://zero-percent-brews-client.vercel.app/'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  const { id } = req.params;
  const beerItem = await Beer.findById(id);
  res.status(200).json(beerItem);
}

module.exports = {
  getBeers,
  getBeerById
}