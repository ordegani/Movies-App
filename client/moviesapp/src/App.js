import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SearchForFilm from "./components/SearchForFilm.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
const [save, setsave]=useState(false);
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchForFilm} />
        <Route path="/saved" exact><Home setsave={setsave}/> </Route>
      </div>
    </Router>
  );
}

export default App;
