import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div>
      <ul className="navbarUl">
          <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/saved">
            Saved
          </Link>
        </li>
        <li>
          <Link className="link" to="/search">
            Search
          </Link>
        </li>
        <li>
        <Link className="link" to="/authentication">
            login
          </Link>
          </li>
      </ul>
    </div>
  );
}

export default Navbar;
