import express from "express";

const router = express.Router();

app.get("/api/auth/signup", (req, res) => {
  res.send("Signup endpoint");
});

app.get("/api/auth/login", (req, res) => {
  res.send("Login endpoint");
});

app.get("/api/auth/logout", (req, res) => {
  res.send("Logout endpoint");
});

export default router;
