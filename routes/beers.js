const express = require("express");
const {
  getBeers,
  getBeerById,
  addComment,
  updateKegVotes,
  getLowCalBeers,
  getMostLikedBeers,
  getBeersByType
} = require('../controllers/beerController');
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// get all
router.get("/", getBeers);

// get low-calorie beers
router.get("/low-cal", getLowCalBeers);

// get most-liked beers
router.get("/most-liked", getMostLikedBeers);

// get beers by type
router.get("/:type", getBeersByType);

// get one
router.get("/:id", getBeerById);

// add review to beer
router.patch("/:id/comments", requireAuth, addComment);

// update kegs (votes)
router.patch("/:id/kegs", requireAuth, updateKegVotes);


module.exports = router;
 