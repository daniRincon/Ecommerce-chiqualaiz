import React, { Component } from "react";
import { connect } from "react-redux";
import Kart from "../components/Kart";

const mapStateToProps = ({ kart }) => ({
  kart: kart.list
});

export default connect(mapStateToProps)(Kart);
