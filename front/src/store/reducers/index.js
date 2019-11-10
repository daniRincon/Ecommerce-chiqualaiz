import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import booksReducer from "./books-reducer";
import kartReducer from "./kart-reducer";

export default combineReducers({
  user: userReducer,
  books: booksReducer,
  kart: kartReducer
});
