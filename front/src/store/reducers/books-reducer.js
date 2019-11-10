import { GET_BOOKS, GET_BOOK, FILTER_BOOKS, FILTER_GENRE } from "../constants";
import { CardActions } from "@material-ui/core";

const initialState = {
  list: [],
  filtered: [],
  selected: {},
  AllGenres: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return Object.assign({}, state, { selected: action.book });
    case GET_BOOKS:
      return Object.assign({}, state, { list: action.books });
    case FILTER_BOOKS:
      return Object.assign({}, state, { filtered: action.books });
    case FILTER_GENRE:
      return Object.assign({}, state, { AllGenres: action.genres })
    default:
      return state;
  }
};
