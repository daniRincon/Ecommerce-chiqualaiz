import {connect} from "react-redux"
import Login from '../components/Login';
import React, { Component } from 'react';
import { fetchUser, loginUser } from '../store/actions/users';


class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            warning: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.resetLoginState = this.resetLoginState.bind(this);
    }

    handleSubmit(event){
      event.preventDefault();
      this.props.loginUser(this.state.username, this.state.password)
      .then(() => $('#exampleModal').modal('hide'))
      .catch(() => {
        this.setState({
          username: '',
          password: '',
          warning : 'Wrong username or password'})
      })    
    }
    
    handleUserInput(username){
      this.setState({username})
    }
    
    handlePasswordInput(password){
      this.setState({password})
    }

    resetLoginState(){
      this.setState({
        username: '',
        password: '',
        warning: ''
      })
    }

    render(){
      return(
          <div>
              <Login 
                  handleSubmit={this.handleSubmit} 
                  handleUserInput={this.handleUserInput} 
                  handlePasswordInput={this.handlePasswordInput} 
                  warning={this.state.warning}
                  reset={this.resetLoginState}
              />
          </div>
      )
    }
    
}

const mapDispatchToProps = dispatch =>({
  fetchUser: user => dispatch(fetchUser(user)),
  loginUser: (username, password) => {
      return dispatch(loginUser(username, password))
  }
})

export default connect(null, mapDispatchToProps)(LoginContainer)
