require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/event");

const { connectDB } = require("./DB/connect");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Event Management Web Application API",
  });
});

// Connect to DB and Start Server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
