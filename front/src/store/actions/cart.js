import { ADD_CART, DEL_CART, INC_CART, DEC_CART } from "../constants";

const addToCart = book => ({
  type: ADD_CART,
  book
});

const delFromCart = id => ({
  type: DEL_CART,
  id
});

const incrementarCart = id => ({
  type: INC_CART,
  id
});

const decrementarCart = id => ({
  type: DEC_CART,
  id
});

export const addCart = book => dispatch => {
  return dispatch(addToCart(book));
};

export const delCart = id => dispatch => {
  return dispatch(delFromCart(id));
};

export const incCart = id => dispatch => {
  return dispatch(incrementarCart(id));
};

export const decCart = id => dispatch => {
  return dispatch(decrementarCart(id));
};
