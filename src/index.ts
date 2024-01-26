import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import ipRoute from "./routes/ip";
import agentRoute from "./routes/agent";

import ipRouteJson from "./routes/ip/json";
import agentRouteJson from "./routes/agent/json";

const app = express();

app.set("trust-proxy", true).disable("x-powered-by").use(cors());

app.get("/", (req, res) => {
  const home = {
    success: false,
    message: "Missing authorisation key",
  };
  res.json(home);
});

// Raw routes
app.use("/ip", ipRoute);
app.use("/agent", agentRoute);

// JSON routes
app.use("/ip/json", ipRouteJson);
app.use("/agent/json", agentRouteJson);

// 404
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "404 - Not found",
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server is now running on port ${process.env.PORT || 3000}`)
);
