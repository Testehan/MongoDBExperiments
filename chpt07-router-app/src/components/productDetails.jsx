import React, { Component } from "react";
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();

  //   handleSave = () => {
  //   // Navigate to /products
  // };
    return (
      <div>
        <h1>Product Details -  {id}</h1>
        {/*<button onClick={this.handleSave}>Save</button>*/}
      </div>
    );
}

export default ProductDetails;
