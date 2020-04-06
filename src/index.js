import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./Components/QuoteBox";
import "./global.css";

function App() {
  return <QuoteBox />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
