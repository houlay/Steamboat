import React from "react";
import "./style.css";
import API from "../../utils/API";

class ProdModal extends React.Component {

  state = {
    productName: "",
    occupants: "",
    cost: "",
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    let occupantInteger = parseInt(this.state.occupants);
    let costFloat = parseFloat(this.state.cost);

    event.preventDefault();
    if (this.props.product === "") {
      API.addPackage({
        name: this.state.productName,
        occupants: occupantInteger,
        costPerOccupant: costFloat
      })
      .then(res => {
        this.props.handleClose();
      })
      .catch(err => console.log(err))      
    } else {
      console.log(this.props.productId)
      API.updatePackageOccupants({
        id: this.props.productId,
        occupants: occupantInteger
      })
      .then(res => {
        console.log(res);
        this.props.handleClose();
      })
      .catch(err => console.log(err))
    };
  };

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (      
      <div className={showHideClassName}>
        <div className="modal-main">
          <div className="modalContent">

            <form>
              <div className="form-group">
                <label htmlFor="productName">Package Name</label>
                <div>
                  <input type="text" className="form-control" id="productName" name="productName" defaultValue={this.props.product} onChange={this.handleInputChange} />
                </div>
              </div>
                
              <div className="form-group">
                <label htmlFor="occupants">Available spot left</label>
                <input type="text" className="form-control" id="occupants" name="occupants" defaultValue={this.props.occupants} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="cost">Cost per occupant</label>
                <input type="text" className="form-control" id="cost" name="cost" defaultValue={this.props.cost} onChange={this.handleInputChange} />
              </div>
            </form>

          </div>
          <div className="btn-container">
          <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
          <button className="btn btn-primary" onClick={this.props.handleClose}>Close</button>
          </div>

        </div>
      </div>
    );
  };
};

export default ProdModal;