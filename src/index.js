import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });







/*
import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
        console.log("Connected to MongoDB");
        app.on("error", (err) => {
            console.error("Error connecting to MongoDB:", err);
        });
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();
*/