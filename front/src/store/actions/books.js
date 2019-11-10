import axios from "axios";
import { GET_BOOKS, GET_BOOK, FILTER_BOOKS } from "../constants";

const receiveBooks = books => ({
  type: GET_BOOKS,
  books
});

const receiveBook = book => ({
  type: GET_BOOK,
  book
});

const filteredBooks = books => ({
  type: FILTER_BOOKS,
  books
});

export const fetchBooks = () => dispatch =>
  axios
    .get("/api/books")
    .then(res => res.data)
    .then(books => dispatch(receiveBooks(books)));

export const fetchBook = id => dispatch =>
  axios
    .get(`/api/books/${id}`)
    .then(res => res.data)
    .then(book => dispatch(receiveBook(book)));

export const filterBooks = (searchValue, books) => dispatch => {
  const filtBooks = books.filter(book =>
    book.titulo.toLowerCase().match(searchValue.toLowerCase())
  );
  dispatch(filteredBooks(filtBooks));
};

export const addBook = (book) => dispatch => {
  return axios.post('/api/books', book)
    .then(book => dispatch(receiveBook(book)))
    .catch(err => {
        throw err
    })
};

export const updateBook = (book) => dispatch => {
  return axios.put(`/api/books/${book.id}`, book)
    .then(book => dispatch(receiveBook(book)))
    .catch(err => {
        throw err
    })
};

