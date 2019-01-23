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
        <a className='btn btn-secondary' href="/dashboard" role='button'>{props.children}</a>
      </div>
    );
  };
};

export default AddBtn;