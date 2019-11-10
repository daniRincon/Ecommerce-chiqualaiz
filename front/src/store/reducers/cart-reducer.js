import { ADD_CART } from "../constants";

const initialState = {
};

export default (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case ADD_CART:
      return Object.assign({}, state, {  [action.book.id]: [1, action.book.precio, action.book.titulo]  });
    default:
      return state;
  }
};
