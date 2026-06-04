import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://pratibhakags29_db_user:Prati3456@cluster0.m0rw5xu.mongodb.net/Ramji",
    )
    .then(() => console.log("DB Connected 🚀"));
};
