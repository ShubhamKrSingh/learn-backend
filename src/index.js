import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import connectDB from "./db";
// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection FAILED !!", err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
