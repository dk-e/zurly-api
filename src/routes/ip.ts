import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const ip = req.ip;
  res.send(ip);
});

export default router;
