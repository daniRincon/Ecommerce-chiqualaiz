import React from "react";
import SearchBarContainer from "../containers/SearchBarContainer";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
import logo from "../../../back/public/images/logo_transparent.png";
import styles from "../css-modules/navBar.module.css";
import Genres from "./Genres";
import Sort from "./Sort";

export default props => {
  return (
    <nav className={"navbar navbar-expand-sm " + styles.navbar}>
      <div className="col-lg-3">
        <Link to="/">
          <img src={logo} width="auto" height="40" alt="" />
        </Link>
      </div>

      <div className="bar col-lg-4">
        <SearchBarContainer
          books={props.books}
          filtered={props.filtered}
          history={props.history}
        />
      </div>
      <div className="bar col-lg-1">
        <Genres
          fetchGenre={props.fetchGenre}
          genres={props.genres}
          filteredGenres={props.filteredGenres}
        />
      </div>
      <div className="bar col-lg-1">
        <Sort
          books={props.books}
          filtered={props.filtered}
          filteredGenres={props.filteredGenres}
          history={props.history}
        />
      </div>
      {props.loggedName.permisos ? (
        <div className={"col-lg-3 " + styles.login}>
          {props.loggedName.permisos > 1 ? (
            <button
              className="btn btn-info"
              onClick={() => {
                props.history.push("/dashboard");
              }}
            >
              Dashboard
            </button>
          ) : (
            false
          )}
          <Greeting name={props.loggedName.name} />
          <button
            className="btn btn-danger"
            onClick={() => {
              props.history.push("/");
              props.handleLogOut(props.loggedName.id);
            }}
          >
            <span className="fas fa-sign-out-alt"></span>
            Logout
          </button>
        </div>
      ) : (
        <div className={"col-lg-3 " + styles.login}>
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-info"
          >
            <span className="fas fa-sign-in-alt"></span>
            Login
          </button>
        </div>
      )}
    </nav>
  );
};
