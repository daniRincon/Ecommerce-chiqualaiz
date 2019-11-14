import axios from "axios";
import { setHistorial, userHistorial } from "./users";
import { emptyCart } from "./cart";
import { renderEmail } from "react-html-email";
import React from "react";
import MyEmail from "../../components/Mail";



export const placeOrder = user => dispatch => {
console.log(user.name + 'soy el user del axios')
console.log(user.email)
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

