import React from "react";
import "./style.css";

function UserCard(props) {
  return (
    <div className='card'>
      <div className='card-header'>
        <h5 className='card-title'>{props.username}</h5>
        <a className='btn btn-success'>EDIT</a>
      </div>
      <div className='card-body'>
        <p className='card-text'>Last activity at: {props.time}</p>
      </div>
    </div>
  );
};

export default UserCard;