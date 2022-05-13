import React from 'react';
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


const rootEl = document.getElementById('root');


if (rootEl) {
    ReactDOM.render(<App />, rootEl);
}