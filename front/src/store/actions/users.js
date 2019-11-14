import axios from "axios";
import MyEmail from "../../components/Mail";
import { renderEmail } from "react-html-email";
import React  from "react";

import { GET_USER, LOG_USER, SET_HISTORIAL, GET_USERS } from "../constants/index";

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

export const setHistorial = historial => ({
  type: SET_HISTORIAL,
  historial
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
    .then(() => dispatch(userHistorial()))
    .catch(err => {
      throw err;
    });
};

export const userHistorial = () => dispatch => {
  axios.get("/api/pedidos/historial")
  .then(res => {
    return dispatch(setHistorial(res.data));
  })
  .catch(err => console.error(err));
};

export const userLogOut = () => dispatch => {
  axios
    .delete("/api/sessions")
    .then(() => {
      dispatch(getUser({}));
    })
    .then(() => {
      dispatch(setHistorial({}));
      dispatch(emptyCart(true));
    })
    .catch(error => console.error(error));
};


export const placeOrder = user => dispatch => {
  return axios
    .post("/api/pedidos", {
      messageHtml: renderEmail(<MyEmail name={user.name} />),
      name: user.name,
      to: user.email
    })
    .then(() => {
      dispatch(userHistorial())
      dispatch(emptyCart());
    })
    .catch(err => console.error(err))
};
