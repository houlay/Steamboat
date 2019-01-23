import React from "react";
import "./style.css";

class UserModal extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    isSuperUser: false,
    isActive: false
  }

  componentWillMount() {
    if (this.props.user.isSuperUser) {
      if (this.props.user.isActive) {
        this.setState({
          isSuperUser: true,
          isActive: true,
          email: this.props.user.email
        });
      } else {
        this.setState({
          isSuperUser: true,
          email: this.props.user.email
        });
      };
    } else {
      if (this.props.user.isActive) {
        this.setState({
          isActive:true,
          email: this.props.user.email
        })
      };
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
                  <input type="text" class="form-control" id="firstName" defaultValue={firstName} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" class="form-control" id="lastName" defaultValue={lastName} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" class="form-control" id="email" defaultValue={this.state.email}/>
              </div>
              <div className="form-group">
                <label htmlFor="newPass">New password</label>
                <input type="password" class="form-control" id="newPass" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPass">Confirm new password</label>
                <input type="password" class="form-control" id="confirmPass" />
              </div>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Position</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked={!this.state.isSuperUser}/>
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Employee
                    </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" checked={this.state.isSuperUser}/>
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
                    <input className="form-check-input" type="checkbox" id="gridCheck1" checked={this.state.isActive} />
                    <label className="form-check-label" for="gridCheck1">
                      Disable this account
                  </label>
                  </div>
                </div>
              </div>
            </form>

          </div>
          <div className="btn-container">
            <button className="btn btn-success">Save</button>
            <button className="btn btn-primary" onClick={this.props.handleClose}>Close</button>
          </div>

        </div>
      </div>
    );
  };
};

export default UserModal;