import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SearchForFilm from "./components/SearchForFilm.js";
import Navbar from "./components/Navbar";
import Home2 from "./components/Home2";


function App() {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route exact path="/" component={Home2} />
        <Route exact path="/search" component={SearchForFilm} />
      </div>
    </Router>
  );
}

export default App;
