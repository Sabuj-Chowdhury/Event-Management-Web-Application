require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { connectDB } = require("./DB/connect");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB and Start Server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
