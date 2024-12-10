const Book = require("../models/bookModel");

// Fetch all books
exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

// Fetch a book by ID
exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

// Create a new book
exports.createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

// Update a book
exports.updateBook = async (req, res, next) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

// Delete a book
exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(204).json({ message: "Book deleted" });
  } catch (error) {
    next(error);
  }
};
