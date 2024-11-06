"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const config_1 = require("../config/config");
function verifyRazorpaySignature(razorpayOrderId, razorpayPaymentId, razorpaySignature) {
    try {
        const generatedSignature = `${razorpayOrderId}|${razorpayPaymentId}`;
        const expectedSignature = crypto_1.default
            .createHmac("sha256", config_1.config.RAZORPAY_KEY_SECRET)
            .update(generatedSignature)
            .digest("hex");
        if (expectedSignature === razorpaySignature) {
            console.log("Signature verified successfully.");
            return true;
        }
        else {
            console.error("Signature verification failed.");
            return false;
        }
    }
    catch (error) {
        console.error("Error verifying Razorpay signature:", error);
        return false;
    }
}
exports.default = verifyRazorpaySignature;
