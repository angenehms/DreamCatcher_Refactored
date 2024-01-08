import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

// import { useSelector, useDispatch } from 'react-redux';
// 위 두개 useSelector 와 useDispatch 는 스테이트가 직접 쓰이는 컴포넌트에서 호출되어 쓰여야한다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
