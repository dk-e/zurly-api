import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const agent = req.headers["user-agent"];

  res.status(200).type("text/plain").send(agent);
});

export default router;
