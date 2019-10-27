import express from "express";
import { User } from "../models/User";
import { registerValidation } from "../validations/register";

const router = express.Router();

// /api/user/register
router.post("/register", async (req, res) => {
  // validate schema
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // cheking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

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
