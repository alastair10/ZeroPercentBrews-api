const express = require("express");
const {
  getBeers,
  getBeerById,
  addReview
} = require('../controllers/beerController');
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// get all
router.get("/", getBeers);

// get one
router.get("/:id", getBeerById);

// add review to beer
router.patch("/:id/reviews", requireAuth, addReview);

module.exports = router;
 