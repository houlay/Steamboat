import React from "react";
import Navbar from "../components/Navbar";
import DisplayContainer from "../components/DisplayContainer";
import ProdCard from "../components/ProdCard";
import PageTitle from "../components/PageTitle";
import AddBtn from "../components/AddBtn";
import ProdModal from "../components/ProdModal";


// for testing
var prodList = [
  {
    name: "Package ABC"
    
  },
  {
    name: "Package XYZ"

  }
];

class ProdMgmt extends React.Component {
  state = {
    name: "",
    isSuperUser: false,
    products: prodList,
    targetProd: ""
  }

  showModal = (prodname) => {
    this.setState({ 
      show: true,
      targetProd: prodname
     });
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      targetProd: ""
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
          activeStatus2="nav-item nav-link"
          activeStatus3="nav-item nav-link active"
          hrefOne={this.state.hrefOne}
          hrefTwo={this.state.hrefTwo}
          optionOne={this.state.optionOne}
          optionTwo={this.state.optionTwo}
        />
        <PageTitle>Current list of products</PageTitle>
        <DisplayContainer>
          <AddBtn showModal={this.showModal}>Add A Product</AddBtn>
          <AddBtn>Dashboard</AddBtn>
          {this.state.products.map(product => (
            <ProdCard prodname={product.name} showModal={this.showModal} />
          ))}
        </DisplayContainer>
        <ProdModal 
        show={this.state.show} 
        handleClose={this.hideModal}
        product={this.state.targetProd}
        />
      </div>
    );
  };
};

export default ProdMgmt;