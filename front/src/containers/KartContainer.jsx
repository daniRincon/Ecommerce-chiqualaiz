import { connect } from "react-redux";
import Kart from "../components/Kart";
import { delCart, incCart, decCart } from "../store/actions/cart";

const mapStateToProps = state => ({
  cart: state.cart,
  userId : state.user.loggedName.id
});

const mapDispatchToProps = dispatch => ({
  delFromCart: (id, userId) => dispatch(delCart(id, userId)),
  handleDecrement: (id, userId) => dispatch(decCart(id, userId)),
  handleIncrement: (id, userId) => dispatch(incCart(id, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kart);
