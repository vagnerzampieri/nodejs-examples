import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import graphqlHTTP from "express-graphql";
import { Schema } from "./schema/schema";

const app = express();

dotenv.config();

// Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true
  })
);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000);
