import React from "react";

function ProductList({ products, dispatch }) {
  return (
    <section className="product-list">
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
