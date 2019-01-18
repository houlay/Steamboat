import React from "react";
import "./style.css";

function PageTitle(props) {
  return <div className='PageTitle'><h2>{props.children}</h2></div>
};

export default PageTitle;