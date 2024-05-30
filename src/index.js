import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Routes
import authRoutes from "./routes/auth.routes.js";
import moviesRoutes from "./routes/movies.routes.js";

// Initialize express
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(authRoutes);
app.use(moviesRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
