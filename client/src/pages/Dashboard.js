import React from "react";
import Navbar from "../components/Navbar";

class Dashboard extends React.Component {
  state = {
    name: "",
    isSuperUser: false
  }

  componentDidMount() {
    // Check the user's access level and then set state accordingly
    if (!this.props.isSuperUser) {
      // Set state for normal user
      this.setState({
        isSuperUser: this.props.isSuperUser,
        name: this.props.name,
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
        hrefOne: "/usermgmt",
        hrefTwo: "/prodmgmt",
        optionOne: "Manage users",
        optionTwo: "Manage products"
      })
    };
  };

  render() {
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
  };
};

export default Dashboard;