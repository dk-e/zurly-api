import express from "express";
import useragent from "useragent";
const router = express.Router();

router.get("/", (req, res) => {
  const agent = useragent.parse(req.headers["user-agent"]).toString();
  res.json({
    success: true,
    agent,
  });
});

export default router;
