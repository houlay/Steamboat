import React from "react";
import "./style.css";
import LookupResult from "../LookupResult";

class CheckInForms extends React.Component {
  
  state = {
    show: false,
    viaName: "",
    viaResvNum: ""
  }

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
    this.setState({
      show: true
    });
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
            <label className='inputLabel' htmlFor='viaResvNum'>Lookup via reservation number</label>
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
        />

      </div>
    )
  };
};

export default CheckInForms;