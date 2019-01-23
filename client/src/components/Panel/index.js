import React from "react";
import "./style.css";

function Panel(props) {
  <div className='panel panel-default'>
    <div className='panel-heading'>
      {props.children}
    </div>
  </div>
}