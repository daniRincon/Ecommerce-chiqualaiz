import axios from "axios";
import { ADD_KART } from "../constants";

const addKart = kart => ({
  type: ADD_KART,
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
