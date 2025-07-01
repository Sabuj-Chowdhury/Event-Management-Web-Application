const express = require("express");
const router = express.Router();
const { register, login, getMe } = require("../controllers/authController");
const verifyJWT = require("../middlewares/verifyJWT");

router.post("/register", register);
router.post("/login", login);

// Protected route to get authenticated user
router.get("/me", verifyJWT, getMe);

module.exports = router;
