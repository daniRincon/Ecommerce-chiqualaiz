import React, { useEffect } from "react";
import { connect } from "react-redux";
import EditProfile from "../components/EditProfile";
import { updateUser } from "../store/actions/users";

class EditProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpass: "",
      address: "",
      usernamefailed: false,
      confirmpasswordfailed: false,
      passwordfailed: false
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
    this.setState(
      {
        name: e.target[0].value,
        lastname: e.target[1].value,
        email: e.target[2].value,
        username: e.target[3].value,
        password: e.target[4].value,
        address: e.target[6].value
      },
      () => {
        if (!this.state.username) this.setState({ usernamefailed: true });
        if (!this.state.password) this.setState({ passwordfailed: true });
        else if (this.state.password !== this.state.confirmpass)
          this.setState({ confirmpasswordfailed: true, passwordfailed: false });
        else {
          this.props
            .updateUser({ ...this.state, id: this.props.user.id })
            .then(() => alert("Se actualizo tu perfil"))
            .then(() => this.props.history.push("/"));
        }
      }
    );
  }

  render() {
    return (
      <EditProfile
        user={this.props.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        usernamefailed={this.state.usernamefailed}
        passwordfailed={this.state.passwordfailed}
        confirmpasswordfailed={this.state.confirmpasswordfailed}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.loggedName
});

const mapDispatchToProps = dispatch => ({
  updateUser: userForUpdate => dispatch(updateUser(userForUpdate))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);
