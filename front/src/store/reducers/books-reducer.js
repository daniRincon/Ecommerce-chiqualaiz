import { GET_BOOKS, GET_BOOK } from "../constants";

const initialState = {
  list: [],
  selected: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return Object.assign({}, state, { selected: action.book });
    case GET_BOOKS:
      return Object.assign({}, state, { list: action.books });
    default:
      return state;
  }
};
