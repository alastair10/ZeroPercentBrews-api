const express = require("express");

const router = express.Router();

// get all beers
router.get("/", (req, res) => {
  res.json({ mssg: "GET all beers" });
});

// get single beer
router.get("/:id", (re, res) => {
  res.json({ mssg: "GET single beer" });
});

router.get("/hello", () => {});

module.exports = router;
