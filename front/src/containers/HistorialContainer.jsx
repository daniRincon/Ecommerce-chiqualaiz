import React, { Component } from 'react';
import { connect } from 'react-redux';
import Historial from "../components/Historial"


class HistorialContainer extends Component {
    render() {


        return (
            <div>
                <Historial historial={this.props.user.historial}/>
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