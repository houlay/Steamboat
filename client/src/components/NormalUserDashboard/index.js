import React from "react";
import "./style.css";

function NormalUserDashboard(props) {
  return (
    <div className="SuperUserDashboard-container">
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>Waiting to be checked in:</h5>
          <span>{props.customers.length}</span>
        </div>
        <div className='card-body'>
          {props.customers.map((customer) => <p className='card-text'>{customer.name}</p>)}
        </div>
      </div>

      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>Available packages for sale:</h5>
          <span>{props.products.length}</span>
        </div>
        <div className='card-body'>
          {props.products.map((product) => <div><p className='floatLeft'>{product.name}</p><i className="floatRight">Remaining: {product.occupants}</i></div>)}
        </div>
      </div>
    </div>      
  );
};

export default NormalUserDashboard;