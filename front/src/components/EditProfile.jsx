import React from "react";

export default ({
  user,
  handleSubmit,
  handleChange,
  usernamefailed,
  passwordfailed,
  confirmpasswordfailed
}) => {
  return (
    <div
      className={"container"}
      style={{ backgroundColor: "white", marginTop: "15px" }}
    >
      <form
        className="needs-validation"
        noValidate
        onSubmit={e => handleSubmit(e)}
      >
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">Nombre</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="validationTooltip01"
              placeholder="First name"
              defaultValue={user.name}
              onChange={handleChange}
              required
            />
            <div className="valid-tooltip">Se ve bien!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Apellido</label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              id="validationTooltip02"
              placeholder="Last name"
              onChange={handleChange}
              defaultValue={user.lastname}
              required
            />
            <div className="valid-tooltip">Se ve bien!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltipUsername">Mail</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="validationTooltipUsernamePrepend"
                >
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="email"
                id="validationTooltipUsername"
                placeholder="Username"
                defaultValue={user.email}
                onChange={handleChange}
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">Ingresa un mail valido</div>
              <div className="valid-tooltip">Se ve bien!</div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Usuario</label>
            <input
              type="text"
              className="form-control"
              style={
                usernamefailed
                  ? { borderColor: "red" }
                  : { borderColor: "#ced4da" }
              }
              name="username"
              id="validationTooltip02"
              onChange={handleChange}
              placeholder="Last name"
              defaultValue={user.username}
              required
            />
            <div className="valid-tooltip">Se ve bien!</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip04">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="validationTooltip04"
              style={
                passwordfailed
                  ? { borderColor: "red" }
                  : { borderColor: "#ced4da" }
              }
              onChange={handleChange}
              placeholder="Ingrese Contraseña"
              required
            />
            <div className="invalid-tooltip">Contraseña inválida</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              style={
                confirmpasswordfailed
                  ? { borderColor: "red" }
                  : { borderColor: "#ced4da" }
              }
              name="confirmpass"
              id="validationTooltip05"
              onChange={handleChange}
              placeholder="Confirme Contraseña"
              required
            />
            <div className="invalid-tooltip">Contraseña inválida</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="validationTooltip02"
              placeholder="Last name"
              onChange={handleChange}
              defaultValue={user.address}
              required
            />
            <div className="valid-tooltip">Se ve bien!</div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Aceptar
        </button>
      </form>
    </div>
  );
};
