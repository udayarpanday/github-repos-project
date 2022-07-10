import React from "react";
import "./styles/_manifest.scss";
import ReactDOM from 'react-dom';
import App from "./App.tsx";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
