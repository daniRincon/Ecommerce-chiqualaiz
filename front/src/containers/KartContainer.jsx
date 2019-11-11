import { connect } from "react-redux";
import Kart from "../components/Kart";
import { delCart, incCart, decCart } from "../store/actions/cart";

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  delFromCart: id => dispatch(delCart(id)),
  handleDecrement: id => dispatch(decCart(id)),
  handleIncrement: id => dispatch(incCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kart);
