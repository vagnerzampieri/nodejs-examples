import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postRouter } from "./routes/posts";

const app = express();

dotenv.config();

// Middleware
app.use("/posts", postRouter);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000);
