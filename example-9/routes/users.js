import express from "express";
import { User } from "../models/User";
import { verifyToken } from "./verifyToken";

const router = express.Router();

// /api/users
router.get("/", verifyToken, async (req, res) => {
  try {
    const users = await User.find().select("_id name email date");
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

export { router as usersRouter };
