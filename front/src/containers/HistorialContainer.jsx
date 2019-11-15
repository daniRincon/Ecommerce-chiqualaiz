import React, { Component } from 'react';
import { connect } from 'react-redux';
import Historial from "../components/Historial"
import { fetchPedido } from "../store/actions/users"


class HistorialContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id){
        this.props.fetchHistorial(id)
    }

    render() {       
        return (
            <div>
                {this.props.user.loggedName?  <Historial historial={this.props.user.historial} click={this.handleClick}/>:"" }   
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = (dispatch) => ({
    fetchHistorial: (id) => dispatch(fetchPedido(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HistorialContainer);