import React, { Component } from 'react';
import { connect } from 'react-redux';
import Historial from "../components/Historial"


class HistorialContainer extends Component {
    render() {

        let historial = this.props.user.loggedName? this.props.user.historial : []
        return (
            <div>
                <Historial historial={historial}/>
                
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state;
}
export default connect(
    mapStateToProps,
)(HistorialContainer);