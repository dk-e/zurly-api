import express from "express";
const router = express();

router.post("/", (req, res) => {
    console.log("Cookies received:", req.body.cookies);
    res.sendStatus(200);
});

export default router;
