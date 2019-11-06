import {connect} from "react-redux"
import Login from '../components/Login';
import React, { Component } from 'react';


class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            userName: 'pepito',
            password: '1234'
        }
    }
}

const mapStateToProps = (state) => {
  return {
      loggedName: ''
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

  export default connect(mapStateToProps, mapDispatchToProps)(Login)
  export default LoginContainer;