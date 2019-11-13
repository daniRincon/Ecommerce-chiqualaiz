import { connect } from "react-redux";
import CheckoutComponent from "../components/Checkout";
import React, { Component } from 'react';
import * as actions from '../store/actions/pedido'
import { bindActionCreators } from "redux";



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
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleSubmit(e){
  e.preventDefault()
  this.props.placeOrder(this.props.user.loggedName)
 
}

  render() {
    console.log(this.props)
    return (
      <div>
        <CheckoutComponent user={this.props.user} cart={this.props.cart} calculateTotal={calculateTotal} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}




const mapStateToProps = ( state ) => {
  return state
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
