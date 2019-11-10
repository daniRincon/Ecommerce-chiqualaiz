import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import booksReducer from "./books-reducer";
import cartReducer from "./cart-reducer"


export default combineReducers({
  user: userReducer,
  books: booksReducer,
  genres: booksReducer,
  cart: cartReducer
});
