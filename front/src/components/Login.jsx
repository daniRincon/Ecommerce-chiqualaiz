import React from 'react';

export default (props) =>{
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <div className="card card-body">
                <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
                <form action="/login" method="POST">
                  <div className="form-group">
                    <label for="email">Usuario</label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      className="form-control"
                      placeholder="Ingresar Usuario"
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
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
    )
}