// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// // import Ui from "./components/Ui";
// import RegisterForm from "./components/RegisterForm";
// // import Counter from "./components/Counter";
// // import NewYearLights from "./components/NewYearLights";

// function App() {
//   return (
//     <div>
//       {/* <Ui /> */}
//       {/* <Counter />
//       <NewYearLights /> */}
//       <RegisterForm />
//     </div>
//   );
// }

// // export default App;
// import React, { useReducer, useState } from "react";
// import { todoReducer, initialState } from "./todoReducer";
// import TodoList from "./TodoList";

// const App = () => {
//   const [state, dispatch] = useReducer(todoReducer, initialState);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   const handleAddTodo = () => {
//     if (input.trim()) {
//       dispatch({ type: "ADD_TODO", payload: input });
//       setInput("");
//     }
//   };

//   const handleToggleTodo = (id) => {
//     dispatch({ type: "TOGGLE_TODO", payload: id });
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch({ type: "DELETE_TODO", payload: id });
//   };

//   const handleEditTodo = (id, title) => {
//     setEditId(id);
//     setEditText(title);
//   };

//   const handleSaveEdit = (id) => {
//     if (editText.trim()) {
//       dispatch({
//         type: "EDIT_TODO",
//         payload: { id, newTitle: editText },
//       });
//       setEditId(null);
//       setEditText("");
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditId(null);
//     setEditText("");
//   };

//   return (
//     <div style={{ padding: "30vh" }}>
//       <h2 style={{ fontSize: "30px" }}>To Do List</h2>
//       <input
//         style={{ padding: "10px" }}
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Тапсырма енгізіңіз"
//       />
//       <button onClick={handleAddTodo}>Қосу</button>

//       <TodoList
//         todos={state.todos}
//         onToggle={handleToggleTodo}
//         onDelete={handleDeleteTodo}
//         onEdit={handleEditTodo}
//         onSave={handleSaveEdit}
//         onCancel={handleCancelEdit}
//         editId={editId}
//         editText={editText}
//         setEditText={setEditText}
//       />
//     </div>
//   );
// };

// export default App;
import React from "react";
import ProductList from "./Exam 10/ProductList";
import "./App.css";
import CardContext from "./Exam 10/CardContext";

function App() {
  return (
    <div>
      <h1>Cart Manager</h1>
      <ProductList />
      <CardContext />
    </div>
  );
}
export default App;
