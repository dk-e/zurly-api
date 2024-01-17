"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const useragent_1 = __importDefault(require("useragent"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    const agent = useragent_1.default.parse(req.headers["user-agent"]).toString();
    res.type("text/plain").send(agent);
});
exports.default = router;
