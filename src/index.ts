import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import ipRoute from "./routes/ip";
import agentRoute from "./routes/agent";

const app = express();

app.set("trust-proxy", true);
app.disable("x-powered-by");

app.use(cors());

app.get("/", (req, res) => {
  const home = {
    success: false,
    message: "Missing authorisation key",
  };
  res.json(home);
});

app.use("/ip", ipRoute);
app.use("/agent", agentRoute);

app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server is now running on port ${process.env.PORT || 3000}`)
);
