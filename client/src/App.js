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
    name:"Lester Tester"
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" render={() => (<Dashboard isSuperUser={this.state.isSuperUser} name={this.state.name} />)} />
            <Route exact path="/usermgmt" render={() => (<UserMgmt isSuperUser={this.state.isSuperUser} name={this.state.name} />)} />
            <Route exact path="/prodmgmt" render={() => (<ProdMgmt isSuperUser={this.state.isSuperUser} name={this.state.name} />)} />
            <Route exact path="/sales" render={() => (<Sales isSuperUser={this.state.isSuperUser} name={this.state.name} />)} />
            <Route exact path="/checkin" render={() => (<CheckIn isSuperUser={this.state.isSuperUser} name={this.state.name} />)} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
