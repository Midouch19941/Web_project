const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const authMiddleware = require("../middlewares/authMiddleware");

// Login route
router.post("/login", AuthController.login);

router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "You have access to this protected route" });
});

router.get("/user", authMiddleware, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
