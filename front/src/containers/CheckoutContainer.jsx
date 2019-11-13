import { connect } from "react-redux";
import CheckoutComponent from "../components/Checkout";
import React, { Component } from "react";
import * as actions from "../store/actions/pedido";
import { bindActionCreators } from "redux";
import OrderPlaced from "../components/OrderPlaced"

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
  constructor(props){
    super(props)
    this.state = {
      password: "",
      warning: "",
      orderPlaced: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleClickHome=this.handleClickHome.bind(this)


  }


  handleClickHome(){
    this.props.history.push("/")
    
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.user.loggedName.id) {
      this.validPassword(this.state.password);
    } else {
      return alert("Login required to purchase");
    }
  }

  validPassword(password) {
    console.log("pass", password);
    axios
      .post("/api/sessions/validation", { password })
      .then(res => res.data)
      .then(result => {
        if (result) {
          this.props.placeOrder();
          this.setState({ warning: "" , orderPlaced: true});
        } else {
          this.setState({ warning: "La contraseña ingresada no es correcta" });
        }
      });
  }

  handlePasswordInput(password) {
    this.setState({ password });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.state.orderPlaced? <OrderPlaced  name={this.props.user.loggedName.username} handleClickHome={this.handleClickHome}/>  :   <CheckoutComponent
          user={this.props.user.loggedName}
          cart={this.props.cart}
          warning={this.state.warning}
          calculateTotal={calculateTotal}
          handleSubmit={this.handleSubmit}
          handlePasswordInput={this.handlePasswordInput}
        />}       

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
