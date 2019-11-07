import axios from "axios";
import { GET_USER } from "../constants/index";
const getUser = user => ({
  type: GET_USER,
  user
});

const logUser = logUser => ({
  type: LOG_USER,
  logUser
});

export const fetchUser = user => dispatch => {
  dispatch(getUser(user));
};

export const loguser = () => dispatch =>
  axios
    .post("/login")
    .then(res => res.data)
    .then(user => dispatch(logUser(user.data)));

export const signUpUser = function(userData) {
  return function(dispatch) {
    axios.post("/register", userData).then(res => {
      console.log(res.data, "user created");
      return res.data;
    });
  };
};
