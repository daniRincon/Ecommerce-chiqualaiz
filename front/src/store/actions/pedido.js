import axios from "axios";
import { setHistorial, userHistorial } from "./users";
export const placeOrder = () => dispatch => {
  axios
    .post("/api/checkout")
    .then(res => {
      res.data; //pedido created
    })
    .then(() => {
      dispatch(userHistorial());
    });
};
