import axios from "axios";

export function placeOrder(cart, user) {
  axios.post("/api/checkout", { user: user, cart: cart }).then(pedido => {
    console.log(pedido);
  });
}
