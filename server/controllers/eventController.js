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

// Get All Events
const getAllEvents = async (req, res) => {
  const events = getEventsCollection();
  const { search = "" } = req.query;

  let filterCondition = {};

  // Search by title
  if (search) {
    filterCondition.title = { $regex: search, $options: "i" };
  }

  const data = await events
    .find(filterCondition)
    .sort({ date: -1, time: -1 })
    .toArray();

  res.json(data);
};

// Join Event
const joinEvent = async (req, res) => {
  const events = getEventsCollection();
  const eventId = req.params.id;
  const userId = req.user.userId;

  const event = await events.findOne({ _id: new ObjectId(eventId) });

  if (!event) return res.status(404).json({ error: "Event not found" });
  if (event.joinedUsers.includes(userId)) {
    return res.status(400).json({ error: "You already joined this event" });
  }

  await events.updateOne(
    { _id: new ObjectId(eventId) },
    {
      $inc: { attendeeCount: 1 },
      $push: { joinedUsers: userId },
    }
  );

  res.json({ message: "Joined successfully" });
};

// get events by user (my events)
const getMyEvents = async (req, res) => {
  const events = getEventsCollection();

  const data = await events
    .find({ userId: req.user.userId })
    .sort({ date: -1, time: -1 })
    .toArray();

  res.json(data);
};

// Update Event
const updateEvent = async (req, res) => {
  const events = getEventsCollection();
  const { id } = req.params;
  const { title, date, time, location, description } = req.body;

  const result = await events.updateOne(
    { _id: new ObjectId(id), userId: req.user.userId },
    {
      $set: { title, date, time, location, description },
    }
  );

  res.json({ message: "Event updated successfully", result });
};

// Delete Event
const deleteEvent = async (req, res) => {
  const events = getEventsCollection();
  const { id } = req.params;

  const result = await events.deleteOne({
    _id: new ObjectId(id),
    userId: req.user.userId,
  });
  res.json({ message: "Event deleted successfully", result });
};

module.exports = {
  addEvent,
  getAllEvents,
  joinEvent,
  getMyEvents,
  updateEvent,
  deleteEvent,
};
