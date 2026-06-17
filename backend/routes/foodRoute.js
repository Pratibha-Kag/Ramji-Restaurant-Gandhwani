import express from "express";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image storage Engine

// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ramji-foods",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});
// const upload = multer({ storage: storage });
const upload = multer({ storage });
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
export default foodRouter;
