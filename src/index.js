import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
// import { ContextProvider } from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Router>
  {/* <ContextProvider> */}
    <App />
  {/* </ContextProvider> */}
  </Router>
  
);
