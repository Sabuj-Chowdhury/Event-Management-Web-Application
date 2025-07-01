const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT");
const {
  addEvent,
  getAllEvents,
  joinEvent,
} = require("../controllers/eventController");

// Public
router.get("/", getAllEvents);

// Protected
router.post("/", verifyJWT, addEvent);
router.post("/join/:id", verifyJWT, joinEvent);

module.exports = router;
