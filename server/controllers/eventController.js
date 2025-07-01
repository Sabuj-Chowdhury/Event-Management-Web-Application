const { ObjectId } = require("mongodb");
const { getEventsCollection } = require("../DB/collections.js");

// Add Event
const addEvent = async (req, res) => {
  const events = getEventsCollection();

  const { title, name, date, time, location, description } = req.body;

  if (!title || !name || !date || !time || !location || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newEvent = {
    title,
    name,
    date,
    time,
    location,
    description,
    attendeeCount: 0,
    userId: req.user.userId, // from JWT
    joinedUsers: [], //for user id who joined in the event
    createdAt: new Date(),
  };

  const result = await events.insertOne(newEvent);
  res.status(201).json({ message: "Event added successfully", result });
};

module.exports = {
  addEvent,
};
