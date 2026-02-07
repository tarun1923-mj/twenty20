require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const path = require("path");
const User = require("./User");

const app = express();
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("mongo connected"))
  .catch(err => console.log(err));

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// REGISTER
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!passwordRegex.test(password)) {
    return res.json({
      error: "password must be 8 chars, include uppercase, lowercase and number"
    });
  }

  const exists = await User.findOne({ email });
  if (exists) {
    return res.json({ error: "user already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });

  res.json({ success: true });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ error: "invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ error: "invalid credentials" });

  res.json({ success: true, email });
});

// ROUTES
app.get("/", (_, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
app.get("/register", (_, res) => res.sendFile(path.join(__dirname, "../public/register.html")));
app.get("/portfolio", (_, res) => res.sendFile(path.join(__dirname, "../public/portfolio.html")));

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
