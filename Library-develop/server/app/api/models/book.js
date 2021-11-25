const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, require: true },
    author: { type: String, require: true },
    editorial: { type: String, require: true },
    genre: { type: String, require: true },
    year: { type: Number, require: true },
  },
  { timestamps: true }
);

const Book = mongoose.model("books", BookSchema);
module.exports = Book;
