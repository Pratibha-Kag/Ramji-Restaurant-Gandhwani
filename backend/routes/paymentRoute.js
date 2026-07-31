import express from "express";
import {
  createOrder,
  verifyPayment,
} from "../controllers/paymentController.js";
import authMiddleware from "../middleware/auth.js";

const paymentRouter = express.Router();
console.log("paymentRoute.js loaded");
paymentRouter.post("/create-order", authMiddleware, createOrder);

paymentRouter.post("/verify-payment", authMiddleware, verifyPayment);
paymentRouter.get("/test", (req, res) => {
  res.send("Payment Route Working");
});
export default paymentRouter;
