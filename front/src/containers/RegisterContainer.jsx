import React from "react";
import * as actions from "../store/actions/users";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Register from "../components/Register"
class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name:"", lastname:"", username: "", email: "", password: "", address:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
       this.setState({ [target.name]: target.value })

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUpUser(this.state);
    // this.props.history.push("/users/login");
  }

  render() {
    return (
    <Register handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    );
  }
}

function mapStateToProps(state) {
  return {}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);