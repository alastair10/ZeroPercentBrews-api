const express = require("express");
const {
  getBeers,
  getBeerById
} = require('../controllers/beerController');

const router = express.Router();

// get all
router.get("/", getBeers);

// get one
router.get("/:id", getBeerById);

module.exports = router;
 