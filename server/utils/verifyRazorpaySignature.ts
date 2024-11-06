import crypto from "crypto";
import { config } from "../config/config";

function verifyRazorpaySignature(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  razorpaySignature: string
) {
  try {
    const generatedSignature = `${razorpayOrderId}|${razorpayPaymentId}`;

    const expectedSignature = crypto
      .createHmac("sha256", config.RAZORPAY_KEY_SECRET as string)
      .update(generatedSignature)
      .digest("hex");

    if (expectedSignature === razorpaySignature) {
      console.log("Signature verified successfully.");
      return true;
    } else {
      console.error("Signature verification failed.");
      return false;
    }
  } catch (error) {
    console.error("Error verifying Razorpay signature:", error);
    return false;
  }
}

export default verifyRazorpaySignature;
