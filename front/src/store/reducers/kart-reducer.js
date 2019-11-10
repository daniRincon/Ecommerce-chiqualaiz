import { ADD_KART, GET_KART } from "../constants";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_KART:
      return Object.assign({}, state, {
        list: [...state.list, action.kart]
      });
    case GET_KART:
      return Object.assign({}, state, {
        list: action.kart
      });
    default:
      return state;
  }
};
