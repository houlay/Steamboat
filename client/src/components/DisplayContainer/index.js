import React from "react";
import "./style.css";

function DisplayContainer(props) {
  return <div className="DisplayContainer">{props.children}</div>;
}

export default DisplayContainer;