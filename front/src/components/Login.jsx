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
          <div className="modal-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-sign-in-alt"></i> Login
              </h1>
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
              <p className="lead mt-4">
                No Account?{" "}
              
                <button
                data-toggle="modal" data-target="#register"
                  style={{ border: "none", backgroudColor: "white" }}
             
                >Register
                 
                </button>
                <button type="button" id="closeLogin" className="btn btn-secondary" data-dismiss="modal">Close</button>

              </p>
            </div>
        </div>
      </div>
    </div>
  );
};
