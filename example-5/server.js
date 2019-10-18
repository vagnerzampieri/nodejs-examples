import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send({ message: "Hello Express" });
});

server.listen(3000);
