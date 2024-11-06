import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const _config = {
  PORT: process.env.PORT,
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

export const config = Object.freeze(_config);
