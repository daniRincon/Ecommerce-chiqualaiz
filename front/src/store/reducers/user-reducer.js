
import { LOG_USER, GET_USER, SET_HISTORIAL, GET_USERS } from "../constants/index";

const initialState = {
  loggedName: "",
  historial: [],
   list: []

};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loggedName: action.user
      };
    case GET_USERS:
      return {
        ...state,
        list: action.users
      };
    case LOG_USER:
      return {
        ...state,
        loggedName: action.logUser
      };
    case SET_HISTORIAL:
      return {
        ...state,
        historial: action.historial
      };
    default:
      return state;
  }
}
