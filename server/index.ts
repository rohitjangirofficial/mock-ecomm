import express, { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import cors from "cors";
import { config } from "./config/config";

import productRouter from "./routes/product";
import Razorpay from "razorpay";

const app = express();

//Global Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Razorpay
export const instance = new Razorpay({
  key_id: config.RAZORPAY_KEY_ID as string,
  key_secret: config.RAZORPAY_KEY_SECRET as string,
});

// Routes
app.use("/api/v1/products", productRouter);

//Error Handle Middleware
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  return res.status(statusCode).json({
    message,
    success: false,
  });
});

//Start Server
app.listen(config.PORT, () =>
  console.log(`Server is running on port: ${config.PORT}`)
);


export default app