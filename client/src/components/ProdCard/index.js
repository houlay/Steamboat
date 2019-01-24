import React from "react";
import "./style.css";

function ProdCard(props) {
  let productData = {
    name: props.product,
    occupants: props.occupants,
    cost: props.cost,
    id: props.productId
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <h5 className='card-title'>{props.product}</h5>
        <a className='btn btn-success' onClick={() => (props.showModal(productData))}>EDIT</a>
      </div>
      <div className='card-body'>
        <p className='card-text'>Inventory availability: {props.occupants} left</p>
        <p className='card-text'>Cost per occupant: {props.cost}</p>
      </div>
    </div>
  );
};

export default ProdCard;