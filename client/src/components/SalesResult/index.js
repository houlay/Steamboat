import React from "react";
import "./style.css";

function SalesResult(props) {
  const showHideResult = props.show ? "resultDisplay" : "resultDisplay-hide";

  return (
    <div className={showHideResult}>
        <div className="container">
        <div className="card">
          <div className="card-body" id="result">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Order number: {props.orderId}</h6>
            <p className="card-text">Order has been processed.</p>
            <p className="card-text">Please pass on this information to the customer.</p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default SalesResult;