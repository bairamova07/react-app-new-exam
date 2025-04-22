import React, { useReducer } from "react";

const initialState = { cart: [] };

function CardContext() {
  const [state, dispatch] = useReducer(CardReducer, { cart: 0 });
  return (
    <div>
      <h1>Cart:{state.count}</h1>
      <button onClick={() => dispatch({ type: "REMOVE_ITEM " })}>Remove</button>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear</button>
      <button onClick={() => dispatch({ type: "ADD_ITEM " })}>Add</button>
    </div>
  );
}

export default CardContext;
