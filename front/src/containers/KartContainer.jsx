import { connect } from "react-redux";
import Kart from "../components/Kart";
import { delCart, incCart, decCart } from "../store/actions/cart";

const calculateTotal = arrayBook => {
  return parseFloat(
    arrayBook.reduce(
      (total, book, index, cart) => total + Number(book[1] * cart[index][0]),
      0
    )
  ).toFixed(2);
};

const handleClick = (total, history) => {
  history.push("/checkout");
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  delFromCart: id => dispatch(delCart(id)),
  handleDecrement: id => dispatch(decCart(id)),
  handleIncrement: id => dispatch(incCart(id)),
  calculateTotal,
  handleClick
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kart);
