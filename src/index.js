import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Bọc App với Provider, truyền vào đối tượng store
  // Giúp tất cả component trong App có thể dùng được redux store
  <Provider store={store}>
    <App />
  </Provider>
);
