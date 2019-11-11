import { ADD_CART, DEL_CART, INC_CART, DEC_CART, GET_CART, EMPTY_CART } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return Object.assign({}, state, {
        [action.book.id]: [1, action.book.precio, action.book.titulo]
      });
    case DEL_CART:
      delete state[action.id];
      return Object.assign({}, state, { ...state });
    case INC_CART:
      const incCart = Object.assign({}, state, { ...state });
      incCart[action.id][0]++;
      return incCart;
    case DEC_CART:
      const decCart = Object.assign({}, state, { ...state });
      decCart[action.id][0]--;
      return decCart;
    case GET_CART:
      return Object.assign({}, state, { ...action.cart });
    case EMPTY_CART:
      return {}
    default:
      return state;
  }
};
