import axios from "axios";
import {
  GET_BOOKS,
  GET_BOOK,
  FILTER_BOOKS,
  GET_GENRES,
  FRESH_PAGE
} from "../constants";

const receiveBooks = books => ({
  type: GET_BOOKS,
  books
});

const receiveBook = book => ({
  type: GET_BOOK,
  book
});

const filteredBooks = (books, emptySearch) => ({
  type: FILTER_BOOKS,
  books,
  emptySearch
});

const filterGenre = genres => ({
  type: GET_GENRES,
  genres
});

const firstTimes = () => ({
  type: FRESH_PAGE
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

export const fetchGenre = () => dispatch =>
  axios
    .get("/api/books/genres")
    .then(res => res.data)
    .then(genres => dispatch(filterGenre(genres)));

// FILTRADO POR GÉNEROS

export const filteredGenres = id => dispatch => {
  axios
    .post(`api/books/genres/${id}`)
    .then(res => res.data)
    .then(books => {
      dispatch(filteredBooks(books));
    })
    .catch(err => console.log(err));
};

export const filterBooks = (searchValue, books) => dispatch => {
  const filtBooks = books.filter(book =>
    book.titulo.toLowerCase().match(searchValue.toLowerCase())
  );
  const emptySearch = filtBooks.length ? false : true;
  dispatch(filteredBooks(filtBooks, emptySearch));
};

export const sortBooks = (order, filtered, books) => dispatch => {
  /* const filtBooks = books.filter(book =>
    book.titulo.toLowerCase().match(searchValue.toLowerCase())
  );
  const emptySearch = filtBooks.length ? false : true;
  dispatch(filteredBooks(filtBooks, emptySearch));*/
};

export const addBook = book => dispatch => {
  return axios
    .post("/api/books", book)
    .then(book => dispatch(receiveBook(book)))
    .catch(err => {
      throw err;
    });
};

export const updateBook = book => dispatch => {
  return axios
    .put(`/api/books/${book.id}`, book)
    .then(book => dispatch(receiveBook(book)))
    .catch(err => {
      throw err;
    });
};

export const firstTime = () => dispatch => {
  return dispatch(firstTimes());
};

export const review = (alias, titulo, content, id) => dispatch => {
  return axios.post("/api/books/review", { alias, titulo, content, id });
};
