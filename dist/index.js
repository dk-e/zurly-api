"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const ip_1 = __importDefault(require("./routes/ip"));
const agent_1 = __importDefault(require("./routes/agent"));
1337;
Route;
from;
"./routes/1337";
const json_1 = __importDefault(require("./routes/ip/json"));
const json_2 = __importDefault(require("./routes/agent/json"));
const app = (0, express_1.default)();
app.set("trust-proxy", true).disable("x-powered-by").use((0, cors_1.default)());
// Home route
app.get("/", (req, res) => {
    const routes = {
        ip: "/ip",
        agent: "/agent",
        json: "Add /json to routes for JSON format",
    };
    res.status(200).json({ routes });
});
// Raw routes
app.use("/ip", ip_1.default);
app.use("/agent", agent_1.default);
app.use("/1337", 1337, Route);
// JSON routes
app.use("/ip/json", json_1.default);
app.use("/agent/json", json_2.default);
// 404
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "404 - Not found",
    });
});
app.listen(process.env.PORT || 3000, () => console.log(`🚀 Server is now running on port ${process.env.PORT || 3000}`));
