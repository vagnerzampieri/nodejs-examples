import express from "express";
import { Post } from "../models/Post";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Post.remove({ _id: req.params.id });
    res.json({ message: "Removed post" });
  } catch (error) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    const post = await Post.find(req.params.id);

    res.json(post);
  } catch (error) {
    res.json({ message: err });
  }
});

export { router as postRouter };
