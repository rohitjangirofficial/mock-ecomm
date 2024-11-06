"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const product_1 = __importDefault(require("./routes/product"));
const razorpay_1 = __importDefault(require("razorpay"));
const app = (0, express_1.default)();
//Global Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
// Razorpay
exports.instance = new razorpay_1.default({
    key_id: config_1.config.RAZORPAY_KEY_ID,
    key_secret: config_1.config.RAZORPAY_KEY_SECRET,
});
// Routes
app.use("/api/v1/products", product_1.default);
//Error Handle Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    return res.status(statusCode).json({
        message,
        success: false,
    });
});
//Start Server
app.listen(config_1.config.PORT, () => console.log(`Server is running on port: ${config_1.config.PORT}`));
