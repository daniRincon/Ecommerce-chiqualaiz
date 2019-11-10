import { ADD_CART, DEL_CART } from "../constants";

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return Object.assign({}, state, {  [action.book.id]: [1, action.book.precio, action.book.titulo]  });
    case DEL_CART:
      delete state[action.id]
      return Object.assign({}, state, { ...state  });
    default:
      return state;
  }
};
