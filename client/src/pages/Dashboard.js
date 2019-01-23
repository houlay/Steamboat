import React from "react";
import Navbar from "../components/Navbar";

class Dashboard extends React.Component {
  state = {
    name: "",
    isSuperUser: false,
    isAuthenticated: false
  }

  componentDidMount() {
    // Check the user's access level and then set state accordingly
    if (!this.props.isSuperUser) {
      // Set state for normal user
      this.setState({
        isSuperUser: this.props.isSuperUser,
        name: this.props.name,
        isAuthenticated: this.props.isAuthenticated,
        hrefOne: "/sales",
        hrefTwo: "/checkin",
        optionOne: "Create a new order",
        optionTwo: "Check in customers"
      });
    } else {
      // Set state for super user
      this.setState({
        isSuperUser: this.props.isSuperUser,
        name: this.props.name,
        isAuthenticated: this.props.isAuthenticated,
        hrefOne: "/usermgmt",
        hrefTwo: "/prodmgmt",
        optionOne: "Manage users",
        optionTwo: "Manage products"
      })
    };
  };

  render() {
    if (this.state.isAuthenticated) {
      return(
        <div>
          <Navbar
            name={this.state.name}
            activeStatus1="nav-item nav-link active"
            activeStatus2="nav-item nav-link"
            activeStatus3="nav-item nav-link"
            hrefOne={this.state.hrefOne}
            hrefTwo={this.state.hrefTwo}
            optionOne={this.state.optionOne}
            optionTwo={this.state.optionTwo}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Unauthenticated request!</h2>
          <p>You need to be logged in to access this page!</p>
        </div>
      );
    };    
  };
};

export default Dashboard;