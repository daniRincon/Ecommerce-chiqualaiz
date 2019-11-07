import { GET_BOOKS, GET_BOOK} from '../actions' 

const initialState = {
    list: [],
    selected: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
      case GET_BOOK:
        return Object.assign({}, state, { singleBook: action.book });
      case GET_BOOKS:
        return Object.assign({}, state, { books: action.books });
      default:
        return state;
    }
  }