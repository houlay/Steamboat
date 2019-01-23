import React from "react";
import Navbar from "../components/Navbar";
import DisplayContainer from "../components/DisplayContainer";
import UserCard from "../components/UserCard";
import PageTitle from "../components/PageTitle";
import AddBtn from "../components/AddBtn";
import UserModal from "../components/UserModal";
import API from "../utils/API";


class UserMgmt extends React.Component {
  
  constructor() {
    this.userList = null;
  }

  state = {
    name: "",
    isSuperUser: false,
    show: false,
    targetUser: "",
    users: [],
    hrefOne: "",
    hrefTwo: "",
    optionOne: "",
    optionTwo: ""
  }

  loadUsers = () => {
    // Get current user list from database
    API.getUsers()
      .then(res => {
        this.userList = res.data;
      })
      .catch(err => console.log(err));
  };

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

  componentWillMount() {
    this.loadUsers();
    // Check the user's access level and then set state accordingly
    if (this.props.isSuperUser) {
      // Set state for super user
      this.setState({
        isSuperUser: this.props.isSuperUser,
        name: this.props.name,
        isAuthenticated: this.props.isAuthenticated,
        hrefOne: "/usermgmt",
        hrefTwo: "/prodmgmt",
        optionOne: "Manage users",
        optionTwo: "Manage products",
        users: this.userList
      });
      console.log("i ran!")
      console.log(this.state.users)
    };
  }

  render() {
    if (this.state.isAuthenticated) {
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
                key={user.id}
                username={user.name} 
                isSuperUser={user.isSuperUser} 
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
    } else {
      return (
        <div>
          <h2>Unauthenticated request!</h2>
          <p>You need to be logged in to access this page!</p>
        </div>
      );
    }
  };
};

export default UserMgmt;