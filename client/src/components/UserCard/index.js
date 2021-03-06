import React from "react";
import "./style.css";

function UserCard(props) {

  let userData = {
    username: props.username,
    email: props.email,
    isSuperUser: props.isSuperUser,
    isActive: props.isActive
  }

  var timeStamp = props.updatedAt.slice(0, 19).replace("T", " ");

  return (
    <div className='card'>
      <div className='card-header' id={props.isActive ? "active" : "inactive"}>
        <h5 className='card-title'>{props.username}</h5>
        <a className='btn btn-success' onClick={() => (props.showModal(userData))}>EDIT</a>
      </div>
      <div className='card-body'>
        <p className='card-text'>Last activity at: {timeStamp}</p>
      </div>
    </div>
  );
};

export default UserCard;