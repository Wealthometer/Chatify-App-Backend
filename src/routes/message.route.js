import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Send message endpoint");
});

router.get("/receive", (req, res) => {
  res.send("Receive message endpoint");
});

// router.get("/logout", (req, res) => {
//   res.send("Logout endpoint");
// });

export default router;
