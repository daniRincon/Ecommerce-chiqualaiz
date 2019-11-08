import axios from "axios";
import { GET_BOOKS, GET_BOOK } from "../constants";

const receiveBooks = books => ({
  type: GET_BOOKS,
  books
});

const receiveBook = book => ({
  type: GET_BOOK,
  book
});

export const fetchBooks = () => dispatch =>
  axios
    .get("/books")
    .then(res => res.data)
    .then(books => dispatch(receiveBooks(books)));

export const fetchBook = id => dispatch =>
  axios
    .get("/books/:id")
    .then(res => res.data)
    .then(book => dispatch(receiveBook(book)));
