const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT");
const { addEvent, getAllEvents } = require("../controllers/eventController");

// Public
router.get("/", getAllEvents);

// Protected
router.post("/", verifyJWT, addEvent);

module.exports = router;
