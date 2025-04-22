import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: false, //деректер жүктеліп жаткан кезде loading:true болады
  data: null, //Арі келетін данныйлар осы датанын ішінде сақталып отырады
  error: "", //қандай да бір қате шығатын болса осыған сақталып шығарып береді
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" }; //...state-Юзердің қазіргі іс-әрекеті қайтарылу барысында басқа функция
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload }; //action.payload--юзердін инпутқа жазған әрекеті
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Ui() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const productsData = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const response = await fetch(
          "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books"
        );
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "There is a error" });
      }
    };
    productsData();
  }, []);
  return (
    <div>
      <h1>API+UseReduser</h1>
      {state.loading && <p>Loading</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      {state.data && (
        <div style={{ display: "flex", gap: "20px" }}>
          {state.data.map((item) => (
            <div className="conBook"
              key={item.id}
              style={{
                border: "5px solid black",
                padding: "20px",
              }}
            >
              <h2>{item.title}</h2>
              <img className="img" src={item.image} style={{ width: "200px" }} />
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Ui;
