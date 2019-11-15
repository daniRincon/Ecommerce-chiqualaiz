import React, { Component } from "react";
import Pedido from "../components/Pedido";
import * as actions from "../store/actions/users"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

const calculateTotal = items => {
    return items.reduce((total,item)=> total+= item.book.precio * item.cantidad, 0)
  };
class PedidoContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
    componentDidMount(){
        this.props.fetchPedido(this.props.match.params.id) 
    }

    handleClick(id){
        this.props.history.push(`/books/${id}`)
    }

  render() {
    let total = this.props.user.pedidoSelected.items? this.props.user.pedidoSelected.items: []
    return (
      <div>
        {this.props.user.loggedName ? this.props.user.pedidoSelected.pedido?  <Pedido pedidoSelected={this.props.user.pedidoSelected} handleClick={this.handleClick} total={calculateTotal(total)} />: ""
         
         : (
          <div>Acceso denegado, por favor logueate en tu cuenta para ver tu historial de pedidos</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
  };

export default connect(mapStateToProps,mapDispatchToProps)(PedidoContainer);
