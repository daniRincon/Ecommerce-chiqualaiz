const express = require("express");
const router = express.Router();

const {fetchBooks, fetchBook} = require("../resolvers/books");

router.get("/", fetchBooks);

router.get('/:id', () => console.log(req.params))

module.exports = router;
