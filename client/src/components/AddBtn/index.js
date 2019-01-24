import React from "react";
import "./style.css";

function AddBtn(props) {
  if (props.showModal) {
    return (
      <div className='AddBtn'>
        <button className='btn btn-secondary' type='button' onClick={() => (props.showModal(""))}>{props.children}</button>
      </div>
    );
  } else {
    return (
      <div className='AddBtn'>
        <button className='btn btn-secondary'  type='button' onClick={props.handleRefresh}>{props.children}</button>
      </div>
    );
  };
};

export default AddBtn;