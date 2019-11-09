import React from "react";
import * as actions from "../store/actions/users";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Register from "../components/Register";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      address: "",
      warning: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUpUser(this.state)
    .then(() =>{
       $('#exampleModal').modal('show')
       $('#register').modal('hide')  
    })
    .catch(() => {
      this.setState({warning : 'Username or email already in use!'})
    })  ;
  }

  render() {
    return (
      <Register
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        warning={this.state.warning}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
