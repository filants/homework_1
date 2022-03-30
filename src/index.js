import React from "react";
import ReactDOM from "react-dom/client";

// REACT 18 - Сначала создание корня через константу
const root = ReactDOM.createRoot(document.querySelector("#root"));

// REACT 18 - Далее его рендер
const element = <h1>Hello World!</h1>;
root.render(element);
