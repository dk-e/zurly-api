import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const ip = req.ip;
  res.type("text/plain");
  res.send(ip);
});

export default router;
