import express from "express";
import { User } from "../models/User";

const router = express.Router();

// /api/user/register
router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).send(err);
  }
});

export { router as authRouter };
