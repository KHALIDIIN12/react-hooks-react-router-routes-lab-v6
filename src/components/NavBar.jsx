import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar"> {/* ✅ Fixed */}
      <Link to="/">Home</Link>
      <Link to="/directors">Directors</Link>
      <Link to="/actors">Actors</Link>
    </nav>
  );
}

export default NavBar;