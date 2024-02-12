const express = require("express");
const router = express.Router();
const { likeAQuote, getAUser } = require("../controllers/like.controller")

router.post("/", likeAQuote)
router.get("/:userId", getAUser)

module.exports = router;