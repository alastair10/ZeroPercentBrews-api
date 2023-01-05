const express = require("express");
const {
  getBeers
} = require('../controllers/beerController');

const router = express.Router();

// get all
router.get("/", getBeers);

// get one
router.get("/:id", (re, res) => {
  res.json({ message: "GET single beer" });
});

// post
router.post("/", (req, res) => {
  res.json({ message: "POST a new beer" });
});

// delete
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a beer" });
});

// update
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a beer" });
});

module.exports = router;
 