import React from "react";
import Navbar from "../components/Navbar";
import DisplayContainer from "../components/DisplayContainer";
import PageTitle from "../components/PageTitle";
import AddBtn from "../components/AddBtn";
import UserModal from "../components/UserModal";
import UserCardHolder from "../components/UserCardHolder";
import { Redirect } from 'react-router-dom';


class UserMgmt extends React.Component {
  
  state = {
    name: "",
    isSuperUser: false,
    show: false,
    targetUser: "",
    targetUserEmail: "",
    targetUserIsSuperUser: false,
    targetUserIsActive: true,
    hrefOne: "",
    hrefTwo: "",
    optionOne: "",
    optionTwo: "",
    needRedirect: false
  }

  handleRefresh = () => {
    this.setState({ needRedirect: true });
  };

  showModal = (dataFromCallback) => {      
    if (dataFromCallback === "add"){
      this.setState({
        show: true,
        targetUser: "",
        targetUserIsSuperUser: false,
        targetUserIsActive: true
      });
    } else {
      this.setState({ 
        show: true,
        targetUser: dataFromCallback.username,
        targetUserEmail: dataFromCallback.email,
        targetUserIsSuperUser: dataFromCallback.isSuperUser,
        targetUserIsActive: dataFromCallback.isActive
      });
    };
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      targetUser: ""
     });
  };

  componentWillMount() {
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
      });
    };
  }

  render() {
    if (this.state.isAuthenticated) {
      return(
        <div>
          {this.state.needRedirect ? <Redirect to="/dashboard" /> :
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
              <AddBtn handleRefresh={this.handleRefresh}>Dashboard</AddBtn>
              <UserCardHolder showModal={this.showModal} />
            </DisplayContainer>
            <UserModal 
            show={this.state.show} 
            handleClose={this.hideModal}
            user={this.state.targetUser}
            email={this.state.targetUserEmail}
            isSuperUser={this.state.isSuperUser}
            isActive={this.state.isActive}
            />
          </div>
          }
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