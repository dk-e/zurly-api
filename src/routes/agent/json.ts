import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const agent = req.headers["user-agent"];

    res.status(200).json({
        success: true,
        agent,
    });
});

export default router;
