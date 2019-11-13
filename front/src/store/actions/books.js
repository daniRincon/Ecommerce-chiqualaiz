import axios from "axios";
import {
  GET_BOOKS,
  GET_BOOK,
  FILTER_BOOKS,
  GET_GENRES,
  FILTER_GENRE,
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

const receiveGenres = genres => ({
  type: GET_GENRES,
  genres
});

const filterGenre = genres => ({
  type: FILTER_GENRE,
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

export const filteredGenres = (books, genres) => dispatch => {
  let sGenres = [];
  for (let i = 0; i < genres.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if (books[j].id == genres[i]) {
        sGenres.push(books[j].books);
      }
    }
  }
  const flat = flattenDeep(sGenres);
  const total = eliminarObjetosDuplicados(flat, "id");
  dispatch(filteredBooks(total));
};

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}

function eliminarObjetosDuplicados(arr, prop) {
  let nuevoArray = [];
  let lookup = {};

  for (let i in arr) {
    lookup[arr[i][prop]] = arr[i];
  }
  for (let i in lookup) {
    if (lookup[i].visible) {
      nuevoArray.push(lookup[i]);
    }
  }
  return nuevoArray;
}

export const filterBooks = (searchValue, books) => dispatch => {
  const filtBooks = books.filter(book =>
    book.titulo.toLowerCase().match(searchValue.toLowerCase())
  );
  const emptySearch = filtBooks.length ? false : true;
  dispatch(filteredBooks(filtBooks, emptySearch));
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
  return axios.post('/api/books/review', {alias, titulo, content, id} )
}
