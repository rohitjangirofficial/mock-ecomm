import { NextFunction, Request, Response } from "express";
import { products } from "../data/products";
import createHttpError from "http-errors";
import verifyRazorpaySignature from "../utils/verifyRazorpaySignature";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import { instance } from "../index";

const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

const getProductBySlug = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const product = products.find((product) => product.slug === slug);

    if (!product) {
      return next(createHttpError(400, "Product Not Found"));
    }

    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

const checkout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const amount = req.body.amount;

    const options = {
      amount: Number(amount) * 100,
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
      order,
    });
  } catch (error) {
    next(error);
  }
};

const paymentVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const isValid = verifyRazorpaySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (isValid) {
      const token = jwt.sign(
        { razorpay_payment_id },
        config.JWT_SECRET as string,
        { expiresIn: "5m" }
      );

      return res.redirect(
        `${config.FRONTEND_URL}/order-success?reference_id=${razorpay_payment_id}&token=${token}`
      );
    }

    res.status(200).json({
      message: "success",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

const validateOrderToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.query.token;
  try {
    const decoded = jwt.verify(token as string, config.JWT_SECRET as string);
    console.log("decoded ", decoded);
    res.status(200).json({ valid: true });
  } catch (err) {
    return next(createHttpError(403, "Invalid or expired token"));
  }
};

export {
  getAllProducts,
  getProductBySlug,
  checkout,
  paymentVerification,
  validateOrderToken,
};
