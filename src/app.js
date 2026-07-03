import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";//why?
const app = express();
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN || "http://localhost:3000",
        credentials:true,
    }
));
app.use(express.json({limit: "50kb"}));
app.use(express.urlencoded({ extended: true, limit: "50kb" }));//isliye ye use hota hai ki jaise space ko url me kya de aur baki chijo ko url me cconvert kaise kare
app.use(cookieParser());
app.use(express.static("public")); // Serve static files from the "public" directory
//routes import
import userRoutes from "./routes/users.routes.js";//userRoutes naam se routes wale file se le liya
//routes declaration
app.use("/api/v1/users", userRoutes);//jaise hi koi user /users type kiya yha routes ho jayega
//http://localhost:8000/api/v1/users/register/login  ab manlo login banan hai to app me kuchh nahi karna routes me jaake /login ka route bana do aur controller me login ka function bana do

export { app };
