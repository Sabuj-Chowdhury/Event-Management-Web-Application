const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUsersCollection } = require("../DB/collections");

const register = async (req, res) => {
  const users = getUsersCollection();

  const { name, email, password, photoURL } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const existingUser = await users.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await users.insertOne({
    name,
    email,
    password: hashedPassword,
    photoURL,
  });

  res.status(201).json({ message: "User registered successfully", result });
};

const login = async (req, res) => {
  const users = getUsersCollection();

  const { email, password } = req.body;

  const user = await users.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = jwt.sign(
    { userId: user._id, name: user.name, photoURL: user.photoURL },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, user: { name: user.name, photoURL: user.photoURL } });
};

const getMe = async (req, res) => {
  try {
    // req.user is added by verifyJWT middleware
    res.json(req.user);
  } catch (err) {
    res.status(500).json({ message: "Failed to get user info" });
  }
};

module.exports = { register, login, getMe };
