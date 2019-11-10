import React from "react";
import SearchBarContainer from "../containers/SearchBarContainer";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
import logo from "../../../back/public/images/logo_transparent.png";
import "../css-modules/navBar.module.css";

export default props => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="col-lg-3">
        <Link to="/">
          <img src={logo} width="auto" height="40" alt="" />
        </Link>
      </div>
      <div className="bar col-lg-5">
        <SearchBarContainer books={props.books} />
      </div>

      <button className="btn btn-info" onClick={props.fetchKart}>
        Kart
      </button>

      {props.loggedName ? (
        <div className="col-lg-4 login">
          <button
            className="btn btn-danger"
            onClick={() => {
              props.history.push("/");
              props.handleLogOut();
            }}
          >
            Logout
          </button>
          <Greeting name={props.loggedName} />
        </div>
      ) : (
        <div className="col-lg-4 login">
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-info"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};
