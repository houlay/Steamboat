import React from "react";
import "./style.css";
import API from "../../utils/API";
import SalesResult from "../SalesResult";


class SalesForm extends React.Component {

  state = {
    products: [],
    firstname: "",
    lastname: "",
    email: "",
    packageChosen: "",
    orderId: "",
    customerName: "",
    orderDate: "",
    show: false
  };

  componentWillMount() {
    API.getPackages()
    .then(res => {
      console.log(res);
      let validPackages = res.data.filter(arr => (arr.occupants != 0));
      this.setState({ products: validPackages });
    })
    .catch(err => console.log(err));
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
    let fullName = this.state.firstname + " " + this.state.lastname;
    let packageId;
    let originalOccupants;
    let orderId;
    let customerName;
    let orderDate;
    event.preventDefault();
    API.getPackageByName({
      name: this.state.packageChosen
    })
      .then(res => {
        packageId = res.data[0].id;
        originalOccupants = res.data[0].occupants;
        API.addCustomer({
          name: fullName,
          email: this.state.email,
          PackageId: packageId,
        })
          .then(res => {
            let updatePackage = res.data.PackageId
            let updateOccupants = originalOccupants - 1;
            orderId = res.data.id;
            customerName = res.data.name;
            orderDate = res.data.createdAt;

            API.updatePackageOccupants({
              id: updatePackage,
              occupants: updateOccupants
            })
              .then(res => {
                console.log(res)
                this.setState({
                  orderId: orderId,
                  customerName: customerName,
                  orderDate: orderDate,
                  show: true,
                  // Reset the form
                  firstname: "",
                  lastname: "",
                  email: "",
                  packageChosen: "Choose a package"
                });
              })
              .catch(err => console.log(err))            
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
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
            <input name="email" value={this.state.email} type="email" className="form-control" id="email" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="package">Package</label>
            <select id="package" className="form-control" name="packageChosen" value={this.state.packageChosen} onChange={this.handleInputChange}>
              <option defaultValue="selected">Choose a package</option>
              {this.state.products.map((pack) => <option name="packageChosen" value={pack.key} key={pack.key}>{pack.name}</option>)}
            </select>
          </div>

          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Process this order</button>
        </form>
        <SalesResult
          name={this.state.customerName}
          orderId={this.state.orderId}
          show={this.state.show}
        />
      </div>
    )
  };
};

export default SalesForm;