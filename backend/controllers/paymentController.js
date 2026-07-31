import razorpay from "../config/razorpay.js";
import crypto from "crypto";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const verifyPayment = async (req, res) => {
  console.log("Verify Payment API Hit");
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderData,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.json({
        success: false,
        message: "Payment Verification Failed",
      });
    }

    const newOrder = new orderModel({
      userId: req.userId,
      items: orderData.items,
      amount: orderData.amount,
      address: orderData.address,

      payment: true,

      razorpay_order_id,
      razorpay_payment_id,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(req.userId, {
      cartData: {},
    });

    res.json({
      success: true,
      message: "Payment Verified",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};
