import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src="images/icon.webp" alt="logoImg" />
      <h1 className="nav--title">My Travel Experience</h1>
    </nav>
  );
}

export default Navbar;
