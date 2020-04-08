import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function Navbar() {
  return (
    <header>
      <nav class="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/music">MUSIC</Link>
        <Link to="/mac">MAC</Link>
        <Link to="/ipad">IPAD</Link>
      </nav>
    </header>
  );
}

export default Navbar;
