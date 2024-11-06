"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderToken = exports.paymentVerification = exports.checkout = exports.getProductBySlug = exports.getAllProducts = void 0;
const products_1 = require("../data/products");
const http_errors_1 = __importDefault(require("http-errors"));
const verifyRazorpaySignature_1 = __importDefault(require("../utils/verifyRazorpaySignature"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const index_1 = require("../index");
const getAllProducts = (req, res, next) => {
    try {
        res.status(200).json(products_1.products);
    }
    catch (error) {
        return next(error);
    }
};
exports.getAllProducts = getAllProducts;
const getProductBySlug = (req, res, next) => {
    try {
        const { slug } = req.params;
        const product = products_1.products.find((product) => product.slug === slug);
        if (!product) {
            return next((0, http_errors_1.default)(400, "Product Not Found"));
        }
        return res.status(200).json(product);
    }
    catch (error) {
        return next(error);
    }
};
exports.getProductBySlug = getProductBySlug;
const checkout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const amount = req.body.amount;
        const options = {
            amount: Number(amount) * 100,
            currency: "INR",
        };
        const order = yield index_1.instance.orders.create(options);
        res.status(200).json({
            order,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.checkout = checkout;
const paymentVerification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const isValid = (0, verifyRazorpaySignature_1.default)(razorpay_order_id, razorpay_payment_id, razorpay_signature);
        if (isValid) {
            const token = jsonwebtoken_1.default.sign({ razorpay_payment_id }, config_1.config.JWT_SECRET, { expiresIn: "5m" });
            return res.redirect(`${config_1.config.FRONTEND_URL}/order-success?reference_id=${razorpay_payment_id}&token=${token}`);
        }
        res.status(200).json({
            message: "success",
            success: true,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.paymentVerification = paymentVerification;
const validateOrderToken = (req, res, next) => {
    const token = req.query.token;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.config.JWT_SECRET);
        console.log("decoded ", decoded);
        res.status(200).json({ valid: true });
    }
    catch (err) {
        return next((0, http_errors_1.default)(403, "Invalid or expired token"));
    }
};
exports.validateOrderToken = validateOrderToken;
