import axios from "axios";
import { ADD_KART, GET_KART } from "../constants";

const addKart = kart => ({
  type: ADD_KART,
  kart
});

const getKart = kart => ({
  type: GET_KART,
  kart
});

export const fetchToKart = ([user, book, kart]) => dispatch => {
  if (kart.filter(e => e.bookId === book.id).length) {
    axios
      .put(`/api/books/${book.id}`, user)
      .then(res => res.data)
      .then(book => dispatch(addKart(book)));
  } else {
    axios
      .post(`/api/books/${book.id}`, user)
      .then(res => res.data)
      .then(book => dispatch(addKart(book[0])));
  }
};

export const fetchKart = user => dispatch => {
  axios
    .post("/api/kart/", user)
    .then(res => res.data)
    .then(kart => dispatch(getKart(kart)));
};
