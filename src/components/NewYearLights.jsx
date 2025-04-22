import React, { useReducer } from "react";

const initialState = {
  currentColorIndex: 5,
};
const colors = ["red", "green", "blue", "purple", "pink", "black", "grew"];

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        currentColorIndex: (state.currentColorIndex + 1) % colors.length,
      };
    default:
      return state;
  }
}

function NewYearLights() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentColor = colors[state.currentColorIndex];

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>New Year</h2>

      <div
        style={{
          backgroundColor: currentColor,
          borderRadius: "50%",
          width: "200px",
          height: "150px",
        }}
      ></div>
      <button onClick={() => dispatch({ type: "NEXT_COLOR" })}>
        Click to change
      </button>
    </div>
  );
}
export default NewYearLights;
