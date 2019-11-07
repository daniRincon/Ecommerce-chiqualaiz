import {connect} from "react-redux"
import Login from '../components/Login';
import React, { Component } from 'react';
import { fetchUser } from '../store/actions/users';
import axios from 'axios';


class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    handleSubmit(event){
      event.preventDefault();
      if(this.state.username && this.state.password){
          axios.post('/login', this.state)
          .then(res=> { 
             return this.props.fetchUser(res.data)})
          return this.props.history.push('/')
      };
      
    }
    
    handleUserInput(username){
      this.setState({username})
    }
    
    handlePasswordInput(password){
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
