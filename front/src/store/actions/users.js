import axios from "axios";
import { GET_USER, LOG_USER, GET_USERS } from "../constants/index";
import { getCart, emptyCart, syncCart } from "./cart";

const getUser = user => ({
  type: GET_USER,
  user
});

const getUsers = users => ({
  type: GET_USERS,
  users
});

const logUser = logUser => ({
  type: LOG_USER,
  logUser
});

export const signUpUser = user => dispatch => {
  if (!user.password.length) throw Error("No password");
  return axios
    .post("/api/users", user)
    .then(user => true)
    .catch(err => {
      throw err;
    });
};

export const fetchUser = () => dispatch =>
  axios.get("/api/sessions").then(user => {
    dispatch(getUser(user.data));
    user.data.id && dispatch(getCart(user.data.id));
  });

export const fetchUsers = () => dispatch => {
  axios
    .get("/api/users/permisos")
    .then(users => {
      dispatch(getUsers(users.data));
    })
    .catch(err => console.log(err));
};
export const changePermission = ([value, id]) => dispatch => {
  axios
    .put(`/api/users/permisos`, { data: [value, id] })
    .then(users => dispatch(getUsers(users.data)));
};

export const delUsers = arrId => dispatch => {
  axios
    .delete(`/api/users/permisos`, { data: arrId })
    .then(users => dispatch(getUsers(users.data)));
};

export const loginUser = (username, password) => dispatch => {
  if (!password.length) throw Error("No password");
  return axios
    .post("/api/sessions", { username, password })
    .then(res => dispatch(logUser(res.data)))
    .then(() => dispatch(syncCart()))
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const userLogOut = id => dispatch => {
  axios
    .delete(`/api/carts/${id}`)
    .then(res => {
      dispatch(emptyCart());
    })
    .then(() => axios.delete("/api/sessions"))
    .then(() => {
      dispatch(getUser({}));
    })
    .catch(error => console.error(error));
};
