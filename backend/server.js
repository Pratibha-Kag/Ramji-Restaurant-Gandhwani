import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dns from "dns"; //ye line youtube wale ne add nhi kri hai error aa rhi isiliye add ki h
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]); //ye line youtube wale ne add nhi kri hai error aa rhi isiliye add ki h

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
console.log("ENV TEST:", process.env.CLOUDINARY_API_KEY);
