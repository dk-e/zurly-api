"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.post("/", (req, res) => {
    console.log("Cookies received:", req.body.cookies);
    res.sendStatus(200);
});
exports.default = router;
