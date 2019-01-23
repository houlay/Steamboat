import React from "react";
import "./style.css";

function LookupResult(props) {
  const showHideResult = props.show ? "resultDisplay" : "resultDisplay-hide";

  if(props) {
    return (
      <div className={showHideResult}>
          <div className="container">
          <div className="card">
            <div className="card-body" id="result">
              <h5 className="card-title">Lester</h5>
              <h6 className="card-subtitle mb-2 text-muted">Tester</h6>
              <p className="card-text">customer information here</p>
              <button className="btn btn-primary">Check In</button>
              <button className="btn btn-danger">Cancel reservation</button>
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