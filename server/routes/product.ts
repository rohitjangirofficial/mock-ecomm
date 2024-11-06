import { Router } from "express";
const productRouter = Router();
import {
  getAllProducts,
  getProductBySlug,
  checkout,
  paymentVerification,
  validateOrderToken,
} from "../controllers/product";

// Routes
productRouter.get("/", getAllProducts);

productRouter.post("/checkout", checkout);

productRouter.post("/payment-verification", paymentVerification);

productRouter.get("/validate-order-token", validateOrderToken);

productRouter.get("/:slug", getProductBySlug);

export default productRouter;
