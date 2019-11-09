import { GET_BOOKS, GET_BOOK, FILTER_BOOKS } from "../constants";

const initialState = {
  list: [],
  filtered: [],
  selected: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return Object.assign({}, state, { selected: action.book });
    case GET_BOOKS:
      return Object.assign({}, state, { list: action.books });
    case FILTER_BOOKS:
      return Object.assign({}, state, { filtered: action.books });
    default:
      return state;
  }
};
