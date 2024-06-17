import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    console.log("Cookies received:", req.body.cookies);
    res.sendStatus(200);
});

export default router;
