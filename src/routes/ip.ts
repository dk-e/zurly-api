import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  res.type("text/plain");
  res.send(ip);
});

export default router;
