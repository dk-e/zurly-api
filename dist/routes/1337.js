"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post("/collect", (req, res) => {
    console.log("Cookies received:", req.body.cookies);
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
exports.default = app;
