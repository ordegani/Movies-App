import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main.js";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <Navbar /> */}
        <br />
        <Route exact path="/" component={Main} />
      </div>
    </Router>
  );
}

export default App;
