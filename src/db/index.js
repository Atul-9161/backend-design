import mongoose from "mongoose";
import dns from "dns";

// FIX: Force public DNS servers to bypass the Node.js 24 SRV resolution bug
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log("MONGODB_URI =", process.env.MONGODB_URI);
  console.log("DB_NAME =", DB_NAME);

  const connection = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DB_NAME}`
  );

  console.log(`MongoDB connected: ${connection.connection.host}`);
  return connection;
};

export default connectDB;