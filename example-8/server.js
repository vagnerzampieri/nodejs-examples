import express from "express";
import mongoose from "mongoose";

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
mongoose.connect("mongodb://172.20.0.2:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

app.listen(3000);
