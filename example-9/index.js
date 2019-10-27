import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import { authRouter } from "./routes/auth";
import { usersRouter } from "./routes/users";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route Middleware
app.use("/api/user", authRouter);
app.use("/api/users", usersRouter);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000);
