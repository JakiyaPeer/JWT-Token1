import express from "express";
import { loginUser, registerUser } from "../Controllers/userController.js";
import authMiddleware from "../Middleware/authMiddleware.js";


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getuser",authMiddleware,getUser)

export default router;
