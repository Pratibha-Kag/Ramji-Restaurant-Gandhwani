import express from "express";
import {
  createOrder,
  verifyPayment,
} from "../controllers/paymentController.js";
import authMiddleware from "../middleware/auth.js";

const paymentRouter = express.Router();
// console.log("paymentRoute.js loaded");
paymentRouter.post("/create-order", authMiddleware, createOrder);

paymentRouter.post("/verify-payment", (req, res) => {
  // console.log("VERIFY ROUTE HIT");
  res.json({
    success: true,
    message: "Route Working",
  });
});
paymentRouter.get("/test", (req, res) => {
  res.send("Payment Route Working");
});
export default paymentRouter;
