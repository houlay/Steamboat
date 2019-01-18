import React from "react";
import "./style.css";

function ProdCard(props) {
  return (
    <div className='card'>
      <div className='card-header'>
        <h5 className='card-title'>{props.prodname}</h5>
        <a className='btn btn-success'>EDIT</a>
      </div>
      <div className='card-body'>
        <p className='card-text'>Inventory availability: 00/00</p>
        <p className='card-text'>Anything can be added here</p>
      </div>
    </div>
  );
};

export default ProdCard;