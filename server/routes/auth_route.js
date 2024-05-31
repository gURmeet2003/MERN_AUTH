import express from "express";
import { signup } from "../controllers/auth_controller.js";

const authrouter = express.Router();

authrouter.post("/", signup);

export default authrouter;
