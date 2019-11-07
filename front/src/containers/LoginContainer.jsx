import {connect} from "react-redux"
import Login from '../components/Login';
import React, { Component } from 'react';
import { fetchUser } from '../store/actions/users';
import axios from 'axios';


class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            userName: '',
            password: '',
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    handleSubmit(event){
      console.log('handeSubmit')
      event.preventDefault();
      if(this.state.userName && this.state.password){
          axios.post('/api/login', this.state)
          .then(res=> this.props.fetchUser(res.data))
          return this.props.history.push('/')
      };
      
    }
    
    handleUserInput(userName){
      console.log('handleUser')
      this.setState({userName})
    }
    
    handlePasswordInput(password){
      console.log('handlePassword')
      this.setState({password})
    }
    
    render(){
      return(
          <div>
              <Login 
                  handleSubmit={this.handleSubmit} 
                  handleUserInput={this.handleUserInput} 
                  handlePasswordInput={this.handlePasswordInput} 
              />
          </div>
      )
    }
    
}


const mapDispatchToProps = dispatch =>({
  fetchUser: user => dispatch(fetchUser(user))
})

export default connect(null, mapDispatchToProps)(LoginContainer)
