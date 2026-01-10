import express from "express";
import { signup} from "../controller/Auth/SignUp.js"

const router = express.Router();

router.post("/signup", signup);

export default router;
