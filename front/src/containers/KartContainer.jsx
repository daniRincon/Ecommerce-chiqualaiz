import { connect } from "react-redux";
import Kart from "../components/Kart";
import { delCart } from "../store/actions/cart";

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  delFromCart: id => dispatch(delCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kart);
