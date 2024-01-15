import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

import ipRoute from "./routes/ip";

const app = express();

app.set("trust-proxy", true);
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.redirect("/ip");
});

app.use("/ip", ipRoute);

app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server is now running on port ${process.env.PORT || 3000}`)
);
