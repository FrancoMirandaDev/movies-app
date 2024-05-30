import { Router } from "express";
import { getTVShow, getEpisode } from "../controllers/tvshow.controller.js";
import protectRouter from "../middlewares/protectRouter.js";

const router = Router();

router.get("/api/TVShow", protectRouter, getTVShow);

router.get("/api/TVShow/:title/:season/:episode", protectRouter, getEpisode);

export default router;
