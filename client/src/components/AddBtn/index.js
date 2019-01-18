import React from "react";
import "./style.css";

function AddBtn(props) {
  return (
    <div className='AddBtn'>
      <button className='btn btn-secondary' type='button'>{props.children}</button>
    </div>
  );
};

export default AddBtn;