import express from "express";
import { signUp } from "./../Controllers/authController";

const router = express.Router();

router.post("/signup", signUp);

export default router;
