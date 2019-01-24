import React from "react";
import "./style.css";
import API from "../../utils/API";

class UserModal extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    isSuperUser: false,
    isActive: true,
    setSuperUser: false,
    setDisable: false,
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  };

  handleManagerChecked = () => {
    this.setState({ setSuperUser: true });
  };

  handleEmployeeChecked = () => {
    this.setState({ setSuperUser: false });
  };

  handleDisableChecked = () => {
    this.setState({ setDisable: true });
  };

  handleSubmit = () => {
    if (this.props.user === "") {
      console.log("I ran!");
      console.log(this.props.user)
      const fullname = this.state.firstName + " " + this.state.lastName;
      if (this.state.password1 == this.state.password2) {
        API.addUser({
          name: fullname,
          email: this.state.email,
          password: this.state.password1,
          isSuperUser: this.state.setSuperUser,
          isActive: true //this.state.setDisable
        })
          .then(res => this.props.handleClose())
          .catch(err => console.log(err));
      } else {
          const fullname = this.state.firstName + " " + this.state.lastName;
          if (this.state.password1 == this.state.password2) {
            API.updateUser({
              name: fullname,
              email: this.state.email,
              password: this.state.password1,
              isSuperUser: this.state.setSuperUser,
              isActive: true //this.state.setDisable
            })
              .then(res => this.props.handleClose())
              .catch(err => console.log(err));
          };     
        };
    };
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.isSuperUser) {
      if (this.props.isActive) {
        this.setState({
          isSuperUser: this.props.isSuperUser,
          isActive: this.props.isActive,
          email: this.props.email,
          setSuperUser: true,
          setDisable: false
        });
      } else {
        this.setState({
          isSuperUser: this.props.isSuperUser,
          email: this.props.email,
          setSuperUser: true,
          setDisable: true
        });
      };
    } else {
      if (this.props.isActive) {
        this.setState({
          isActive: this.props.isActive,
          email: this.props.email,
          setSuperUser: false,
          setDisable: false
        })
      } else {
        this.setState({
          isActive: this.props.isActive,
          email: this.props.email,
          setSuperUser: false,
          setDisable: true
        })
      }
    };    
  };

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    
    var firstName = this.props.user.split(' ').slice(0, -1).join(' ');
    var lastName = this.props.user.split(' ').slice(-1).join(' ');
    

    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          <div className="modalContent">

            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" defaultValue={firstName} onChange={this.handleInputChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" defaultValue={lastName} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" defaultValue={this.props.email} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="newPass">New password</label>
                <input type="password" className="form-control" name="password1" id="newPass" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPass">Confirm new password</label>
                <input type="password" className="form-control" name="password2" id="confirmPass" onChange={this.handleInputChange} />
              </div>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Position</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" id="gridRadios1" checked={!this.state.setSuperUser} onChange={this.handleEmployeeChecked}/>
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Employee
                    </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" id="gridRadios2" checked={this.state.setSuperUser} onChange={this.handleManagerChecked}/>
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Manager
                    </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="form-group row">
                <div className="col-sm-2">Access</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" checked={!this.state.isActive} onChange={this.handleDisableChecked}/>
                    <label className="form-check-label" for="gridCheck1">
                      Disable this account
                  </label>
                  </div>
                </div>
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

export default UserModal;