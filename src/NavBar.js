import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/soda">SODA</Link>
      <Link to="/chips">CHIPS</Link>
      <Link to="/sardines">FRESH SARDINES</Link>
    </nav>
  );
}

export default NavBar;
