import React from "react";

function ProductList() {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="container1">
        <h3>Book-2000т</h3>
        <button onClick={() => dispatch({ type: "ADD_ITEM" })}>
          Add to Cart
        </button>
      </div>
      <div className="container1">
        <h3>Laptop-150000т</h3>
        <button onClick={() => dispatch({ type: "ADD_ITEM" })}>
          Add to Cart
        </button>
      </div>
      <div className="container1">
        <h3>Headphones-12000т</h3>
        <button onClick={() => dispatch({ type: "ADD_ITEM" })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductList;
