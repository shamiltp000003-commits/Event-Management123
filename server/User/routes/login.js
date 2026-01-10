import express from "express";
import { Login } from "../controller/Auth/login.js";

const router = express.Router();

router.post("/login", Login);

export default router;
