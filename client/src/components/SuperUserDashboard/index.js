import React from "react";
import "./style.css";

function SuperUserDashboard(props) {
  return (
    <div className="SuperUserDashboard-container">
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>Current Packages:</h5>
          <span>{props.totalPackage}</span>
        </div>
        <div className='card-body'>
          {props.products.map((product) => <p className='card-text'>{product.name}</p>)}
        </div>
      </div>

      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>Packages low on inventory:</h5>
          <span>{props.packageLow.length}</span>
        </div>
        <div className='card-body'>
          {props.packageLow.map((low) => <div><p className='floatLeft'>{low.name}</p><i className="floatRight">Remaining: {low.occupants}</i></div>)}
        </div>
      </div>

      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>Current active employees:</h5>
          <span>{props.userCount}</span>
        </div>
        <div className='card-body'>
          {props.users.map(user => <p className='card-text'>{user.name}</p>)}
        </div>
      </div>
    </div>
  );
};

export default SuperUserDashboard;