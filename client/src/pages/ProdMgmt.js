import React from "react";
import Navbar from "../components/Navbar";
import DisplayContainer from "../components/DisplayContainer";
import ProdCard from "../components/ProdCard";
import PageTitle from "../components/PageTitle";
import AddBtn from "../components/AddBtn";
import ProdModal from "../components/ProdModal";
import { Redirect } from 'react-router-dom';
import ProductCardHolder from "../components/ProdCardHolder";
import ProdCardHolder from "../components/ProdCardHolder";

class ProdMgmt extends React.Component {
  state = {
    name: "",
    isSuperUser: false,
    products: [],
    targetProd: "",

    needRedirect: false
  }

  handleRefresh = () => {
    this.setState({ needRedirect: true });
  };

  showModal = (dataFromCallback) => {        
    if (dataFromCallback === "add"){
      this.setState({
        show: true,
        targetProd: "",
        targetProdOccupants: "",
        targetProdCost: ""
      });
    } else {
      this.setState({ 
        show: true,
        targetProdId: dataFromCallback.id,
        targetProd: dataFromCallback.name,
        targetProdOccupants: dataFromCallback.occupants,
        targetProdCost: dataFromCallback.cost,
      });
    };
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      targetProd: ""
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
              <AddBtn handleRefresh={this.handleRefresh}>Dashboard</AddBtn>
              <ProdCardHolder showModal={this.showModal} />
            </DisplayContainer>
            <ProdModal 
              show={this.state.show} 
              handleClose={this.hideModal}
              productId={this.state.targetProdId}
              product={this.state.targetProd}
              occupants={this.state.targetProdOccupants}
              cost={this.state.targetProdCost}
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

export default ProdMgmt;