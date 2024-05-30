import { Router } from "express";
import { register, refresh } from "../controllers/auth.controller.js";

const router = Router();

router.get("/api/auth/refresh", refresh);

router.get("/api/auth/register", register);

export default router;
