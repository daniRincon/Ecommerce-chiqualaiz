import { connect } from "react-redux";
import CheckoutComponent from "../components/Checkout";
import React, { Component } from "react";
import * as actions from "../store/actions/users";
import { bindActionCreators } from "redux";
import OrderPlaced from "../components/OrderPlaced";

import axios from "axios";

const calculateTotal = arrayBook => {
  return parseFloat(
    arrayBook.reduce(
      (total, book, index, cart) => total + Number(book[1] * cart[index][0]),
      0
    )
  ).toFixed(2);
};

class CheckoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      warning: "",
      orderPlaced: false,
      socialNetworkUser: /^(f|g)\d\d\d\d\d\d+/.test(this.props.user.loggedName.username)
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleClickHome = this.handleClickHome.bind(this);
  }

  handleClickHome() {
    this.props.history.push("/");
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = e.target[3].value? e.target[1].value : e.target[0].value;
    let cart = this.props.cart
    if (this.props.user.loggedName.id){
      this.state.socialNetworkUser? this.props.placeOrder(this.props.user.loggedName, email, cart)
                                  && this.setState({ warning: "", orderPlaced: true })
                                  : this.validPassword(this.state.password, email, cart);
    } else {
      return alert("Login required to purchase");
    }
  }
    

  validPassword(password, email, cart) {
    axios
      .post("/api/sessions/validation", { password })
      .then(res => res.data)
      .then(result => {
        if (result) {
          axios
            .patch("/api/books/stock", this.props.cart)
            .then(res => res.data)
            .then(result => {
              if (result) {
                this.setState({ warning: "", orderPlaced: true });
                this.props.placeOrder(this.props.user.loggedName, email, cart);
              } else {
                console.log("No hay suficiente stock para confirmar la compra");
              }
            });
        } else {
          this.setState({ warning: "La contraseña ingresada no es correcta" });
        }
      });
  }

  handlePasswordInput(password) {
    this.setState({ password });
  }

  render() {
    return (
      <div>
        {this.state.orderPlaced ? (
          <OrderPlaced
            name={this.props.user.loggedName.username}
            handleClickHome={this.handleClickHome}
          />
        ) : (
          <CheckoutComponent
            user={this.props.user.loggedName}
            cart={this.props.cart}
            warning={this.state.warning}
            calculateTotal={calculateTotal}
            handleSubmit={this.handleSubmit}
            handlePasswordInput={this.handlePasswordInput}
            socialNetworkUser={this.state.socialNetworkUser}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
