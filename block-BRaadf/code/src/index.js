import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
import userContext from "./components/UseContext";

let userInfo = {
  user: "bal",
  Token: "ihgvoiuhvidjvniduhjgn.dfbdh.sdfiuh8",
};
ReactDOM.render(
  <userContext.Provider value={userInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </userContext.Provider>,
  document.getElementById("root")
);