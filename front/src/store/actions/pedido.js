import axios from "axios";
import { setHistorial, userHistorial } from "./users";
import { renderEmail } from "react-html-email";
import React from "react";
import MyEmail from "../../components/Mail";
import { emptyCart } from "./cart";


export const placeOrder = user => dispatch => {

//export const placeOrder = () => dispatch => {
  axios
    .post("/api/checkout", {
      messageHtml: renderEmail(<MyEmail name={user.name} />),
      name: name,
      to: user.email
    })
    .then(res => {
      res.data;
    })
    .then(() => {
      dispatch(userHistorial());
      dispatch(emptyCart());
    });
}

