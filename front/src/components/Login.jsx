import React from "react";

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
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
            <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
              <form onSubmit={ (e) => {
                $('#exampleModal').modal('hide')
                props.handleSubmit(e)
              }
              } action="/login" method="POST">
                <div className="form-group">
                  <label>Usuario</label>
                  <input
                    onChange={event =>
                      props.handleUserInput(event.target.value)
                    }
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
                    placeholder="Ingresar Contraña"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <p className="lead mt-4 text-center">
                No Account?{" "}
              
                <button
                className="btn btn-primary btn-block text-center"
                data-toggle="modal" data-target="#register"
                  style={{ border: "none", backgroudColor: "white" }}
             
                >Register
                 
                </button>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};
