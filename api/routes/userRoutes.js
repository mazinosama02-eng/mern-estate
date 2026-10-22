import express from "express";
import userTest from "./../Controllers/userController";

const router = express.Router();

router.get("/test", userTest);

export default router;
