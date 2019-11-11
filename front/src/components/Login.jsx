import React from "react";
import styles from "../css-modules/register.module.css";

export default props => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="text-center" id="registerText">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>
            <button
              type="button"
              id="closeLogin"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={e => {
                props.handleSubmit(e);
              }}
              action="/login"
              method="POST"
            >
              <div className="form-group">
                <label>Usuario</label>
                <input
                  onChange={event => props.handleUserInput(event.target.value)}
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Ingresar Usuario"
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  onChange={event =>
                    props.handlePasswordInput(event.target.value)
                  }
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Ingresar Contraseña"
                  required
                />
              </div>
              <h5 className="text-danger">{props.warning}</h5>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No Account?
              <button
                className="btn btn-link"
                data-toggle="modal"
                data-target="#register"
              >
                Register
              </button>
            </p>
            <div className={styles.networks}>
              <a href="/api/sessions/auth/google/">
                <button
                  href="#"
                  className={"fa fa-google " + styles.fa + " " + styles.google}
                ></button>
              </a>
              <a href="/api/sessions/auth/facebook/">
                <button
                  href="#"
                  className={
                    "fa fa-facebook " + styles.fa + " " + styles.facebook
                  }
                ></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
