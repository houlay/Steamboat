import React from "react";
import "./style.css";

const ProdModal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="modalContent">

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="prodName">Package Name</label>
                <input type="text" class="form-control" id="prodName" defaultValue={props.product} />
              </div>
            </div>
              

            <fieldset class="form-group">
              <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Position</legend>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                    <label class="form-check-label" for="gridRadios1">
                      Employee
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label class="form-check-label" for="gridRadios2">
                      Manager
                    </label>
                  </div>                  
                </div>
              </div>
            </fieldset>

            <div class="form-group row">
              <div class="col-sm-2">Access</div>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label" for="gridCheck1">
                    Disable this account
                  </label>
                </div>
              </div>
            </div>
          </form>

        </div>
        <div className="btn-container">
        <button className="btn btn-success">Save</button>
        <button className="btn btn-primary" onClick={props.handleClose}>Close</button>
        </div>

      </div>
    </div>
  );
};

export default ProdModal;