import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use("/posts", () => {
  console.log("This is a middleware running");
});

// Routes
app.get("/", (req, res) => {
  res.send({ message: "We are on home" });
});

app.get("/posts", (req, res) => {
  res.send({ message: "We are on posts" });
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000);
