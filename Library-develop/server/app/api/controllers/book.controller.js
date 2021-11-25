const Book = require("../models/book");

const HTTPSTATUSCODE = require("../../utils/httpStatusCode");


const getAllBooks = async (req, res, next) => {
  try {
    if (req.query.page) { 
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const books = await Book.find().skip(skip).limit(50);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { books: books},
      });
    } else {
      const books= await Book.find();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { books: books},
      });
    }
  } catch (err) {
    return next(err);
  }
};


const getBookById = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const bookById = await Book.findById(bookId);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { books: bookById }
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
}

