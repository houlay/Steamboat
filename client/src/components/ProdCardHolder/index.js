import React from "react";
import ProdCard from "../ProdCard";
import API from "../../utils/API";

class ProdCardHolder extends React.Component {

  state = {
    products: []
  };

  componentWillMount() {
    API.getPackages()
    .then(res => {
      console.log(res);
      this.setState({ products: res.data });
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="user-card-holder">
        {this.state.products.map(product => (
          <ProdCard
            key={product.id}
            productId={product.id}
            product={product.name}
            occupants={product.occupants}
            cost={product.costPerOccupant}
            showModal={this.props.showModal}
          />
        ))}
      </div>
    );
  };
};

export default ProdCardHolder;