import { connect } from "react-redux";
import Kart from "../components/Kart";

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kart);
