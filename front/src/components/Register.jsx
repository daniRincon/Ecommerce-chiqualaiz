import React from "react";


export default class Register extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="register"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="card card-body">
                <h1 className="text-center mb-3">
                  <i className="fas fa-sign-in-alt"></i> Register
                </h1>
                <form
                  action="/register"
                  method="POST"
                  onSubmit={this.props.handleSubmit}
                >
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter name"
                      onChange={this.props.handleChange}
                    />
                  </div>{" "}
                  <div className="form-group">
                    <label>Lastname</label>
                    <input
                      type="lastname"
                      id="lastname"
                      name="lastname"
                      className="form-control"
                      placeholder="Enter lastname"
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="address"
                      id="address"
                      name="address"
                      className="form-control"
                      placeholder="Enter address"
                      onChange={this.props.handleChange}
                    />
                  </div>
                   <button  type="submit"  className="btn btn-primary btn-block">
                    Sign up
                  </button>

                </form>
                <button type="button" id="closeRegister" className="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
