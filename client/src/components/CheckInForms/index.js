import React from "react";
import "./style.css";
import LookupResult from "../LookupResult";
import API from "../../utils/API";

class CheckInForms extends React.Component {
  
  state = {
    show: false,
    viaName: "",
    viaResvNum: "",
    isCheckedin: false,
    orderDate: "",
    customerName: "",
    notFound: false,
  }

  handleCheckIn = (customerId) => {
    API.checkinCustomer({
      id: customerId
    })
      .then(res => {
        console.log(res);
        this.setState({ isCheckedin: true });
      })
      .catch(err => console.log(err));
  };

  handleCancel = (customerId) => {
    API.deleteCustomer({
      id: customerId
    })
      .then(res => {
        console.log(res);
        this.setState({ notFound: true });
      })
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.viaName) {
      API.getCustomerbyFullName({
        name: this.state.viaName
      })
        .then(res => {
          console.log(res.data);
          if (res.data.length === 0) {
            this.setState({ notFound: true, show: true });
          } else {
            this.setState({
              show: true,
              isCheckedin: res.data[0].isCheckedin,
              orderDate: res.data[0].createdAt,
              customerName: this.state.viaName,
              notFound: false,
              customer: res.data[0].id
            });
          }
        })
        .catch(err =>console.log(err));
    };
    if (this.state.viaResvNum) {
      API.getCustomerById({
        id: this.state.viaResvNum
      })
        .then(res => {
          if (res.data.length === 0) {
            this.setState({ notFound: true, show: true })
          } else {
            console.log(res.data);
            this.setState({
              show: true,
              isCheckedin: res.data[0].isCheckedin,
              orderDate: res.data[0].createdAt,
              customerName: res.data[0].name,
              notFound: false,
              customer: res.data[0].id
            });
          }
        })
        .catch(err => console.log(err));
        
    }

    
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className='form-group'>
          <label className='inputLabel' htmlFor='viaName'>Lookup via customer name</label>
          <input 
            name="viaName" 
            value={this.state.viaName} 
            className='form-control' 
            type='text' 
            placeholder='Enter either first name or last name' 
            id='viaName'
            onChange={this.handleInputChange}
          />
          </div>
          <div className='form-group'>
            <label className='inputLabel' htmlFor='viaResvNum'>Lookup via order number</label>
            <input 
              name="viaResvNum" 
              value={this.state.viaResvNum} 
              className='form-control' 
              type='text' 
              placeholder='Enter reservation #' 
              id='viaResvNum'
              onChange={this.handleInputChange}
            />
          </div>
          <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Lookup</button>
        </form>

        <LookupResult 
          show={this.state.show}
          isCheckedin={this.state.isCheckedin}
          orderDate={this.state.orderDate}
          customerName={this.state.customerName}
          customer={this.state.customer}
          notFound={this.state.notFound}
          handleCheckIn={this.handleCheckIn}
          handleCancel={this.handleCancel}
        />

      </div>
    )
  };
};

export default CheckInForms;