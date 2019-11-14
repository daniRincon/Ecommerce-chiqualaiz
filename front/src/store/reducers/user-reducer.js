import {
  LOG_USER,
  GET_USER,
  SET_HISTORIAL,
  GET_USERS,
  SET_ADMINHISTORIAL
} from "../constants/index";

const initialState = {
  loggedName: "",
  historial: [],
  list: [],
  adminHistorial: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        loggedName: action.user
      });
    case GET_USERS:
      return Object.assign({}, state, {
        list: action.users
      });
    case LOG_USER:
      return Object.assign({}, state, {
        loggedName: action.logUser
      });
    case SET_HISTORIAL:
      return Object.assign({}, state, {
        historial: action.historial
      });
    case SET_ADMINHISTORIAL:
      return {
        ...state,
        adminHistorial: action.adminHistorial
      };
    default:
      return state;
  }
}
