import React from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import SuperUserDashboard from "../components/SuperUserDashboard";
import NormalUserDashboard from "../components/NormalUserDashboard";

class Dashboard extends React.Component {
  state = {
    name: "",
    isSuperUser: false,
    isAuthenticated: false,
    products: [],
    customers: [],
    packageLow: [],
    users: [],
    availableProducts: []
  }

  componentWillMount() {
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

  loadProductsAndUser = () => {
    let totalPackage;
    var packageLow;
    let userCount;
    let products;
    let users;
    API.getPackages()
      .then(res => {
        totalPackage = res.data.length;
        packageLow = res.data.filter(arr => (arr.occupants < 4));
        products = res.data;
        API.getUsers()
          .then(res => {
            userCount = res.data.length;
            users = res.data;
            this.setState({ 
              products: products,
              totalPackage: totalPackage,
              packageLow: packageLow,
              userCount: userCount,
              users: users,
            });
          })
          .catch(err => console.log(err));       
      })
      .catch(err => console.log(err));
  };

  loadCustomers = () => {
    let uncheckedCustomer;
    let availableProducts;
    API.getCustomers()
      .then(res => {
        uncheckedCustomer = res.data.filter(arr => (!arr.isCheckedin))
        API.getPackages()
          .then(res => {            
            availableProducts = res.data.filter(arr => (arr.occupants != 0))
            this.setState({ 
              customers: uncheckedCustomer,
              availableProducts: availableProducts
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    if (this.state.isSuperUser) {
      this.loadProductsAndUser();
    } else {
      this.loadCustomers();
    };    
  };

  render() {
    if (this.state.isAuthenticated) {
      if (this.state.isSuperUser) {
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
            <SuperUserDashboard
              totalPackage={this.state.totalPackage}
              packageLow={this.state.packageLow}
              products={this.state.products}
              userCount={this.state.userCount}
              users={this.state.users}
            />
          </div>
        )
      } else {
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
            <NormalUserDashboard
              customers={this.state.customers}
              products={this.state.availableProducts}
            />
          </div>
        )
      }      
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