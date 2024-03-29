import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = () => {
  try {
  } catch (error) {
    console.log("MongoDB connection ERROR: ", error);
    process.exit(1);
  }
};
