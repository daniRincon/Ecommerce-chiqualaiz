import { LOG_USER, GET_USER, GET_USERS, REF_USERS } from "../constants/index";

const initialState = {
  loggedName: "",
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
    default:
      return state;
  }
}
