import { ADD_CART, DEL_CART } from "../constants";

const addToCart = book => ({
  type: ADD_CART,
  book
})

const delFromCart = id => ({
  type: DEL_CART,
  id
})

export const addCart = (book) => dispatch => {
  return dispatch(addToCart(book))
};

export const delCart = (id) => dispatch => {
  return dispatch(delFromCart(id))
}

