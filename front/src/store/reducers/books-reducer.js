import { GET_BOOKS, GET_BOOK, FILTER_BOOKS, FILTER_GENRE, FRESH_PAGE } from "../constants";

const initialState = {
  list: [],
  filtered: [],
  emptySearch: false,
  selected: {},
  AllGenres: [],
  firstTime: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return Object.assign({}, state, { selected: action.book, firstTime: false });
    case GET_BOOKS:
      return Object.assign({}, state, { list: action.books, selected: {}, firstTime: false});
    case FILTER_BOOKS:
      return Object.assign({}, state, {
        filtered: action.books,
        emptySearch: action.emptySearch,
        firstTime: false
      });
    case FILTER_GENRE:
      return Object.assign({}, state, { AllGenres: action.genres, firstTime: false });
    case FRESH_PAGE:
        return Object.assign({}, state, { firstTime: false });
    default:
      return state;
  }
};
