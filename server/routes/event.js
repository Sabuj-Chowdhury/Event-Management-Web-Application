const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT");
const { addEvent } = require("../controllers/eventController");

// Protected
router.post("/", verifyJWT, addEvent);

module.exports = router;
