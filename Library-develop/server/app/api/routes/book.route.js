const express = require("express");

const router = express.Router();

const { isAuth } = require("../../middlewares/auth.middleware")


const { getAllBooks, getBookById } = require("../controllers/book.controller");

router.get("/", [isAuth], getAllBooks);
router.get("/:bookId", getBookById);

module.exports = router;