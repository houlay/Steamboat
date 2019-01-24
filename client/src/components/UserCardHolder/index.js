import React from "react";
import UserCard from "../UserCard";
import API from "../../utils/API";

class UserCardHolder extends React.Component {

  state = {
    users: []
  };

  componentWillMount() {
    API.getUsers()
    .then(res => {
      this.setState({ users: res.data });
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <UserCard 
            key={user.id}
            username={user.name}
            email={user.email}
            isSuperUser={user.isSuperUser}
            isActive={user.isActive}
            showModal={this.props.showModal}
          />
        ))}
      </div>
    );
  };
};

export default UserCardHolder;