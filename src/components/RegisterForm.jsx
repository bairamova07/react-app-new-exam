import React, { useReducer } from "react";

//Бастапқы күй
const initialState = {
  name: "",
  email: "",
  password: "",
  error: "",
};

//Бастапқы күй
// күйді жаңарту логикасы жане әртүрлі әрекеттерге жауап береді
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload }; //...state-бұрынғы деректерді сақтау үшін қолданылады,бұрын жазылған мәліметтерді сақтайды
    case "SET_EMAIL":
      return { ...state, email: action.payload }; //payload -user-дің инпутқа жазғаны
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "CLEAR_FORM":
      return initialState;
    default:
      return state;
  }
};

//Компонент
function RegisterForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //егер өрістердің біреуі бос болып қалса қате жібереді
    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", payload: "Барлық өрістерді толтырыңыз!" });
      return;
    }

    //Тіркелу сәтті болса
    console.log("Тіркелу сәтті:",state);

    //Форманы тазалау
    dispatch({ type: "CLEAR_FORM" });
  };

  return (
    <div>
      <h1>Тіркелу</h1>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Аты:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </div>

        <div>
          <label>Электронды почта:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>

        <div>
          <label>Пароль</label>
          <input
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />
        </div>

        <button type="submit">Тіркелу</button>
      </form>
    </div>
  );
}

export default RegisterForm;
