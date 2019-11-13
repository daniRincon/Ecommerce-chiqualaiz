import axios from "axios";
import { setHistorial, userHistorial } from "./users";
import { emptyCart } from "./cart";
export const placeOrder = () => dispatch => {
  axios
    .post("/api/checkout")
    .then(res => {
      res.data; //pedido created
    })
    .then(() => {
      dispatch(userHistorial());
      dispatch(emptyCart());
    });
};
