import { ADD_CART } from "../constants";

const addToCart = book => ({
  type: ADD_CART,
  book
})

export const addCart = (book) => dispatch => {
  return dispatch(addToCart(book))
};

