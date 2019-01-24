import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserMgmt from "./pages/UserMgmt";
import ProdMgmt from "./pages/ProdMgmt";
import Sales from "./pages/Sales";
import CheckIn from "./pages/CheckIn";
import API from "./utils/API";

class App extends React.Component {
  state = {
    isSuperUser: false,
    isAuthenticated: false,
    isActive: false,
    name:"Lester Tester",
    userList: null,
    packageList: null
  }

  userAuthCallback = (dataFromLogin) => {

    this.setState({
      name: dataFromLogin.name,
      isSuperUser: dataFromLogin.isSuperUser,
      isActive: dataFromLogin.isActive,
      isAuthenticated: true
    });
  };

  loadPackages = () => {
    // Get current list of products from database
    API.getPackages()
      .then(res => {
        this.setState({ packageList: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={props => <Login {...props} callbackFromParent={this.userAuthCallback} />} />
            <Route exact path="/dashboard" render={() => (<Dashboard isSuperUser={this.state.isSuperUser} name={this.state.name} isAuthenticated={this.state.isAuthenticated} />)} />
            <Route exact path="/usermgmt" render={() => (<UserMgmt loadUsers={this.loadUsers} userList={this.state.userList} isSuperUser={this.state.isSuperUser} name={this.state.name} isAuthenticated={this.state.isAuthenticated} />)} />
            <Route exact path="/prodmgmt" render={() => (<ProdMgmt isSuperUser={this.state.isSuperUser} name={this.state.name} isAuthenticated={this.state.isAuthenticated} />)} />
            <Route exact path="/sales" render={() => (<Sales isSuperUser={this.state.isSuperUser} name={this.state.name} isAuthenticated={this.state.isAuthenticated} />)} />
            <Route exact path="/checkin" render={() => (<CheckIn isSuperUser={this.state.isSuperUser} name={this.state.name} isAuthenticated={this.state.isAuthenticated} />)} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
