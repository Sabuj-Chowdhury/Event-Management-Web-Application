const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT");
const {
  addEvent,
  getAllEvents,
  joinEvent,
  getMyEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// Public
router.get("/", getAllEvents);

// Protected
router.post("/", verifyJWT, addEvent);
router.post("/join/:id", verifyJWT, joinEvent);
router.get("/my-events", verifyJWT, getMyEvents);
router.put("/:id", verifyJWT, updateEvent);
router.delete("/:id", verifyJWT, deleteEvent);

module.exports = router;
