import React from "react";
import "./index.css";
import ReactDOM from 'react-dom';
import App from "./App.tsx";
import { store } from "./app/store.tsx";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
