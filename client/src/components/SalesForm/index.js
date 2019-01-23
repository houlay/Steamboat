import React from "react";
import "./style.css";

// for testing
var packageLists = [
  {
    key: 1,
    name: "Package ABC"
  },
  {
    key: 2,
    name: "Package XYZ"
  }
];

class SalesForm extends React.Component {

  state = {
    packageList: [],
    firstname: "",
    lastname: "",
    email: "",
    packageChosen: ""
  };

  componentDidMount() {
    this.setState({
      packageList: packageLists
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstname">First Name</label>
              <input name="firstname" value={this.state.firstname} type="text" className="form-control" id="firstname" onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastname">Last Name</label>
              <input name="lastname" value={this.state.lastname} type="text" className="form-control" id="lastname" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input name="email" value={this.state.email} type="email" className="form-control" id="email" placeholder="abc@xyz.com" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="package">Package</label>
            <select id="package" className="form-control" name="packageChosen" value={this.state.packageChosen} onChange={this.handleInputChange}>
              <option defaultValue="selected">Choose a package</option>
              {this.state.packageList.map((pack) => <option key={pack.key}>{pack.name}</option>)}
            </select>
          </div>
          
          {/* <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}
          <button type="submit" className="btn btn-primary">Process this order</button>
        </form>
      </div>
    )
  };
};

export default SalesForm;