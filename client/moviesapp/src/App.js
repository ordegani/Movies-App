import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SearchForFilm from "./components/SearchForFilm.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Saved from "./components/Saved";
import Join from "./components/Join";
import Login from "./components/Login.js";
function App() {
  // const [save, setsave] = useState([]);
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />

        <Route
          path="/users"exact>
          <Join/>
        </Route>
        <Route exact path="/users/login" component={Login}></Route>
        <Route exact path="/search" component={SearchForFilm} />
        <Route path="/" exact>
          <Home save={save} setsave={setsave} />
        </Route>
        <Route path="/saved" exact>
          <Saved save={save} setsave={setsave} />
        </Route>

      </div>
    </Router>
  );
}

export default App;
