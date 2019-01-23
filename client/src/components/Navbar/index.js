import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

function Navbar(props) {
  console.log(props)
  return(
    <div className='navbar-container'>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <a className="navbar-brand" href="/dashboard">Welcome, {props.name}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            {/* <a className = {props.activeStatus1} href="/dashboard">Dashboard</a> */}
            <Link className={props.activeStatus1} to={"/dashboard"}>Dashboard</Link>
            <Link className={props.activeStatus2} to={props.hrefOne}>{props.optionOne}</Link>
            <Link className={props.activeStatus3} to={props.hrefTwo}>{props.optionTwo}</Link>
            {/* <a className = {props.activeStatus2} href={props.hrefOne}>{props.optionOne}</a>
            <a className = {props.activeStatus3} href={props.hrefTwo}>{props.optionTwo}</a> */}
            <a className = "nav-item nav-link" href="/">Log Out</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;