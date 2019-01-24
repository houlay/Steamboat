import React from "react";
import "./style.css";

function LookupResult(props) {
  const showHideResult = props.show ? "resultDisplay" : "resultDisplay-hide";
  const showCheckInStatus = props.isCheckedin ? "already checked in." : "not yet checked in.";
  const hideCheckInBtn = props.isCheckedin ? "hide" : "show";
  var timeStamp = props.orderDate.slice(0, 19).replace("T", " ");

  if(!props.notFound) {
    return (
      <div className={showHideResult}>
          <div className="container">
          <div className="card">
            <div className="card-body" id="result">
              <h5 className="card-title">{props.customerName}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Order placed at: </h6>
              <p className="card-text">{timeStamp}</p>
              <p className="card-text">This customer has {showCheckInStatus}</p>
              <button className="btn btn-primary" id={hideCheckInBtn} onClick={()=> props.handleCheckIn(props.customer)}>Check In</button>
              <button className="btn btn-danger" id={hideCheckInBtn} onClick={() => props.handleCancel(props.customer)}>Cancel reservation</button>
            </div>
          </div>
          </div>
        </div>
    );
  } else {
    return (
      <div className={showHideResult}>
        <div id="noResult">
          <p>No matching records were found!!</p>
          <p>Please double-check your input.</p>
        </div>
      </div>
    );
  };
};

export default LookupResult;