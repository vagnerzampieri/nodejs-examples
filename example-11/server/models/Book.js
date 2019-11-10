import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: String, re2quired: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Books", BookSchema);
export { Book };
