import React from "react";
import styles from "../css-modules/register.module.css";

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
            <div className="modal-header">
              <h1 className="text-center" id="registerText">
                <i className="fas fa-sign-in-alt"></i> Register
              </h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={e => $("#exampleModal").modal("hide")}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <form
                onSubmit={event => {
                  this.props.handleSubmit(event);
                }}
              >
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    type="name"
                    id="name-register"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    onChange={this.props.handleChange}
                  />
                </div>{" "}
                <div className="form-group">
                  <label>Apellido</label>
                  <input
                    type="lastname"
                    id="lastname-register"
                    name="lastname"
                    className="form-control"
                    placeholder="Apellido"
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Nombre de usuario</label>
                  <input
                    type="text"
                    id="usernameLogin"
                    name="username"
                    className="form-control"
                    placeholder="Nombre de usuario"
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    id="passwordRegister"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Correo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo"
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Dirección</label>
                  <input
                    type="address"
                    id="address"
                    name="address"
                    className="form-control"
                    placeholder="Dirección"
                    onChange={this.props.handleChange}
                  />
                </div>
                <h5 className="text-danger">{this.props.warning}</h5>
                <button
                  type="submit"
                  className={"btn btn-block " + styles.submit}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
