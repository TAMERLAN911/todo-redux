import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";

const initalState = {
  array: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        array: [action.payload, ...state.array],
      };
    case "delete":
      return {
        ...state,
        array: [
          ...state.array.filter((text, index) => {
            if (index !== action.payload.id) {
              return true;
            }
          }),
        ],
      };

    case "TaskCompleted":
      return [...state].map((todo) =>
        todo.id === action.id ? { ...todo, complited: !todo.complited } : todo
      );
    default:
      return state;
  }
};

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
