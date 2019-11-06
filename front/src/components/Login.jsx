import React from 'react';

export default (props) =>{
    return (


      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
              <div className="card card-body">
                <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
                <form onSubmit={props.handleSubmit} action="/login" method="POST">
                  <div className="form-group">
                    <label>Usuario</label>
                    <input
                      onChange={(event) => props.handleUserInput(event.target.value)}
                      type="text"
                      id="userName"
                      name="userName"
                      className="form-control"
                      placeholder="Ingresar Usuario"
                    />
                  </div>
                  <div className="form-group">
                    <label>Contraña</label>
                    <input
                      onChange={(event) => props.handlePasswordInput(event.target.value)}
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Ingresar Contraña"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                <p className="lead mt-4">
                  No Account? <a href="/users/register">Register</a>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>





            )
}