import { connect } from "react-redux";
import Kart from "../components/Kart";
import { delCart, incCart, decCart, getCart, emptyCart } from "../store/actions/cart";
import { firstTime } from "../store/actions/books"

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
  cart: state.cart,
  userId : state.user.loggedName.id,
  firstTime: state.books.firstTime
});

const mapDispatchToProps = dispatch => ({
  delFromCart: (id, userId) => dispatch(delCart(id, userId)),
  handleDecrement: (id, userId) => dispatch(decCart(id, userId)),
  handleIncrement: (id, userId) => dispatch(incCart(id, userId)),
  fetchCart : (id, cart) => dispatch(getCart(id, cart)),
  refresh: () => dispatch(firstTime()),
  handleEmpty: () => dispatch(emptyCart()),
  calculateTotal,
  handleClick,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kart);
