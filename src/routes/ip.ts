import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const ip = req.headers["x-real-ip"] || req.socket.remoteAddress;
  res.status(200).type("text/plain").send(ip);
});

export default router;
