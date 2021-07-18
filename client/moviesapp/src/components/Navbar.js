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
      </ul>
    </div>
  );
}

export default Navbar;
