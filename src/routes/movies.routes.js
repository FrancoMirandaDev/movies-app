import { Router } from "express";
import { getMovies, addMovie } from "../controllers/movies.controller.js";
import protectRouter from "../middlewares/protectRouter.js";

const router = Router();

router.get("/api/movies", protectRouter, getMovies);

router.post("/api/movies/new", protectRouter, addMovie);

export default router;
