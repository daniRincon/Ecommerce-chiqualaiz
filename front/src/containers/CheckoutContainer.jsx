import { connect } from "react-redux";
import CheckoutComponent from "../components/Checkout";

const calculateTotal = arrayBook => {
  return parseFloat(
    arrayBook.reduce(
      (total, book, index, cart) => total + Number(book[1] * cart[index][0]),
      0
    )
  ).toFixed(2);
};

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  calculateTotal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutComponent);
