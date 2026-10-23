import React, { useReducer } from "react";
import cartReducer from "./reducer"; // reducer.js-ம் src-ல்தான் உள்ளது, எனவே './reducer'
import ProductList from "./components/ProductList"; // components ஃபோல்டரில் உள்ளது
import Cart from "./components/Cart"; // components ஃபோல்டரில் உள்ளது

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500
  }
];

function App() {
  const initialState = [];

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Shopping Cart Using useReducer</h1>

      <ProductList
        products={products}
        dispatch={dispatch}
      />

      <Cart
        cart={cart}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
