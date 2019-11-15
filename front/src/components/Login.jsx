import React from "react";
import styles from "../css-modules/register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

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
                  id="usernameLogin"
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
                  id="passwordLogin"
                  name="password"
                  className="form-control"
                  placeholder="Ingresar Contraseña"
                  required
                />
              </div>
              <h5 className="text-danger">{props.warning}</h5>
              <button
                type="submit"
                className={"btn btn-block " + styles.submit}
              >
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No tienes cuenta?
              <button
                onClick={props.handleRegister}
                className="btn btn-link"
                data-toggle="modal"
                data-target="#register"
              >
                Crear cuenta
              </button>
            </p>
            <div className={styles.networks}>
              <a href="/api/sessions/auth/google/">
                <button href="#" className={styles.fa + " " + styles.google}>
                  <FontAwesomeIcon size="lg" icon={faGoogle} />
                </button>
              </a>

              <a href="/api/sessions/auth/facebook/">
                <button href="#" className={styles.fa + " " + styles.facebook}>
                  <FontAwesomeIcon size="lg" icon={faFacebookF} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
