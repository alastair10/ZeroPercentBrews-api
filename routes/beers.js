const express = require("express");
const {
  getBeers,
  getBeerById,
  addComment,
  updateKegVotes,
  getLowCalBeers,
  getMostLikedBeers,
  getBeersByType,
  getBeersDefault
} = require("../controllers/beerController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// get all
router.get("/", getBeers);

// get default
router.get("/default", getBeersDefault);

// get low-calorie beers
router.get("/low-cal", getLowCalBeers);

// get most-liked beers
router.get("/most-liked", getMostLikedBeers);

// get one
router.get("/:id", getBeerById);

// get beers by type
router.get("/type/:type", getBeersByType);

// add review to beer
router.patch("/:id/comments", requireAuth, addComment);

// update kegs (votes)
router.patch("/:id/kegs", requireAuth, updateKegVotes);

module.exports = router;
