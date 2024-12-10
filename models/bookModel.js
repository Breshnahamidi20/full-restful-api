const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, "A book must have a title"] },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: String,
  rating: { type: Number, min: 1, max: 5 },
});

module.exports = mongoose.model("Book", bookSchema);
