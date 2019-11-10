import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Author = mongoose.model("Authors", AuthorSchema);
export { Author };
