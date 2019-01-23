import React from "react";
import Navbar from "../components/Navbar";
import DisplayContainer from "../components/DisplayContainer";
import UserCard from "../components/UserCard";
import PageTitle from "../components/PageTitle";
import AddBtn from "../components/AddBtn";
import UserModal from "../components/UserModal";

// for testing
var userList = [
  {
    name: "Lester Tester",
    time: "2019-01-18 10:35:46",
    isActive: true
  },
  {
    name: "Tester Lester",
    time: "2019-01-18 11:28:33",
    isActive: false
  }
];

class UserMgmt extends React.Component {
  state = {
    name: "",
    isSuperUser: false,
    users: userList,
    show: false,
    targetUser: ""
  }

  showModal = (username) => {
    this.setState({ 
      show: true,
      targetUser: username
     });
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      targetUser: ""
     });
  };

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
          activeStatus1="nav-item nav-link"
          activeStatus2="nav-item nav-link active"
          activeStatus3="nav-item nav-link"
          hrefOne={this.state.hrefOne}
          hrefTwo={this.state.hrefTwo}
          optionOne={this.state.optionOne}
          optionTwo={this.state.optionTwo}
        />
        <PageTitle>Current list of users</PageTitle>
        
        <DisplayContainer>
          <AddBtn showModal={this.showModal}>Add A User</AddBtn>
          <AddBtn>Dashboard</AddBtn>
          {this.state.users.map(user => (
            <UserCard 
              username={user.name} 
              time={user.time} 
              showModal={this.showModal}
              isActive={user.isActive}
            />
          ))}
        </DisplayContainer>
        <UserModal 
        show={this.state.show} 
        handleClose={this.hideModal}
        user={this.state.targetUser}
        />
      </div>
    );
  };
};

export default UserMgmt;