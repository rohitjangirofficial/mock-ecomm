"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
const product_1 = require("../controllers/product");
// Routes
productRouter.get("/", product_1.getAllProducts);
productRouter.post("/checkout", product_1.checkout);
productRouter.post("/payment-verification", product_1.paymentVerification);
productRouter.get("/validate-order-token", product_1.validateOrderToken);
productRouter.get("/:slug", product_1.getProductBySlug);
exports.default = productRouter;
